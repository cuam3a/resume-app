import Image from 'next/image'
import Link from 'next/link'
import { BsGithub, BsLink } from 'react-icons/bs';

export default function Portfolio() {
    return (
        <div className='w-full font-mono flex-col md:flex-row'>
            <h2 className="border-blue-500 border-t-4 text-xl w-10 mt-3 mx-5 md:mx-20">
                PORTAFOLIO
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 bg-gray-200 w-full mt-3'>
                <div
                    className="grid grid-flow-row col-span-2 mt-3 mx-auto py-5 md:px-16 pb-10"
                >
                    <p className='font-bold max-w-screen-xl px-5 md:px-0 w-full flex-grow my-1'>
                        DURANTE MIS 7 AÑOS COMO DESARROLLADOR, E TRABAJADO EN VARIOS PROJECTOS, LES MUESTRO LOS MAS IMPORTANTES...
                    </p>
                </div>
            </div>
            <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-5 mt-5">

                <div className="rounded overflow-hidden shadow-lg justify-center items-center">
                    <Image
                        src="https://img2.freepng.es/20180825/qgk/kisspng-enterprise-resource-planning-software-testing-pene-erp-corewin-5b8169ead0f075.7095392615352079148558.jpg"
                        alt="Java Script"
                        height={150}
                        width={150}
                        className="mx-auto"
                    />
                    <div className="px-6 py-4">
                        <div className="text-sm font-bold mb-2">APP E-COMMERCE (Proyecto Personal)</div>
                        <p className='text-sm'>
                            Aplicacion web E-Commerce, En proceso....
                        </p>
                    </div>
                    <div>
                        <Link href="https://github.com/cuam3a/store-app" target="_blank" className='flex justify-center' ><span className="inline-block bg-blue-500 text-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 w-3/5 flex flex-row items-center justify-center"><BsGithub className='mr-2'/> Repositorio</span></Link>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Reactjs</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Node.js</span>
                    </div>
                </div>

                <div className="rounded overflow-hidden shadow-lg justify-center items-center">
                    <Image
                        src="https://img2.freepng.es/20180825/qgk/kisspng-enterprise-resource-planning-software-testing-pene-erp-corewin-5b8169ead0f075.7095392615352079148558.jpg"
                        alt="Java Script"
                        height={150}
                        width={150}
                        className="mx-auto"
                    />
                    <div className="px-6 py-4">
                        <div className="text-sm font-bold mb-2">MI PORTAFOLIO</div>
                        <p className='text-sm'>
                            Aplicacion web mi portafolio.
                        </p>
                    </div>
                    <div>
                        <Link href="https://github.com/cuam3a/store-app" target="_blank" className='flex justify-center' ><span className="inline-block bg-blue-500 text-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 w-3/5 flex flex-row items-center justify-center"><BsGithub className='mr-2'/> Repositorio</span></Link>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Next.js</span>
                    </div>
                </div>

                <div className="rounded overflow-hidden shadow-lg justify-center items-center">
                    <Image
                        src="https://img2.freepng.es/20180825/qgk/kisspng-enterprise-resource-planning-software-testing-pene-erp-corewin-5b8169ead0f075.7095392615352079148558.jpg"
                        alt="Java Script"
                        height={150}
                        width={150}
                        className="mx-auto"
                    />
                    <div className="px-6 py-4">
                        <div className="text-sm font-bold mb-2">ERP CORPORATIVO RECO</div>
                        <p className='text-sm'>
                            Desarrollo de ERP diseñado para la empresa Corporativo RECO, sistema para controlar Ventas, Inventario, Servicios, Cobranza, Pagos, etc.
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
                        src="https://img2.freepng.es/20180825/qgk/kisspng-enterprise-resource-planning-software-testing-pene-erp-corewin-5b8169ead0f075.7095392615352079148558.jpg"
                        alt="Java Script"
                        height={150}
                        width={150}
                        className="mx-auto"
                    />
                    <div className="px-6 py-4">
                        <div className="text-sm font-bold mb-2">APP PUNTO VENTA FLOREA</div>
                        <p className='text-sm'>
                            Aplicacion movil para ventas floreria, autentificación, lista de productos por categoria, detalle de productos, venta, pagos, estados de cuenta, impresion de ticket.
                        </p>
                    </div>
                    <div>
                        <Link href="https://github.com/cuam3a/store-app" target="_blank" className='flex justify-center' ><span className="inline-block bg-blue-500 text-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 w-3/5 flex flex-row items-center justify-center"><BsGithub className='mr-2'/> Repositorio</span></Link>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#React-native</span>
                    </div>
                </div>

                <div className="rounded overflow-hidden shadow-lg justify-center items-center">
                    <Image
                        src="https://img2.freepng.es/20180825/qgk/kisspng-enterprise-resource-planning-software-testing-pene-erp-corewin-5b8169ead0f075.7095392615352079148558.jpg"
                        alt="Java Script"
                        height={150}
                        width={150}
                        className="mx-auto"
                    />
                    <div className="px-6 py-4">
                        <div className="text-sm font-bold mb-2">APP WEB MIWHATS</div>
                        <p className='text-sm'>
                            Aplicacion web, plataforma donde puedes crear tus links con la informacion de tu empresa y utilizarla para marketing o como presentación.
                            Cuenta con autentificación, modulo de clientes (CRUD links, contratar plan, pagos), modulo admin (control clientes, control links, CRUD planes, dashboards, reportes).
                        </p>
                    </div>
                    <div>
                        <Link href="https://github.com/cuam3a/store-app" target="_blank" className='flex justify-center' ><span className="inline-block bg-blue-500 text-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 w-3/5 flex flex-row items-center justify-center"><BsGithub className='mr-2'/> Repositorio</span></Link>
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
                        src="https://img2.freepng.es/20180825/qgk/kisspng-enterprise-resource-planning-software-testing-pene-erp-corewin-5b8169ead0f075.7095392615352079148558.jpg"
                        alt="Java Script"
                        height={150}
                        width={150}
                        className="mx-auto"
                    />
                    <div className="px-6 py-4">
                        <div className="text-sm font-bold mb-2">MODIFICACION APP WEB GIABISSO</div>
                        <p className='text-sm'>
                            Aplicacion web E-commerce. Se realizaron modificaciones en aplicacion , funciones para programacion de pedidos, nuevas caracteristicas a los productos y clientes.
                        </p>
                    </div>
                    <div>
                        <Link href="https://github.com/cuam3a/store-app" target="_blank" className='flex justify-center' ><span className="inline-block bg-blue-500 text-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 w-3/5 flex flex-row items-center justify-center"><BsGithub className='mr-2'/> Repositorio</span></Link>
                        <Link href="https://giabisso.online/" target="_blank" className='flex justify-center' ><span className="inline-block bg-blue-500 text-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 w-3/5 flex flex-row items-center justify-center"><BsLink className='mr-2'/> Sitio WEB</span></Link>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#PHP</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Laravel</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#MySQL</span>
                    </div>
                </div>

                <div className="rounded overflow-hidden shadow-lg justify-center items-center">
                    <Image
                        src="https://img2.freepng.es/20180825/qgk/kisspng-enterprise-resource-planning-software-testing-pene-erp-corewin-5b8169ead0f075.7095392615352079148558.jpg"
                        alt="Java Script"
                        height={150}
                        width={150}
                        className="mx-auto"
                    />
                    <div className="px-6 py-4">
                        <div className="text-sm font-bold mb-2">APP COBRANZA</div>
                        <p className='text-sm'>
                            Aplicacion movil para Android, para cobranza de planes funerarios, busqueda de clientes, pagos, impresion tickets.
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Apache Cordova</span>
                    </div>
                </div>

                <div className="rounded overflow-hidden shadow-lg justify-center items-center">
                    <Image
                        src="https://img2.freepng.es/20180825/qgk/kisspng-enterprise-resource-planning-software-testing-pene-erp-corewin-5b8169ead0f075.7095392615352079148558.jpg"
                        alt="Java Script"
                        height={150}
                        width={150}
                        className="mx-auto"
                    />
                    <div className="px-6 py-4">
                        <div className="text-sm font-bold mb-2">APP WEB ORO PURO</div>
                        <p className='text-sm'>
                            Aplicacion web para Oro Puro, plataforma para vezualizar reportes de SAPB1, CRUD clientes SAPB1, configuracion de rutas.
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
                        src="https://img2.freepng.es/20180825/qgk/kisspng-enterprise-resource-planning-software-testing-pene-erp-corewin-5b8169ead0f075.7095392615352079148558.jpg"
                        alt="Java Script"
                        height={150}
                        width={150}
                        className="mx-auto"
                    />
                    <div className="px-6 py-4">
                        <div className="text-sm font-bold mb-2">APP PUNTO VENTA ORO PURO</div>
                        <p className='text-sm'>
                            Aplicacion movil para ventas productos lacteos Oro Puro, autentificación, lista de productos por categoria, detalle de productos, venta, pagos, estados de cuenta, impresion de ticket.
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