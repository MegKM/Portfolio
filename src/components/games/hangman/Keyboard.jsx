import React, { Component } from 'react';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import "./keyboard.css"

class KeyboardComponent extends Component {
  onKeyPress = (button) => {
    this.props.onKeyPress(button);
  }

  render(){
    return (
      <Keyboard
        onChange={this.onChange}
        onKeyPress={this.onKeyPress}
        theme={"hg-theme-default myTheme1"}
        layout={{
          default: [
            "q w e r t y u i o p",
            "a s d f g h j k l",
            "z x c v b n m",
          ]
        }}
      />
    );
  }
}

export default KeyboardComponent;