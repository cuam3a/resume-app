import Image from 'next/image'
import Link from 'next/link'
import { BsGithub, BsLink } from 'react-icons/bs';
import { useRouter } from 'next/router'

export default function Portfolio() {
    const router = useRouter()
    const LANG = router.query?.lang?.toUpperCase() ?? "ESP"

    return (
        <div className='w-full font-mono flex-col md:flex-row'>
            <h2 className="border-blue-500 border-t-4 text-xl w-10 mt-3 mx-5 md:mx-20">
                {(LANG == "ENG" ? "PROJECTS" : "PORTAFOLIO")}
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 bg-gray-200 w-full mt-3'>
                <div
                    className="grid grid-flow-row col-span-2 mt-3 mx-auto py-5 md:px-16 pb-10"
                >
                    <p className='font-bold max-w-screen-xl px-5 md:px-0 w-full flex-grow my-1'>
                        {(LANG == "ENG" ? "IN MY 7 YEARS OF EXPERIENCE AS A FULLS-STACK DEVELOPER, I HAVE WORKED ON VARIOUS PROJECTS, I SHOW YOU THE MOST IMPORTANT..." : "DURANTE MIS 7 AÑOS COMO DESARROLLADOR, HE TRABAJADO EN VARIOS PROYECTOS, LES MUESTRO LOS MÁS IMPORTANTES...")}
                    </p>
                </div>
            </div>
            <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-5 mt-5">

                <div className="rounded overflow-hidden shadow-lg justify-center items-center">
                    <Image
                        src="/images/portafolio1.png"
                        alt="Java Script"
                        height={150}
                        width={150}
                        className="mx-auto"
                    />
                    <div className="px-6 py-4">
                        <div className="text-sm font-bold mb-2">APP E-COMMERCE ({(LANG == "ENG" ? "PERSONAL PROJECT" : "PROYECTO PERSONAL")})</div>
                        <p className='text-sm'>
                            {(LANG == "ENG" ? "WEB App E-Commerce, Coding...." : "Aplicacion web E-Commerce, En proceso....")}
                        </p>
                    </div>
                    <div>
                        <Link href="https://github.com/cuam3a/store-app" target="_blank" className='flex justify-center' ><span className="inline-block bg-blue-500 text-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 w-3/5 flex flex-row items-center justify-center"><BsGithub className='mr-2' /> {(LANG == "ENG" ? "Repository" : "Repositorio")}</span></Link>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Reactjs</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Node.js</span>
                    </div>
                </div>

                <div className="rounded overflow-hidden shadow-lg justify-center items-center">
                    <Image
                        src="/images/portafolio10.png"
                        alt="Java Script"
                        height={150}
                        width={150}
                        className="mx-auto mt-6"
                    />
                    <div className="px-6 py-4 mt-8">
                        <div className="text-sm font-bold mb-2">{(LANG == "ENG" ? "APP FOR DEALERSHIP" : "APP CONCESIONARIA TRANSPORTES")}</div>
                        <p className='text-sm'>
                            {(
                                LANG == "ENG"
                                    ? "App Mobil and backend, bus concessionaire systems, where the unit, driver, concessionaire, route is captured, and control of route verifications is taken."
                                    : "Aplicacion movil y backend, sistems de concesinaria de autobuses, donde se caputra, unidad, chofer, concesionaria, ruta, y se lleva el control de verificaciones de rutas."
                            )}
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Flutter</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Node.js</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#MongoDB</span>
                    </div>
                </div>

                <div className="rounded overflow-hidden shadow-lg justify-center items-center">
                    <Image
                        src="/images/portafolio2.png"
                        alt="Java Script"
                        height={150}
                        width={150}
                        className="mx-auto"
                    />
                    <div className="px-6 py-4">
                        <div className="text-sm font-bold mb-2">{(LANG == "ENG" ? "MY WEB SITE" : "MI PORTAFOLIO")}</div>
                        <p className='text-sm'>
                            {(LANG == "ENG" ? "WEB App my site." : "Aplicacion web mi portafolio.")}
                        </p>
                    </div>
                    <div>
                        <Link href="https://github.com/cuam3a/resume-app" target="_blank" className='flex justify-center' ><span className="inline-block bg-blue-500 text-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 w-3/5 flex flex-row items-center justify-center"><BsGithub className='mr-2' /> {(LANG == "ENG" ? "Repository" : "Repositorio")}</span></Link>
                        <Link href="https://resume-app-two.vercel.app/" target="_blank" className='flex justify-center' ><span className="inline-block bg-blue-500 text-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 w-3/5 flex flex-row items-center justify-center"><BsLink className='mr-2' /> {(LANG == "ENG" ? "WEB Site" : "Sitio WEB")}</span></Link>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Next.js</span>
                    </div>
                </div>

                <div className="rounded overflow-hidden shadow-lg justify-center items-center">
                    <Image
                        src="/images/portafolio3.png"
                        alt="Java Script"
                        height={150}
                        width={150}
                        className="mx-auto"
                    />
                    <div className="px-6 py-4">
                        <div className="text-sm font-bold mb-2">{(LANG == "ENG" ? "ERP COMPANY RECO" : "ERP CORPORATIVO RECO")}</div>
                        <p className='text-sm'>
                            {(LANG == "ENG" ? "ERP designed for the company RECO, system to control Sales, Inventory, Services, Collection, Payments, etc." : "Desarrollo de ERP diseñado para la empresa Corporativo RECO, sistema para controlar Ventas, Inventario, Servicios, Cobranza, Pagos, etc.")}
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#C#</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#MVC</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#ASP.NET</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Web API</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#SQL Server</span>
                    </div>
                </div>

                <div className="rounded overflow-hidden shadow-lg justify-center items-center">
                    <Image
                        src="/images/portafolio4.png"
                        alt="Java Script"
                        height={150}
                        width={150}
                        className="mx-auto"
                    />
                    <div className="px-6 py-4">
                        <div className="text-sm font-bold mb-2">{(LANG == "ENG" ? "FLOREA SALE APP" : "APP PUNTO VENTA FLOREA")}</div>
                        <p className='text-sm'>
                            {(LANG == "ENG" ? "App Mobile for flower shop sales, authentication, list of products by category, detail of products, sale, payments, account statements, ticket printing." : "Aplicacion movil para ventas floreria, autentificación, lista de productos por categoria, detalle de productos, venta, pagos, estados de cuenta, impresion de ticket.")}
                        </p>
                    </div>
                    <div>
                        <Link href="https://github.com/cuam3a/florea-app" target="_blank" className='flex justify-center' ><span className="inline-block bg-blue-500 text-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 w-3/5 flex flex-row items-center justify-center"><BsGithub className='mr-2' /> {(LANG == "ENG" ? "Repository" : "Repositorio")}</span></Link>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#React-native</span>
                    </div>
                </div>

                <div className="rounded overflow-hidden shadow-lg justify-center items-center">
                    <Image
                        src="/images/portafolio5.png"
                        alt="Java Script"
                        height={150}
                        width={150}
                        className="mx-auto"
                    />
                    <div className="px-6 py-4">
                        <div className="text-sm font-bold mb-2">APP WEB MIWHATS</div>
                        <p className='text-sm'>
                            {(
                                LANG == "ENG"
                                    ? "WEB App, where you can create your links with the information of your company and use it for marketing or as a presentation. It has authentication, client module (CRUD links, contract plan, payments), admin module (client control, control links, CRUD plans, dashboards, reports)."
                                    : "Aplicacion web, plataforma donde puedes crear tus links con la informacion de tu empresa y utilizarla para marketing o como presentación. Cuenta con autentificación, modulo de clientes (CRUD links, contratar plan, pagos), modulo admin (control clientes, control links, CRUD planes, dashboards, reportes)."
                            )}
                        </p>
                    </div>
                    <div>
                        <Link href="https://github.com/cuam3a/mw-client" target="_blank" className='flex justify-center' ><span className="inline-block bg-blue-500 text-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 w-3/5 flex flex-row items-center justify-center"><BsGithub className='mr-2' /> {(LANG == "ENG" ? "Repository" : "Repositorio")}</span></Link>
                        <Link href="https://miwhats.app/" target="_blank" className='flex justify-center' ><span className="inline-block bg-blue-500 text-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 w-3/5 flex flex-row items-center justify-center"><BsLink className='mr-2' /> {(LANG == "ENG" ? "WEB Site" : "Sitio WEB")}</span></Link>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#React.js</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Node.js</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#MySQL</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#API Openpay</span>
                    </div>
                </div>

                <div className="rounded overflow-hidden shadow-lg justify-center items-center">
                    <Image
                        src="/images/portafolio6.png"
                        alt="Java Script"
                        height={150}
                        width={150}
                        className="mx-auto"
                    />
                    <div className="px-6 py-4">
                        <div className="text-sm font-bold mb-2">{(LANG == "ENG" ? "MODIFICATION APP WEB GIABISSO" : "MODIFICACION APP WEB GIABISSO")}</div>
                        <p className='text-sm'>
                            {(
                                LANG == "ENG"
                                    ? "WEB App E-commerce. Modifications were made in the application, functions for order programming, new characteristics for products and clients."
                                    : "Aplicacion web E-commerce. Se realizaron modificaciones en aplicacion , funciones para programacion de pedidos, nuevas caracteristicas a los productos y clientes."
                            )}
                        </p>
                    </div>
                    <div>
                        <Link href="https://github.com/cuam3a/giabisso.online" target="_blank" className='flex justify-center' ><span className="inline-block bg-blue-500 text-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 w-3/5 flex flex-row items-center justify-center"><BsGithub className='mr-2' /> {(LANG == "ENG" ? "Repository" : "Repositorio")}</span></Link>
                        <Link href="https://giabisso.online/" target="_blank" className='flex justify-center' ><span className="inline-block bg-blue-500 text-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 w-3/5 flex flex-row items-center justify-center"><BsLink className='mr-2' /> Sitio WEB</span></Link>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#PHP</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Laravel</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#MySQL</span>
                    </div>
                </div>

                <div className="rounded overflow-hidden shadow-lg justify-center items-center">
                    <Image
                        src="/images/portafolio7.png"
                        alt="Java Script"
                        height={150}
                        width={150}
                        className="mx-auto"
                    />
                    <div className="px-6 py-4">
                        <div className="text-sm font-bold mb-2">{(LANG == "ENG" ? "APP FOR PAYMENTS" : "APP COBRANZA")}</div>
                        <p className='text-sm'>
                            {(
                                LANG == "ENG"
                                    ? "App Mobil for payments of funeral plans, authentication, customer search, payments, printing tickets."
                                    : "Aplicacion movil para Android, para cobranza de planes funerarios, autentificación, busqueda de clientes, pagos, impresion tickets."
                            )}
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Apache Cordova</span>
                    </div>
                </div>

                <div className="rounded overflow-hidden shadow-lg justify-center items-center">
                    <Image
                        src="/images/portafolio8.png"
                        alt="Java Script"
                        height={150}
                        width={150}
                        className="mx-auto"
                    />
                    <div className="px-6 py-4">
                        <div className="text-sm font-bold mb-2">{(LANG == "ENG" ? "WEB SITE COMPANY ORO PURO" : "APP WEB ORO PURO")}</div>
                        <p className='text-sm'>
                            {(
                                LANG == "ENG"
                                    ? "web App designed for the company ORO PURO, authentication, platform to view SAPB1 reports, CRUD SAPB1 clients, configuration of SAPB1 routes."
                                    : "Aplicacion web para Oro Puro, autentificación, plataforma para vezualizar reportes de SAPB1, CRUD clientes SAPB1, configuracion de rutas SAPB1."
                            )}
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#C#</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#MVC</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#ASP.NET</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Web API</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#SQL Server</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#SAPB1 SDK</span>
                    </div>
                </div>

                <div className="rounded overflow-hidden shadow-lg justify-center items-center">
                    <Image
                        src="/images/portafolio9.png"
                        alt="Java Script"
                        height={150}
                        width={150}
                        className="mx-auto"
                    />
                    <div className="px-6 py-4">
                        <div className="text-sm font-bold mb-2">{(LANG == "ENG" ? "ORO PUROSALE APP" : "APP PUNTO VENTA ORO PURO")}</div>
                        <p className='text-sm'>
                            {(
                                LANG == "ENG"
                                    ? "App Mobile for sales dairy products, authentication, list of products by category, detail of products, sale, payments, account statements, ticket printing."
                                    : "Aplicacion movil para ventas productos lacteos Oro Puro, autentificación, lista de productos por categoria, detalle de productos, venta, pagos, estados de cuenta, impresion de ticket."
                            )}
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#React-native</span>
                    </div>
                </div>

            </div>
        </div>
    )
}