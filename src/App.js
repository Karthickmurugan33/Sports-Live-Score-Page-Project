import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/HomePage/Home";
import { Input } from "./components/InputLoginForm/Input";
import Cricket from "./components/pageinfo/Cricket";
import Football from "./components/pageinfo/Football";
import Basketball from "./components/pageinfo/Basketball";
import Hockey from "./components/pageinfo/Hockey";
import Kabaddi from "./components/pageinfo/Kabaddi";
import Volleyball from "./components/pageinfo/Volleyball";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path={"/"} exact>
            <Input />
          </Route>
          <Route path={"/cricket"}>
            <Cricket />
          </Route>
          <Route path={"/hockey"}>
            <Hockey />
          </Route>
          <Route path={"/Volleyball"}>
            <Volleyball />
          </Route>
          <Route path={"/basketball"}>
            <Basketball />
          </Route>
          <Route path={"/kabaddi"}>
            <Kabaddi />
          </Route>
          <Route path={"/football"}>
            <Football />
          </Route>
          <Route path={"/home"}>
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
