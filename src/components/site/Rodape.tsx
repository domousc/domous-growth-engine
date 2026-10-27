import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import logoBranco from "@/assets/logo-domous-white.png";
import { site } from "@/data/site";
import { servicos } from "@/data/servicos";
import { segmentos } from "@/data/segmentos";

const Rodape = () => (
  <footer className="section-dark border-t border-white/10 pt-16 pb-28 md:pb-12">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 mb-12">
        <div>
          <img src={logoBranco} alt="Domous Business Performance" className="h-9 mb-5" width={188} height={36} loading="lazy" />
          <p className="text-dark-muted text-sm leading-relaxed mb-5">
            Agência de tráfego pago e growth em João Pessoa, PB. Anúncio, página, atendimento no WhatsApp e medição até a venda.
          </p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" aria-hidden /> João Pessoa, Paraíba
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" aria-hidden />
              <a href={`tel:${site.telefoneE164}`} className="hover:text-primary">(83) 98119-5186</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" aria-hidden />
              <a href={`mailto:${site.email}`} className="hover:text-primary">{site.email}</a>
            </li>
            <li className="flex items-center gap-2">
              <Instagram className="w-4 h-4 text-primary" aria-hidden />
              <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-primary">@domousc</a>
            </li>
            <li className="flex items-center gap-2">
              <Linkedin className="w-4 h-4 text-primary" aria-hidden />
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary">LinkedIn da Domous</a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-base font-bold mb-4">Serviços</h2>
          <ul className="space-y-2 text-sm">
            {servicos.map((s) => (
              <li key={s.slug}>
                <a href={`/servicos/${s.slug}/`} className="text-dark-muted hover:text-white">{s.nome}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-base font-bold mb-4">Segmentos</h2>
          <ul className="space-y-2 text-sm">
            {segmentos.map((s) => (
              <li key={s.slug}>
                <a href={`/segmentos/${s.slug}/`} className="text-dark-muted hover:text-white">{s.nome}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-base font-bold mb-4">Domous</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="/raio-x-domous/" className="text-dark-muted hover:text-white">Raio-X Domous</a></li>
            <li><a href="/cases/" className="text-dark-muted hover:text-white">Resultados</a></li>
            <li><a href="/quanto-custa/" className="text-dark-muted hover:text-white">Quanto custa</a></li>
            <li><a href="/sobre/" className="text-dark-muted hover:text-white">Sobre a Domous</a></li>
            <li><a href="/blog/" className="text-dark-muted hover:text-white">Blog</a></li>
            <li><a href="/news/" className="text-dark-muted hover:text-white">Domous News</a></li>
            <li><a href="/como-escolher-agencia-de-trafego-pago/" className="text-dark-muted hover:text-white">Como escolher uma agência</a></li>
            <li><a href={site.siteKairo} className="text-dark-muted hover:text-white">Kairo Lucas</a></li>
          </ul>
        </div>
      </div>

      <div className="pt-8 border-t border-white/10 text-xs text-dark-muted flex flex-col md:flex-row gap-2 md:justify-between">
        <p>© {new Date().getFullYear()} Domous Business Performance · CNPJ {site.cnpj}</p>
        <p>João Pessoa, PB · Atendimento em todo o Brasil</p>
      </div>
    </div>
  </footer>
);

export default Rodape;
