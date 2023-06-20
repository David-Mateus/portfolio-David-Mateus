import {
    
    AiFillLinkedin,
    AiFillMail,
    AiFillGithub,
    
  } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
export default function Nav() {
    return(
        <>
        <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-gray-900 font-medium dark:text-white md:text-6xl">
              David Mateus
            </h2>
            <h3 className="text-2xl text-gray-900 py-2 dark:text-white md:text-3xl">
              Developer Web and Mobile.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Freelancer providing services for programming and design content
              needs. Join me down below and lets get cracking!
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3  text-gray-600 dark:text-gray-400">
              <div className=" flex justify-center cursor-pointer gap-16">

              
              <Link  href="https://github.com/David-Mateus" >
                <AiFillGithub />
              </Link>
              <Link href="https://www.linkedin.com/in/david-mateus-06a1541b0/"><AiFillLinkedin /></Link>
              <Link href="/"><AiFillMail /></Link>
              </div>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={"/persona.jpg"} layout="fill" objectFit="cover" alt="Image de fundo" />
            </div>
          </div>
        </>
    )
}