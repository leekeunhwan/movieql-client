import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import client from "./apolloClient";
import Home from "./Home";
import Detail from "./Detail";

class App extends Component {
  render() {
    return (
      // react-apollo도 Provider와 Consumer가 있는데 흡사 Context API와 Redux 같다. - 하지만 본질적으로 다르다.
      <ApolloProvider client={client}>
        <Router>
          <main>
            <Route exact={true} path={"/"} component={Home} />
            <Route path={"/details/:movieId"} component={Detail} />
          </main>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
