import React, { Component } from "react";
import Modal from './Modal.js'
import { Link } from 'react-router-dom';

class Dashboard extends Component {
  state = { show: false ,
            towns: ["townsvea1", "townsvea2", "townsvea3", "townsvea4", "townsvea5", "townsvea6", "townsvea7", "townsvea8", "townsvea9", "townsvea0"]
          };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
        <main>
          <h5>Choose another town</h5>
          <Modal show={this.state.show} handleClose={this.hideModal}>
            <header className="border-bottom">Choose another town</header>
              <div className="d-flex"> 
                {this.state.towns.map((town, i) =>
                  <Link to={`/${town}`} key={i}>{town}</Link>
                )
              }
              </div>
          </Modal>
              <button type="button" className="btn btn-light" onClick={this.showModal}>
                open
              </button>
        </main>
      );
    }
  }
  

export default Dashboard