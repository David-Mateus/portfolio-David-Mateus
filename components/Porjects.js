import Image from "next/image";
export default function Projects() {
    return (
        <>
           <div>
            <h3 className="text-3xl py-1 text-center dark:text-white ">Me</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            Hello! Im a junior developer with experience in an education-related project. My skills include Node.js, JavaScript, Next.js, Pixi.js, HTML5, CSS, SQL, and NoSQL (Oracle and MongoDB). I have experience in native mobile app development with Kotlin in Android Studio, and knowledge of ReactJS, React Native, and Python. Im seeking opportunities to contribute to innovative projects.
            </p>
            
          </div>
          <div className="lg:flex gap-10 ">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-gray-900  dark:bg-white flex-1">
              <Image src={"/design.png"} width={100} height={100} alt="ee"/>
              <h3 className="text-lg font-medium pt-8 pb-2 text-white dark:text-gray-900 ">
                Soft skills
              </h3>
             
              
              <p className="text-white dark:text-gray-900 py-1">Comunicação eficaz</p>
              <p className="text-white dark:text-gray-900 py-1">Trabalho em equipe</p>
              <p className="text-white dark:text-gray-900 py-1">Liderança</p>
              <p className="text-white dark:text-gray-900 py-1">Flexibilidade</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-gray-900   dark:bg-white flex-1">
              <Image src={"/code.png"} width={100} height={100} alt="ee"/>
              <h3 className="text-lg font-medium pt-8 pb-2 text-white dark:text-gray-900 ">
                Hard skills
              </h3>
             
              
              <p className="text-white dark:text-gray-900 py-1">JavaScript</p>
              <p className="text-white dark:text-gray-900 py-1">Python</p>
              <p className="text-white dark:text-gray-900 py-1">Kotlin</p>
              <p className="text-white dark:text-gray-900 py-1">Next.js</p>
              <p className="text-white dark:text-gray-900 py-1">Tailwind CSS</p>
              <p className="text-white dark:text-gray-900 py-1">SQL</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-gray-900  dark:bg-white flex-1">
              <Image src={"/consulting.png"} width={100} height={100} alt="ee"/>
              <h3 className="text-lg font-medium pt-8 pb-2 text-white dark:text-gray-900 ">Objective</h3>
              
              
              <p className="text-white dark:text-gray-900 py-1">Improve problem solving skills</p>
              <p className="text-white dark:text-gray-900 py-1">Deepen knowledge in specific areas</p>
              <p className="text-white dark:text-gray-900 py-1">Improve code quality</p>
              <p className="text-white dark:text-gray-900 py-1">Build meaningful projects</p>
            </div>
            
          </div>
        </>
    )
}