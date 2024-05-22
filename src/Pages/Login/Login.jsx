import { Link } from "react-router-dom";
import DynamicTitle from "../../Component/DynamicTitle/DynamicTitle";

const Login = () => {
  return (
    <div>
      <DynamicTitle titleName={'Login'}></DynamicTitle>
      <p> i m login page </p>
      <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, aliquid labore quas blanditiis doloremque culpa amet sapiente accusamus eum tempora beatae dolorum placeat molestiae quis, rerum exercitationem ducimus ipsum nostrum dignissimos? Quidem similique incidunt quaerat, totam commodi facere temporibus cupiditate repellat accusamus animi nulla repudiandae ullam ad laborum nesciunt ab velit possimus quis! Obcaecati ipsam nisi iste perferendis quidem temporibus alias non possimus corporis incidunt ullam, sit veritatis nesciunt totam dicta voluptatibus dignissimos placeat fugit cum adipisci error cumque! Fugit odit aperiam, harum facere blanditiis eligendi cumque id nemo placeat! Sed ratione ad voluptatem soluta itaque nostrum rerum. Voluptatum, illo? </p>
      <button className='btn btn-outline' ><Link to='/register' > Register </Link></button>
    </div>
  );
};

export default Login;
