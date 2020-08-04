import React from "react";
import firebase from "../../firebase";

// components
import ModuleCard from '../../Components/ModuleCard/ModuleCard';

// styles
import {ModuleCardsContainer} from './YearOne.style'

const YearOne = () => {
  const [yearInfo, setYearInfo] = React.useState([]);
  const [yearModules, setYearModules] = React.useState([]);

  React.useEffect(() => {
    firebase
      .firestore()
      .collection("Year1")
      .onSnapshot((snapshot) => {
            const modules = snapshot.docs.map((doc) => (
              doc.id === 'Additional' ? setYearInfo({id: doc.id, ...doc.data()}) : {id: doc.id,
                ...doc.data()
              })
              )
              setYearModules(modules)
            })
          }, []);

  const yearModuleCards = (yearModules) => {
    return (
      yearModules.map((yearModule) => {
        if (!yearModule) {
          console.log('This is not a viable solution!')
        } else {
          return <ModuleCard key={yearModule.id} title={yearModule.Title}/>
        }
      })
    )
  }

  if (!yearModules) {
    return <p>Loading</p>
  } else {
      return (
        <>
          <h2>{yearInfo.Title}</h2>
          <h4>{yearInfo.Intro}</h4>
          <p>{yearInfo.Help}</p>
          <ModuleCardsContainer>{yearModuleCards(yearModules)}</ModuleCardsContainer>
        </>
      );
  }
};

export default YearOne;
