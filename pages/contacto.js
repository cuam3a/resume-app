import { BiMailSend } from 'react-icons/bi';
import { BsLinkedin } from 'react-icons/bs'
import Link from 'next/link'
export default function Contact() 
{
    return(
        <div className='w-full font-mono flex-col md:flex-row h-96'>
            <h2 className="border-blue-500 border-t-4 text-xl w-10 mt-3 mx-5 md:mx-20">
                CONTACTO
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 bg-gray-200 w-full mt-3'>
                <div
                    className="grid grid-flow-row col-span-2 mt-3 mx-auto py-5 md:px-16 pb-10 text-center"
                >
                    <p className='font-bold max-w-screen-xl px-5 md:px-0 w-full flex-grow my-1 flex flex-row'>
                        <BiMailSend className='text-2xl mr-3'/> ENVIAME UN CORREO A gcuameatelles@gmail.com ...
                    </p>
                    <p className='font-bold max-w-screen-xl px-5 md:px-0 w-full flex-grow my-1 mt-3'>
                        HERMOSILLO, SONORA, MÉXICO
                    </p>
                    <p className='font-bold max-w-screen-xl px-5 md:px-0 w-full flex-grow my-1 flex justify-center'>
                        <Link href="https://www.linkedin.com/in/guillermo-cuamea-telles-284308138" target="_blank" className='ml-2'><BsLinkedin className='text-2xl'/></Link>
                    </p>
                </div>
            </div>
        </div>
    )
}