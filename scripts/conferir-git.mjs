// Trava de publicação: o site no ar tem que ser sempre o que está no GitHub.
// A rotina do blog/news publica a partir do GitHub várias vezes por dia. Se alguém
// publicar do próprio computador um código que não está lá, a próxima rodada da
// rotina derruba essa versão. Então:
//   antes do deploy ("antes"): bloqueia se houver mudança sem commit ou se o GitHub
//   tiver commit que esta pasta ainda não tem;
//   depois do deploy ("depois"): manda os commits locais pro GitHub.
import { execSync } from "node:child_process";

const git = (cmd) => execSync(`git ${cmd}`, { encoding: "utf8" }).trim();
const etapa = process.argv[2] ?? "antes";
const ramo = git("rev-parse --abbrev-ref HEAD");

function parar(msg) {
  console.error(`\n[publicar] BLOQUEADO: ${msg}\n`);
  process.exit(1);
}

if (etapa === "antes") {
  if (ramo !== "main") parar(`você está no ramo "${ramo}". Publique só a partir do main.`);
  const sujo = git("status --porcelain");
  if (sujo) parar(`tem mudança sem commit:\n${sujo}\nFaça o commit antes de publicar, senão a rotina do blog derruba essa versão.`);
  git("fetch -q origin main");
  const atras = Number(git("rev-list --count HEAD..origin/main"));
  if (atras > 0) parar(`o GitHub tem ${atras} commit(s) que esta pasta não tem (ex.: posts do blog). Rode "git pull --rebase origin main" e publique de novo.`);
  console.log("[publicar] git ok: pasta igual ou à frente do GitHub.");
} else {
  const frente = Number(git("rev-list --count origin/main..HEAD"));
  if (frente > 0) {
    git("push -q origin main");
    console.log(`[publicar] ${frente} commit(s) enviados pro GitHub.`);
  }
}
