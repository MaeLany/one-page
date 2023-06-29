import { useState } from "react";

import NavBarr from "./Comopnents/NavBarr";
import Contenido from "./Comopnents/Contenido";
import Footer from "./Comopnents/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBarr imagen="../src/assets/ggggg.png" />
      <Contenido padding="25px" />
      <Footer
        facebook="https://web.facebook.com/profile.php?id=100082990446705"
        gnail="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"
        whatsapp="https://www.instagram.com/demeter1j2000/"
        youtube="https://www.youtube.com/channel/UCwmFYCn68zKjKaq7-ZwQi0A"
      />
    </>
  );
}

export default App;
