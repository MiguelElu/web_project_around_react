import "../blocks/page.css";
import "../blocks/header.css";
import "../blocks/content.css";
import "../blocks/footer.css";
import "../blocks/form.css";
import "../blocks/fullview.css";
import "../blocks/confirmation.css";
import "../vendor/fonts.css";
import "../vendor/normalize.css";

import Header from "./components/header";
import Body from "./components/body";
import Footer from "./components/footer";
import Popup from "./components/popup";

function App() {
  return (
    <>
      <div className="page">
        <Header></Header>
        <Body></Body>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
