import { FaUserTie } from "react-icons/fa";
import { FaHospitalUser } from "react-icons/fa";
import Find from "./Find";

const Hero = () => {
  return (
    <section className="container mx-auto mt-10 flex flex-col items-center">
      <div className="flex flex-row gap-8">
        {/* left */}
        <div className="bg-slate-200 w-seekers h-42 p-8 rounded-lg">
          <div className="flex flex-row items-center gap-2">
            <FaUserTie className="text-colorPrimary text-2xl" />
            <h4 className="text-2xl font-bold">For Job Seekers</h4>
          </div>
          <p className="mt-2 text-sm text-slate-500">
            At Viso we love helping people find the right place to work. <br />
            Our team's experience in HR and recuriting industry helps
            <br />
            us gather stable job offerings in various industries
          </p>
        </div>
        {/* right */}
        <div className="bg-slate-200 w-seekers h-42 p-8 rounded-lg">
          <div className="flex flex-row items-center gap-2">
            <FaHospitalUser className="text-colorPrimary text-2xl" />
            <h4 className="text-2xl font-bold">For Employers</h4>
          </div>
          <p className="mt-2 text-sm text-slate-500">
            Viso is specialized in offering the entire range of HR
            <br />
            services from candidate selection, interview, to complete
            <br />
            human resources management as an oursoursed service.
          </p>
        </div>
      </div>
      <Find />
    </section>
  );
};
export default Hero;
