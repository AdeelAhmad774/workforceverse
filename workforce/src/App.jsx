import "./components/FirstDiv.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import FirstDiv from "./components/FirstDiv";
import NavigationBar from "./components/navigationbar";
import SecondDiv from "./components/SecondDiv";

function App() {
  return (
    <>
      <NavigationBar></NavigationBar>
      <FirstDiv></FirstDiv>
      <SecondDiv></SecondDiv>
    </>
  );
}

export default App;
