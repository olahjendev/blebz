import React, { Component } from "react";
import CardList from "./CardList";
import Scroll from "./Scroll";
import { bs } from "./Bs";
import SearchBox from "./SearchBox";
import ErrorBoundry from "./ErrorBoundry";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      bs: bs,
      searchfield: ""
    };
  }

  onSearchChange = event => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filteredBs = this.state.bs.filter(bs => {
      return bs.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    return (
      <div className="tc">
        <h1>Blebz</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList bs={filteredBs} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

export default App;
