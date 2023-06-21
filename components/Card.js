import Image from "next/image";
export default function Card(props) {
  return (
    <>
      <div className="flex flex-col items-center bg-gray-800 border border-gray-700 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-700 dark:border-gray-100 dark:bg-gray-100 dark:hover:bg-gray-300">
        <a href={props.link} className="p-6">
          <Image
            src={props.photo}
            width={900}
            height={900}
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            alt=""
          />
          <div className="text-center pt-4">
            <h5 className="text-white font-medium dark:text-gray-900">{props.title}</h5>
            <p className="text-white dark:text-gray-900">{props.description}</p>
          </div>
        </a>
      </div>
    </>
  );
}
