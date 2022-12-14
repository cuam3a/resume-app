import Link from 'next/link'
import { useRouter } from 'next/router'
import { BsLinkedin, BsGithub } from 'react-icons/bs';

export default function Navbar() {
    const router = useRouter()
    const LANG = router.query?.lang?.toUpperCase() ?? "ESP"
    
    return (
        <div className='w-full grid grid-cols-1 md:grid-cols-8 bg-white shadow'>
            <div className='col-span-1 text-center flex justify-center items-center text-gray-800 font-mono font-semibold'>
                GCUAMEA
            </div>
            <nav className=" dark:bg-gray-800 col-span-6">
                <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
                    <Link href={"/?lang=" + LANG} className={`text-gray-800 font-mono font-semibold dark:text-gray-200 border-b-2 ${router.pathname == "/" ? "border-blue-500" : "border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200"} mx-1.5 sm:mx-6`}>{(LANG == "ENG" ? "HOME" : "INICIO")}</Link>
                    <Link href={"/conocimientos?lang=" + LANG} className={`text-gray-800 font-mono font-semibold dark:text-gray-200 border-b-2 ${router.pathname == "/conocimientos" ? "border-blue-500" : "border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200"} mx-1.5 sm:mx-6`}>{(LANG == "ENG" ? "SKILLS" : "CONOCIMIENTOS")}</Link>
                    <Link href={"/portafolio?lang=" + LANG} className={`text-gray-800 font-mono font-semibold dark:text-gray-200 border-b-2 ${router.pathname == "/portafolio" ? "border-blue-500" : "border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200"} mx-1.5 sm:mx-6`}>{(LANG == "ENG" ? "PROJECTS" : "PORTAFOLIO")}</Link>
                    <Link href={"/contacto?lang=" + LANG} className={`text-gray-800 font-mono font-semibold dark:text-gray-200 border-b-2 ${router.pathname == "/contacto" ? "border-blue-500" : "border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200"} mx-1.5 sm:mx-6`}>{(LANG == "ENG" ? "CONTACT" : "CONTACTO")}</Link>
                </div>
            </nav>
            <div className='col-span-1 text-center flex justify-center items-center text-gray-800 font-mono font-semibold'>
                <label className='text-xs font-bold'>{(LANG == "ENG" ? "LANGUAGE:" : "LENGUAJE:")}</label>
                <select className='border border-black rounded' value={LANG} onChange={(e) => router.push('/?lang='+e.target.value)}>
                    <option value="ESP">ESP</option>
                    <option value="ENG">ENG</option>
                </select>
                <Link href="https://www.linkedin.com/in/guillermo-cuamea-telles-284308138" target="_blank" className='ml-2'><BsLinkedin /></Link>
                <Link href="https://github.com/cuam3a" target="_blank" className='ml-2'><BsGithub /></Link>
            </div>
        </div>
    )
}