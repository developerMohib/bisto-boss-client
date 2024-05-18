import HeadingTItle from "../HeadingTitle/HeadingTItle";
import featureImg from "../../assets/home/featured.jpg";
import './Feature.css'
import { Link } from "react-router-dom";

const Feature = () => {
  return (
    <div className="featureBG">
      <HeadingTItle subHeading={"Check It Out"} heading={"Feature Item"}>
        {" "}
      </HeadingTItle>
      <div className="md:grid grid-cols-2 px-20 py-10 gap-10 ">
        <div>
          {" "}
          <img src={featureImg} alt="" />{" "}
        </div>
        <div className=" z-10 text-white">
          <h1 className="text-2xl font-semibold "> Out Feature </h1>
          <p className="my-5">
            Interactively create distributed total linkage with next-generation
            metrics. Competently implement visionary ROI whereas timely process
            improvements. Efficiently plagiarize user-centric ideas vis-a-vis
            cooperative expertise. Conveniently restore virtual content via an
            expanded array of architectures. Dynamically plagiarize adaptive
            intellectual capital before magnetic meta-services. Synergistically
            promote distinctive internal thinking for multimedia based e-tailers.
            Interactively synergize multimedia based content through
            next-generation solutions. Seamlessly pursue fully researched
            schemas and viral partnerships. Credibly repurpose standardized
            growth strategies and impactful.
          </p>
          <Link> <button className="border-b-2 border-white bg-transparent text-white py-2 px-4 hover:bg-red-400 rounded-lg">  check </button> </Link>
        </div>
      </div>
    </div>
  );
};

export default Feature;
