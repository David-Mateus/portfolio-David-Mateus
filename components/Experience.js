import Card from "./Card";

export default function Experience() {
  return (
    <>
      <section className="py-10">
        <div>
          <h3 className="text-3xl py-1 dark:text-white text-center ">
            Experience
          </h3>
          <br />
          <br />
          <h3 className="font-bold dark:text-white">Ser Educacional</h3>

          <p className="text-sm py-3 leading-8 text-gray-800 dark:text-gray-200">
            During my work as a developer, I utilized PixiJS and GSAP
            technologies to create interactive and effective e-learning
            solutions in the distance learning environment (EAD). Additionally,
            I applied my skills in HTML, CSS, and JavaScript, along with NodeJS,
            to make these solutions possible, notably including the creation of
            REST APIs. Throughout the project, I employed agile methodologies to
            ensure the delivery of efficient and high-quality results, adjusting
            the scope and timeline as the projects needs evolved.
          </p>
          <div class="grid grid-cols-4 gap-4">
            <Card link="/" photo = "/project.png"  title = "LocateMe" />
            <Card photo = "/project.png"  title = "LocateMe" />
            <Card photo = "/project.png"  title = "LocateMe" />
            <Card photo = "/project.png"  title = "LocateMe" />
          </div>
        </div>
        <div>
          <h3 className="text-3xl py-1 mt-12 mb-12 dark:text-white text-center ">
            Projects
          </h3>
          <div class="grid grid-cols-4 gap-4">
            <Card link="https://locateme.tech/" photo = "/locateme.png"  title = "LocateMe" />
            <Card link="https://github.com/David-Mateus/App-WaterMe" photo = "/water.png" title = "Water" />
            <Card link="https://github.com/David-Mateus/GolPE-App" photo = "/golPe.png" title = "GolPe" />
            <Card link="https://david-mateus.github.io/Dev.finance/" photo = "/devfinance.png" title = "Dev.finance"/>
          </div>
        </div>
      </section>
    </>
  );
}
