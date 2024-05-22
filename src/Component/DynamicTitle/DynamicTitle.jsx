import { Helmet } from "react-helmet-async";

const DynamicTitle = ({ titleName }) => {
  return (
    <div>
      <Helmet>
        <title> {titleName} | Bisto Boss Project </title>{" "}
      </Helmet>
    </div>
  );
};

export default DynamicTitle;
