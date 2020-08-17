import React from "react";

const Pdf = ({ src }) => {
  console.log(src)
  return (
    <embed src={src} width="500" height="375" type="application/pdf"></embed>
  );
};

export default Pdf;
