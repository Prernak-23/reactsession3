import React, { Component } from "react";
import "./item.css";

class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {
        name: "",
        price: 0
      }
    };
  }

  handleOnChange = event => {
    let newdishValue = event.target.value;
    if (newdishValue.includes("-")) {
      let splitString = newdishValue.split("-");
      let name = splitString[0];
      let price = parseInt(splitString[1], 10);

      this.setState({
        item: {
          name: name,
          price: price
        }
      });
    }
  }


  render() {
    return (
      <div>
        <form
          onSubmit={event => this.props.handleAddItem(event, this.state.item)}>
          <input
            className="new-item"
            onChange={this.handleOnChange}
            placeholder="Enter Item and price seperated by a '-'"
            type="text"
            name="name"
          />

          <input className="add-btn" type="submit" value="ADD" />
        </form>
      </div>
    );
  }
}

export default AddItem;
