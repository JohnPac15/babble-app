import NavBar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {SocketContext, socket} from "./components/socket";
import Login from "./pages/Login";
import Home from './pages/Home'
import Chat from "./pages/Chat";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";

function App() {
  return (
    <div>
      <Router>
        <SocketContext.Provider value={socket}>
        <div>
          <NavBar />
          <div className="pages">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/chat" component={Chat} />
            </Switch>
          </div>
        </div>
        </SocketContext.Provider>    
      </Router>
    </div>
  );
}

export default App;
