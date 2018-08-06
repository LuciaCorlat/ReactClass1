import React, { Component } from 'react';
import './App.css';
import MyHeader, { FavouriteColor } from './components/Header';
import ColorButtons2 from './components/ColorButtons2';
import Footer from './components/Footer';
import ColorChooser from './components/ColorChooser';

class App extends Component {
  state = {
    inputColor: '',
    selectedColor: '',
    buttonColor: '',
  }

  onColorChange = (event) => {
    const { value } = event.target;
    const newValue = this.state.selectedColor + value;
    this.setState({
      selectedColor: newValue,
    });
  }

onSelectColor = (color) => {
  this.setState({
    selectedColor: color,
  });
}

onFocus = () => {
  this.setState({
    selectedColor: '',
  });
}

render() {
  return (
    <div className="App">
      <MyHeader
        title="Hello React-Demo"
        className="header"
      />
      <FavouriteColor
        text="Your favourite color is "
        color={this.state.selectedColor}
      />
      <div>
        <ColorChooser
          onFocus={this.onFocus}
          selectedColor={this.state.inputColor}
          onColorChange={this.onColorChange}
        />
      </div>
      <ColorButtons2 onSelectColor={this.onSelectColor} />
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
}

export default App;
