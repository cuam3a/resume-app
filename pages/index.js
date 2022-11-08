import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
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
              INGENIERO EN SISTEMAS DE INFORMACIÓN
            </p>
          </div>

          <div className="text-center lg:text-left my-5 flex flex-row justify-around items-center w-full md:justify-center">
            <Link
              href={"/conocimientos"}
              className="flex visible py-4 px-8 mb-4 text-xs font-semibold tracking-wide leading-none text-white bg-blue-500 rounded cursor-pointer sm:mr-3 sm:mb-0"
            >
              CONOCIMIENTOS
            </Link>
            <Link
              href={"/portafolio"}
              className="flex visible py-4 px-8 mb-4 md:mb-1 text-xs font-semibold tracking-wide leading-none bg-white rounded border border-solid cursor-pointer border-slate-200 text-slate-500"
            >
              PORTAFOLIO
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
          HOLA, BIENVENIDO A MI SITIO WEB !!!
        </p>
        <p className='max-w-screen-xl text-justify mt-2 w-full md:w-1/3 p-5 md:p-8 text-sm flex'>
          MI NOMBRE ES GUILLERMO CUAMEA SOY DE HERMOSILLO, SONORA MÉXICO, SOY UN DESARROLLADOR FULL-STACK, CON CONOCIMIENTO EN VARIOS LENGUAJES DE PROGRAMACIÓN.
        </p>
        <p className='max-w-screen-xl text-justify mt-2 w-full md:w-1/3 p-5 md:p-8 text-sm flex'>
          CUENTO CON MAS DE 7 AÑOS DE EXPERIENCIA EN DESARROLLO DE APLICACIONES WEB, MOVIL Y ESCRITORIO, AUTODIDACTA, SIEMPRE EN BUSCA DE NUEVOS CONOCIMIENTOS.
        </p>
      </section>
    </div>
  )
}
