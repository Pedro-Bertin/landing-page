import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";

export function Hero() {
  return (
    <section className="bg-[#E84C3D] text-white relative overflow-hidden">
      <div className="h-64 w-full border-4 border-yellow-500 rounded-xl flex items-center justify-center lg:hidden absolute">
        {/* <Image
          src={""}
          alt={"FATO DE ALGO"}
          fill
          sizes="100vw"
          priority
          className="object-cover opacity-60 lg:hidden"
        /> */}
      </div>
      <div className="absolute inset-0 bg-black opacity-40 md:hidden"></div>
      <div className="container mx-auto pt-16 pb-16 mb:pb-0 px-4 relative">
        <article
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          data-aos="fade-down-right"
        >
          <div className="space-y-6 ">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10">
              Welcome to Our Website
            </h1>
            <p className="lg:text-lg">
              Your journey to excellence starts here.
            </p>
            <div>
              <a
                target="_blank"
                href={`https://wa.me/5555COLOCARNUMERO?text=olá vim pelo site e gostaria de mais informações.`}
                className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2"
              >
                <WhatsappLogoIcon className="w-5 h-5" />
                Contato via WhatsApp
              </a>
            </div>
          </div>
          <div className="hidden lg:block relative w-full rounded-3xl overflow-hidden border-4 border-blue-500">
            {/* <div className="hidden md:block h-full relative">
            <Image
              src={""}
              alt={"Foto do lado esquerdo"}
              fill
              sizes="(max-width: 768px) 0vw, 50vw"
              className="object-contain"
              quality={100}
              priority
            />
          </div> */}
          </div>
        </article>
      </div>
    </section>
  );
}
