import SideBar from "./components/SideBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Messages from "./pages/Messages";
import Home from "./pages/Home";
import styled from "styled-components"

const Pages = styled.div`
width:100vw;
height:100vh;
display:flex;
justify-content:center;
align-items:center;

`

function App() {
  return (
    <div>
      <Router>
        <div>
          <SideBar />
          <Pages>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/messages" component={Messages} />
            </Switch>
          </Pages>
        </div>
      </Router>
    </div>
  );
}

export default App;
