import logoEletropolo from "@/assets/logo-eletropolo.png";
import logoRutra from "@/assets/logo-rutra.png";
import logoVerona from "@/assets/logo-verona.png";
import logoNordife from "@/assets/logo-nordife.png";
import logoBethaniaLuna from "@/assets/logo-bethania-luna.png";
import logoInstitutoK from "@/assets/logo-instituto-k.png";
import logoOdontogalerie from "@/assets/logo-odontogalerie.png";
import logoNattaneLucena from "@/assets/logo-nattane-lucena.png";
import logoArteMusical from "@/assets/logo-arte-musical.png";
import logoCasatudo from "@/assets/logo-casatudo.png";
import logoBlcMotors from "@/assets/logo-blc-motors.png";
import logoNataliaFernandes from "@/assets/logo-natalia-fernandes.png";
import logoManaPoke from "@/assets/logo-mana-poke.png";
import logoBotoHarmony from "@/assets/logo-boto-harmony.png";
import logoRenoveCasa from "@/assets/logo-renove-casa.png";
import logoKallas from "@/assets/logo-kallas.png";

// Regra do Kairo (26/10/2026): pode listar cliente, mas nenhum resultado do site
// é ligado a um cliente. Esta lista fica sempre separada dos resultados.
const clientes = [
  { nome: "Renove Casa", logo: logoRenoveCasa },
  { nome: "Nordife", logo: logoNordife },
  { nome: "BotoHarmony", logo: logoBotoHarmony },
  { nome: "BLC Motors", logo: logoBlcMotors },
  { nome: "Dra. Natália Fernandes", logo: logoNataliaFernandes },
  { nome: "Clínica Bethânia Luna", logo: logoBethaniaLuna },
  { nome: "Casatudo", logo: logoCasatudo },
  { nome: "Mana Poke", logo: logoManaPoke },
  { nome: "Eletropolo", logo: logoEletropolo },
  { nome: "Verona", logo: logoVerona },
  { nome: "Odontogalerie", logo: logoOdontogalerie },
  { nome: "Instituto K", logo: logoInstitutoK },
  { nome: "Nattane Lucena", logo: logoNattaneLucena },
  { nome: "Rutra", logo: logoRutra },
  { nome: "Arte Musical", logo: logoArteMusical },
  { nome: "Kallas Mídia OOH", logo: logoKallas },
];

// O logo vira máscara pintada com a cor do texto, então logo branco, preto ou
// colorido aparece todo no mesmo tom.
const Clientes = ({ titulo = "Empresas que já passaram pela Domous" }: { titulo?: string }) => (
  <section className="py-16 md:py-20 bg-secondary/40">
    <div className="container mx-auto px-4 lg:px-8">
      <h2 className="text-2xl md:text-3xl text-center mb-3">{titulo}</h2>
      <p className="text-center text-muted-foreground mb-10">Mais de 70 empresas atendidas, de João Pessoa e de outros estados.</p>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
        {clientes.map((c) => (
          <li key={c.nome} className="flex items-center justify-center h-20 px-5 bg-card rounded-xl border border-border">
            <span
              role="img"
              aria-label={c.nome}
              title={c.nome}
              className="block w-full h-9 bg-foreground opacity-70"
              style={{
                maskImage: `url(${c.logo})`,
                WebkitMaskImage: `url(${c.logo})`,
                maskRepeat: "no-repeat",
                WebkitMaskRepeat: "no-repeat",
                maskPosition: "center",
                WebkitMaskPosition: "center",
                maskSize: "contain",
                WebkitMaskSize: "contain",
              }}
            />
          </li>
        ))}
      </ul>
      <p className="sr-only">Clientes: {clientes.map((c) => c.nome).join(", ")}.</p>
    </div>
  </section>
);

export default Clientes;
