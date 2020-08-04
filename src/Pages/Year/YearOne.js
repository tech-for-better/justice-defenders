import React from "react";
import firebase from "../../firebase";

const YearOne = () => {
  const [yearInfo, setYearInfo] = React.useState([]);
  const [yearModules, setYearModules] = React.useState([]);

  React.useEffect(() => {
    firebase
      .firestore()
      .collection("Year1")
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          if (doc.id === "Additional") {
            setYearInfo(doc.data());
          } else {
            setYearModules(yearModules.push({ [doc.id]: doc.data().Title }));
          }
        });
      });
  }, []);

  console.log(yearInfo);

  return (
    <>
      <h2>{yearInfo.Title}</h2>
      <h4>{yearInfo.Intro}</h4>
      <p>{yearInfo.Help}</p>
    </>
  );
};

export default YearOne;
