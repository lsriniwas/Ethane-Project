import React from "react";

const style = {
  padding: 10,
  width: 35,
  fontSize: 14,
  margin: 5
};

class PinItem extends React.Component {
  constructor(props) { 
    super(props);
    
  }
  handleKeyUp = (e) => {
    if (e.keyCode === 8 && !this.input.value) {
      this.props.onBackspace(e);
    } else {
      this.onChange(e);
    }
  }

  setValue = (val) => {
    this.input.value = val;
  }

  focus = () => {
    this.input.focus();
  }

  onChange(e) {
    this.props.onChange(e.target.value);
  }
  
  render() {
    return (
      <input
        style={{ ...style}}
        ref={(n) => (this.input = n)}
        maxLength={1}
        onKeyUp={this.handleKeyUp}
        
      />
    );
  }
}
export { PinItem };