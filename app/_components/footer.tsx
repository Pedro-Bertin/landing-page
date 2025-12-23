import {
  FacebookLogoIcon,
  InstagramLogoIcon,
  TwitchLogoIcon,
  WhatsappLogoIcon,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

const brands = [
  { name: "Royal Canin", logo: "royal" },
  { name: "Primier", logo: "primier" },
  { name: "Formula Natural", logo: "natural" },
  { name: "Whiskas", logo: "whiskas" },
  { name: "Golden", logo: "golden" },
];

export function Footer() {
  return (
    <section className="bg-[#e84c3d] py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="border-b border-white/20 pb-8">
          <h4 className="text-3xl font-semibold mb-8 text-center">
            Nossos parceiros
          </h4>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 place-items-center">
            {brands.map((item, index) => (
              <div
                key={index}
                className=" p-4 border rounded-lg flex items-center justify-center text-black"
              >
                <div className="w-24 h-24 flex items-center justify-center">
                  {item.logo}
                </div>
                {/* <Image
                  src={item.logo}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="object-contain"
                /> */}
              </div>
            ))}
          </div>
        </div>
        <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Pet shop Dev</h3>
            <p className="mb-4">
              Cuidando do seu melhor amigo com amor e dedicação.
            </p>
            <a
              target="_blank"
              href={`https://wa.me/55COLOCARNUMERO?text=olá vim pelo site e gostaria de mais informações.`}
              className="bg-green-500 px-4 py-2 rounded-md flex items-center justify-center gap-2"
            >
              <WhatsappLogoIcon className="w-5 h-5" />
              Contato Via WhatsApp
            </a>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">Contatos</h3>
            <p>Email: contato@petshopdev.com</p>
            <p>Telefone: (11) 1234-5678</p>
            <p>Endereço: Rua dos Bichos, 123 - São Paulo, SP</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">Redes Sociais</h3>
            <a href="#">
              <FacebookLogoIcon className="w-8 h-8" />
            </a>
            <a href="#">
              <InstagramLogoIcon className="w-8 h-8" />
            </a>
            <a href="#">
              <TwitchLogoIcon className="w-8 h-8" />
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
}
