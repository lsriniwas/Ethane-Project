import React from "react";
import PropTypes from "prop-types";
import { PinItem } from "./PinItem";


class Pin extends React.Component {
  constructor(props) {
    super(props);
    this.values = new Array(props.len).fill("");
    this.elements = [];
   
  }
  
  handleChange = (val, i) => {
    const { len } = this.props;
    this.values[i] = val;
    if (val.length > 0 && i < len - 1) {
      this.elements[i + 1].focus();
    }
    this.props.onChange && this.props.onChange(this.values.join(""));
  }

  handleBackSpace = (i, val) => {
    if (i > 0) {
      this.elements[i - 1].focus();
    }
    this.values[i] = val;
    this.props.onChange && this.props.onChange(this.values.join(""));
  }

  handlePaste =(e) =>{
    e.preventDefault();
    let val = e.clipboardData
      .getData("Text")
      .split("")
      .filter((_, i) => i < this.props.len);
      
    val.forEach((value, i) => {
      this.values[i] = value;
      this.elements[i].focus();
      this.elements[i].setValue(value);
    });
  }
  render() {
    return (
      <div onPaste={this.handlePaste}>
        {this.values.map((item, i) => (
          <PinItem
            key={i}
            ref={(n) => (this.elements[i] = n)}
            onChange={(val) => this.handleChange(val, i)}
            onBackspace={(e) => this.handleBackSpace(i, e.target.value)}
          />
        ))}
      </div>
    );
  }
}
Pin.propTypes = {
  len: PropTypes.number.isRequired
};
export { Pin };