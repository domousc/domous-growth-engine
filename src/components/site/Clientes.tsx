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
import logoEmpresaFora from "@/assets/logo-empresa-fora.png";
import logoCheckoutTransparent from "@/assets/logo-checkout-transparent.png";
import logoCliqueBrinque from "@/assets/logo-clique-brinque.png";
import logoBricksFans from "@/assets/logo-bricks-fans.png";

// Regra do Kairo (26/10/2026): pode listar cliente, mas nenhum resultado do site
// é ligado a um cliente. Esta lista fica sempre separada dos resultados.
const clientes = [
  { nome: "Renove Casa", logo: logoRenoveCasa },
  { nome: "Empresa Fora", logo: logoEmpresaFora },
  { nome: "Nordife", logo: logoNordife },
  { nome: "Bricks Fans", logo: logoBricksFans },
  { nome: "BotoHarmony", logo: logoBotoHarmony },
  { nome: "BLC Motors", logo: logoBlcMotors },
  { nome: "Checkout Transparent", logo: logoCheckoutTransparent },
  { nome: "Clique Brinque", logo: logoCliqueBrinque },
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
const Clientes = ({ titulo = "Empresas atendidas pela Domous" }: { titulo?: string }) => (
  <section className="py-12 md:py-16">
    <div className="container mx-auto px-4 lg:px-8">
      <h2 className="text-2xl md:text-3xl text-center mb-3">{titulo}</h2>
      <p className="text-center text-muted-foreground mb-10">Mais de 70 empresas atendidas, de João Pessoa e de outros estados.</p>
      <div className="fx-faixa max-w-6xl mx-auto" aria-hidden>
        <ul className="fx-faixa-trilho">
          {[...clientes, ...clientes].map((c, i) => (
            <li key={c.nome + i} className="flex items-center justify-center h-14 w-36 md:w-44 px-5 shrink-0">
              <span
                title={c.nome}
                className="block w-full h-8 bg-foreground opacity-60 hover:opacity-100 transition-opacity"
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
      </div>
      <p className="sr-only">Clientes: {clientes.map((c) => c.nome).join(", ")}.</p>
    </div>
  </section>
);

export default Clientes;
