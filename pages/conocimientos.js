import Image from 'next/image'

export default function Skills() {
  return (
    <div className='w-full font-mono flex-col md:flex-row'>
      <h2 className="border-blue-500 border-t-4 text-xl w-10 mt-3 mx-5 md:mx-20">
        CONOCIMIENTOS
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-3 bg-gray-200 w-full mt-3'>
        <div
          className="grid grid-flow-row col-span-2 justify-center mt-3 mx-auto py-5 md:px-16 pb-10"
        >
          <p className='font-bold max-w-screen-xl px-5 md:px-0 w-full flex-grow my-1'>
            EGRESADO DE LA UNIVERSIDAD DE SONORA, COMO INGENIERO EN SISTEMAS DE INFORMACIÓN.
          </p>
          <p className='font-bold max-w-screen-xl px-5 md:px-0 w-full flex-grow my-1'>
            MÁS DE 7 AÑOS DE EXPERIENCIA COMO DESARROLLADOR.
          </p>
        </div>
        <div className='grid grid-flow-row col-span-1 justify-center mt-3 mx-auto py-5 md:px-16 pb-10'>
          <p className='font-bold max-w-screen-xl px-5 md:px-0 w-full flex-grow my-1 border-blue-500 border-b-4'>
            NIVEL INGLES B1-B2
          </p>
        </div>
      </div>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-5 mt-5">
        <div className="rounded overflow-hidden shadow-lg justify-center items-center">
          <Image
            src="/images/conocimiento1.png"
            alt="Java Script"
            height={200}
            width={200}
            className="mx-auto"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">JavaScript</div>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Javascript</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#React.js</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#React-Native</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Node.js</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Next.js</span>
          </div>
        </div>

        <div className="rounded overflow-hidden shadow-lg">
          <Image
            src="/images/conocimiento2.png"
            alt="Microsoft .NET"
            height={200}
            width={200}
            className="mx-auto"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Microsoft .NET</div>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#C#</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#MVC</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#ASP.NET</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#WindowsForms</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Web API</span>
          </div>
        </div>

        <div className="rounded overflow-hidden shadow-lg">
          <Image
            src="/images/conocimiento3.png"
            alt="Base de Datos"
            height={200}
            width={200}
            className="mx-auto"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">SQL</div>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#SQL Server</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#MySQL</span>
          </div>
        </div>

        <div className="rounded overflow-hidden shadow-lg">
          <Image
            src="/images/conocimiento4.png"
            alt="Otros"
            height={200}
            width={200}
            className="mx-auto"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Otros</div>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#PHP</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Laravel</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#HTML</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#CSS</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Apache Cordova</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#SAPB1 SDK</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#API Openpay</span>
          </div>
        </div>
      </div>
    </div>
  )
}