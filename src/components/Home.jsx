import { Component } from "react";
import { getGledes } from "../services/dataService";
import data from "../assets/data/places.json";

import MyMapComponent from "./Map";

class Home extends Component {
  state = {
    gledes: [],
    locations: []
  };

  async componentDidMount() {
    // const { data } = await getGledes(); // uncomment this line to get real data.
    this.setState({ gledes: data });
  }

  updateMapPositions = (glede) => {
    this.setState({ locations: glede.locations });
  };

  // On Mouse over marker show tooltip.
  handleMouseOver = (location) => {
    const update = [...this.state.locations];
    const index = this.state.locations.findIndex(
      (loc) => loc.code === location.code
    );
    update[index]["showTooltip"] = true;
    this.setState({ locations: update });
  };

  // On Mouse leave from marker hide tooltip.
  handleMouseExit = (location) => {
    const update = [...this.state.locations];
    const index = this.state.locations.findIndex(
      (loc) => loc.code === location.code
    );
    update[index]["showTooltip"] = false;
    this.setState({ locations: update });
  };

  render() {
    const { locations, gledes } = this.state;
    return (
      <div style={{ margin: "10px" }}>
        <div className="container">
          {gledes.map((glede) => (
            <div key={glede.id} className="list-item">
              <div className="row">
                <span className="header">{glede.name} </span>

                <button
                  className="btn-primary"
                  onClick={() => this.updateMapPositions(glede)}
                >
                  vise gledesteder
                </button>
              </div>
              <div className="divider"></div>
              <span> {glede.description} </span>
            </div>
          ))}
        </div>
        <div>
          <MyMapComponent
            onMouseOver={this.handleMouseOver}
            onMouseOut={this.handleMouseExit}
            locations={locations}
          />
        </div>
      </div>
    );
  }
}

export default Home;
