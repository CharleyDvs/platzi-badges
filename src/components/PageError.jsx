import React from "react";

const PageError = ({ message }) => (
  <h3>
    Ha o currido un error... <br /> {`${message}`}
  </h3>
);

export default PageError;
