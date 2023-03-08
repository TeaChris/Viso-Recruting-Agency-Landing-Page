import Img from "../assets/statement.svg";

const Find = () => {
  return (
    <div className="flex flex-col items-center mt-16">
      {/* top */}
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-3xl font-bold">Find Your Dream Job Using Viso</h2>
        <p className="text-slate-800">
          It's easy to find job in creative field like design and development
          using Viso's job
          <br /> panel. We've gathered only the best job with awesome challenges
          and great benefits
        </p>
      </div>
      {/* bottom */}
      <div className="w-full mt-0">
        <img src={Img} alt="" className="w-img" />
      </div>
    </div>
  );
};
export default Find;
