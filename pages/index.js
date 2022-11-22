import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  const LANG = router.query?.lang?.toUpperCase() ?? "ESP"

  return (
    <div className='w-full bg-gray-200 md:max-h-screen font-mono flex-col md:flex-row'>
      <section
        className="flex flex-col md:flex-row justify-center items-center mt-3 mx-auto py-5 md:px-16 w-full lg:max-w-screen-2xl sm:max-w-screen-sm md:max-w-screen-md pb-20">
        <div className="px-3 w-full lg:w-3/5 flex flex-col items-center">
          <div
            className="mx-auto mb-8 max-w-lg text-center lg:mx-0 lg:max-w-md lg:text-left w-full flex flex-col">
            <span className="mr-2 text-sm text-blue-500 leading-relaxed mt-5 flex">
              ING.
            </span>
            <p className="mb-1 text-2xl font-bold text-left lg:text-4xl flex w-full">
              GUILLERMO ANTONIO CUAMEA TELLES
            </p>
            <p
              className="visible flex justify-center mt-3 mb-0 text-sm leading-relaxed text-left text-blue-500 w-full">
              {(LANG == "ENG" ? "INFORMATION SYSTEMS ENGINEER" : "INGENIERO EN SISTEMAS DE INFORMACIÓN")}
            </p>
          </div>

          <div className="text-center lg:text-left my-5 flex flex-row justify-around items-center w-full md:justify-center">
            <Link
              href={"/conocimientos?lang=" + LANG}
              className="flex visible py-4 px-8 mb-4 text-xs font-semibold tracking-wide leading-none text-white bg-blue-500 rounded cursor-pointer sm:mr-3 sm:mb-0"
            >
              {(LANG == "ENG" ? "SKILLS" : "CONOCIMIENTOS")}
            </Link>
            <Link
              href={"/portafolio?lang=" + LANG}
              className="flex visible py-4 px-8 mb-4 md:mb-1 text-xs font-semibold tracking-wide leading-none bg-white rounded border border-solid cursor-pointer border-slate-200 text-slate-500"
            >
              {(LANG == "ENG" ? "PROJECTS" : "PORTAFOLIO")}
            </Link>
          </div>
        </div>
        <div className="px-3 mb-12 w-full lg:mb-0 lg:w-2/5 flex">
          <div className="flex justify-center items-center">
            <Image
              src="https://www.logicrays.com/images/hire-nodejs-developer.png"
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>
      <section className='flex justify-center items-center pb-5 flex-wrap text-lg flex-col md:flex-row'>
        <p className='font-bold max-w-screen-xl w-full text-center flex-grow my-1'>
          {(LANG == "ENG" ? "HELLO, WELCOME TO MI WEB SITE !!!" : "HOLA, BIENVENIDO A MI SITIO WEB !!!")}
        </p>
        <p className='max-w-screen-xl text-justify mt-2 w-full md:w-1/3 p-5 md:p-8 text-sm flex'>
          {(LANG == "ENG" ? "MY NAME IS GUILLERMO CUAMEA I'M FROM HERMOSILLO, SONORA, MEXICO. I'M A FULL-STACK DEVELOPER, WITH KNOWLEDGE OF SEVERAL PROGRAMMING LANGUAGES." : "MI NOMBRE ES GUILLERMO CUAMEA SOY DE HERMOSILLO, SONORA MÉXICO, SOY UN DESARROLLADOR FULL-STACK, CON CONOCIMIENTO EN VARIOS LANGUAJES DE PROGRAMACIÓN.")}
        </p>
        <p className='max-w-screen-xl text-justify mt-2 w-full md:w-1/3 p-5 md:p-8 text-sm flex'>
          {(LANG == "ENG" ? "I HAVE MORE THAN 7 YEARS OF EXPERIENCE AS A FULLS-STACK DEVELOPER, CODING WEB, MOBILE AND DESKTOP APPLICATIONS, ALWAYS LOOKING FOR NEW KNOWLEDGE." : "CUENTO CON MÁS DE 7 AÑOS DE EXPERIENCIA EN DESARROLLO DE APLICACIONES WEB, MÓVIL Y ESCRITORIO, AUTODIDACTA, SIEMPRE EN BUSCA DE NUEVOS CONOCIMIENTOS.")}
        </p>
      </section>
    </div>
  )
}
