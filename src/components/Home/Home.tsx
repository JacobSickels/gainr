import * as React from "react";

interface HomeProps {
  firebaseUser?: any;
  user?: any;
}

class Home extends React.Component<HomeProps> {
  render() {
    return <h1>Hello from Home</h1>;
  }
}

export default Home;
