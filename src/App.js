//compoents
import './App.css';
import MyNavbar from "../src/components/my-navbar/mynavbar.components";
import MyCarousal from "../src/components/my-carousal/my-carousal.components";
import TypeWriter from "../src/components/title-message/title-message.component";

const App = () => {
  return (
    <div>
      <MyNavbar />
      <MyCarousal />
      <TypeWriter />
    </div>
  );
}

export default App;
