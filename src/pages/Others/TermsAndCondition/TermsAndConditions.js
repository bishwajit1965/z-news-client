import React from "react";
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
  return (
    <div>
      <h4>Here are the terms and conditions.</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores velit
        nemo doloribus sint, veniam consectetur tenetur neque blanditiis quae
        minus tempora sed delectus eos unde pariatur cumque soluta, magni atque.
      </p>
      <p>
        Go back to Registration page. <Link to="/register">Go Home</Link>{" "}
      </p>
    </div>
  );
};

export default TermsAndConditions;
