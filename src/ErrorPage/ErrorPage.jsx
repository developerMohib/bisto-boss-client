
import { Link } from 'react-router-dom';
import errorimg from '../assets/404.gif'
const ErrorPage = () => {
    return (
        <div>
            <h1> I ma error page </h1>
            <img src={errorimg} alt="" />
            <Link to='/' > beck home </Link>
        </div>
    );
};

export default ErrorPage;