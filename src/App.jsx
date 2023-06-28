import { useState } from "react";

import NavBarr from "./Comopnents/NavBarr";
import Contenido from "./Comopnents/Contenido";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBarr imagen="./src/assets/ggggg.png" />
      {/* <Contenido/> */}
    </>
  );
}

export default App;
