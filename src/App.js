import Homepage from "./pages/homepage/Homepage.component";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Shoppage from "./pages/shoppage/Shoppage.component";
function Hats(props) {
  console.log(props);
  return (
    <>
      <h1>Hats</h1>
    </>
  );
}

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={Shoppage} />
        <Route exact path="/shop/:item" component={Hats} />
      </Switch>
    </>
  );
}

export default App;
