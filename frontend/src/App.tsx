import * as React from "react";
import "./App.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { PropertiesList } from "./pages/PropertiesList";

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql"
});

class App extends React.Component {
  public render() {
    return (
      <ApolloProvider client={client}>
        <div>
          <PropertiesList />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
