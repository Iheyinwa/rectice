import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import ice from "../img/ABCD.png";
import Button from "@mui/material/Button";

const Portfolio = () => {
  return (
    <section className="mx-4 lg:mx-10 md:justify-center md:items-center md:h-screen">
      <div className="w-full flex flex-col lg:justify-center lg:items-center gap-4 h-full">
        <section className="flex flex-col lg:flex-row lg:justify-between w-full items-center gap-4 my-4 h-full xl:h-[80%]">

          {/* PORTFOLIO PICTURE */}
          <div className="w-full h-64 md:h-[50%] lg:w-[55%] lg:h-[70%] rounded-lg shadow-lg">
            <img
              src={ice}
              alt="ABCD"
              width={500}
              height={500}
              className="object-cover object-left md:object-top md:object-fill w-full rounded-lg h-full shadow-lg"
            />
          </div>

          <div className="w-full lg:w-[45%] h-auto md:p-4 flex flex-col lg:justify-start gap-4">

            {/* PORTFOLIO CONTENT */}
            <div>
              <p className="text-xl text-justify font-thin">
                With the aid of a Figma design, I carefully curated the landing
                page for a blockchain company taking into details the nitty
                gritty of the design.
              </p>
            </div>

            {/* PORTFOLIO STACK */}
            <div>
              <p className="text-xl text-justify font-medium">
                Frameworks and Languages:
              </p>
              <ul className="text-xl text-left md:text-justify w-fit flex flex-row justify-between gap-1 font-thin">
                <li>Next js</li>
                <span className="font-medium  text-[#312F49]">
                  ||
                </span>
                <li>Tailwind CSS</li>
              </ul>
            </div>

            {/* PORTFOLIO BUTTON */}
            <div className="flex justify-between gap-4 w-fit">
              <Button variant="contained" color="primary" href="/portfolio">
                <p className="text-white text-lg capitalize">View Site</p>
              </Button>
              <Button variant="contained" color="secondary" href="/portfolio">
                <p className="text-white text-lg capitalize">View Github</p>
              </Button>
            </div>
          </div>
        </section>

        <section className="w-full flex justify-between items-center my-4 ">
          <div className="flex justify-center items-center border rounded-full bg-[#312F49] w-fit p-2 cursor-pointer">
            <FaArrowLeft color="#edebe5" size={25} />
          </div>
          <div className="flex justify-center items-center border rounded-full bg-[#312F49] w-fit p-2 cursor-pointer">
            <FaArrowRight color="#edebe5" size={25} />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Portfolio;
