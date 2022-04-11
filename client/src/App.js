import React from 'react';
import NavBar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Home from './pages/Home'
import Chat from "./pages/Chat";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import SinglePost from './pages/SinglePost'
import Friends from './pages/Friends';
import Lists from './pages/Lists';
import Posts from './pages/Posts';
import { setContext } from '@apollo/client/link/context';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';


const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {

  return (
    <ApolloProvider client={client}>
      <div>
        <Router>
          <div>
            <NavBar />
            <div className="pages">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/profile/:username?" component={Profile} />
                <Route exact path="/chat" component={Chat} />
                <Route exact path="/friends" component={Friends} />
                <Route exact path="/lists" component={Lists} />
                <Route exact path="/posts" component={Posts} />
                <Route exact path="/post/:id" component={SinglePost} />

              </Switch>
            </div>
          </div>
        </Router>
        </div> 
    </ApolloProvider>
  );
}

export default App;
