import TamponHeader from "./components/TamponHeader/TamponHeader";
import TamponBody from "./components/TamponBody/TamponBody";
import GitHubLink from "./components/GithubLink";
import "./App.css";

const App = () => {
  return (
    <>
      <TamponHeader />
      <TamponBody />
      <GitHubLink />
    </>
  );
};

export default App;
