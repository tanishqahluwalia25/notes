import { AnimateSharedLayout } from "framer-motion";
import "./App.css";
import Main from "./components/Main";

function App() {
  return (
    <AnimateSharedLayout exitBeforeEnter>
      <div className="App">
        <Main />
      </div>
    </AnimateSharedLayout>
  );
}

export default App;
