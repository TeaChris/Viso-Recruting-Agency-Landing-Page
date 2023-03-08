import Typical from "react-typical";
import Button from "../components/Button";

import HeaderImage from "../assets/header.svg";
import "../App.css";
import Hero from "../components/Hero";

const Services = () => {
  return (
    <section className="container mx-auto flex flex-col mt-28">
      <div className="grid grid-cols-[30%_67%] gap-36 items-center">
        <div className="flex flex-col w-96 gap-2 items-start pb-16">
          <h2 className="text-5xl font-bold text-colorBlack items-start">
            We Have Job For{" "}
            <Typical
              loop={Infinity}
              wrapper="b"
              steps={[
                "Developers",
                2000,
                "Designers",
                2000,
                "Marketers",
                2000,
                "Managers",
                2000,
                "Writers",
                2000,
              ]}
              className="text-colorPrimary"
            />
          </h2>
          <p className="text-lg mt-5 text-colorBlack">
            Viso helps you find the perfect job in creative fields like design,
            development & marketing
          </p>
          <Button />
        </div>
        <div className="w-full">
          <img src={HeaderImage} alt="Header Image" className="w-full h-full" />
        </div>
      </div>
      <Hero />
    </section>
  );
};
export default Services;
