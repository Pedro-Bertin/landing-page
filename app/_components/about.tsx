import { Check, MapPin } from "lucide-react";
import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";

export function About() {
  return (
    <section className="bg-[#FDF6EC] py-16 ">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative w-full h-100 rounded-3xl overflow-hidden border-4 border-blue-500">
              {/* <Image
              src={""}
              alt={"Alguma foto"}
              className="object-cover hover:scale-110 duration-300"
              fill
              quality={100}
              priority
            /> */}
            </div>

            <div className="absolute w-40 h-40 right-4 -bottom-8 border-4 overflow-hidden rounded-lg border-green-500">
              {/* <Image
              src={""}
              alt={"Alguma foto"}
              className="object-cover hover:scale-110 duration-300"
              fill
              quality={100}
              priority
            /> */}
            </div>
          </div>

          <div className="space-y-6 mt-10">
            <h2 className="text-4xl font-bold">Sobre</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Check className="text-red-500" /> 1
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-red-500" /> 2
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-red-500" /> 3
              </li>
            </ul>

            <div className="flex items-center gap-2 mt-4">
              <a
                target="_blank"
                href={`https://wa.me/5555COLOCARNUMERO?text=olá vim pelo site e gostaria de mais informações.`}
                className="bg-[#E84C3D] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
              >
                <WhatsappLogoIcon />
                Contato via WhatSapp
              </a>

              <a
                href="#"
                className=" text-black flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
              >
                <MapPin />
                Endereço da loja
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
