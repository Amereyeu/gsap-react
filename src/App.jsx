import { gsap, Power3 } from "gsap";
import "./App.scss";

import Images from "./components/Images";
import Content from "./components/Content";
import Logo from "./components/Logo";

function App() {
  let tl = new gsap.timeline();
  let ease = Power3.easeOut;

  return (
    <div className="App">
      <div className="container">
        <Content timeline={tl} />
        <Images timeline={tl} ease={ease} />
        <Logo timeline={tl} />
      </div>
    </div>
  );
}

export default App;

