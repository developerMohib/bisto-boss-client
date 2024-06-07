import Reception from "../Reception/Reception";
import bgImage from '../../assets/home/chef-service.jpg'
const RecepCard = () => {
    return (
        <div>
            <Reception bgImage={bgImage} > 
            <div className="md:w-1/2 mx-auto bg-white text-black text-center p-5" >
            <h1 className="text-2xl" >Bistro Boss</h1>
            <p>Professionally communicate reliable methodologies through state of the art benefits. Phosfluorescently restore inexpensive markets via integrated metrics. Objectively implement low-risk high-yield mindshare whereas web-enabled ideas. Proactively re-engineer tactical deliverables and synergistic.</p>
            </div>
            </Reception>
        </div>
    );
};

export default RecepCard;