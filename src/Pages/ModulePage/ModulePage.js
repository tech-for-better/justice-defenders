import React from "react";
// import firebase from "../../firebase";

const ModulePage = (props) => {
  //     const [moduleSubtopics, setModuleSubtopics] = React.useState([])
  //     const [moduleInfo, setModuleInfo] = React.useState([])

  React.useEffect(() => {
    //   firebase
    //   .firestore()
    //   .collection("Year1")
    //   .doc("Year1_Module1")
    //   .get().then(console.log)
    //   .onSnapshot((snapshot) => {
    //       console.log(snapshot.fields)
    //     const subtopics = snapshot.collections.map((doc) =>
    //       doc.id === "Additional"
    //         ? setModuleInfo({ id: doc.id, ...doc.data() })
    //         : { id: doc.id, ...doc.data() },
    //     );
    //     console.log(subtopics)
    //     setModuleSubtopics(subtopics);
    //   });
  }, []);
  return <h1>Module page</h1>;
};

export default ModulePage;
