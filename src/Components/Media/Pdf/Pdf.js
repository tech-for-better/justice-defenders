import React from "react";

const Pdf = ({ title, src }) => {
  return (
    <>
    <h2>{title}</h2>
    <embed src={src} width="500" height="375" type="application/pdf"></embed>
    </>
  );
};

export default Pdf;
