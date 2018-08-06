import React, { Component } from 'react';

class ColorButtons2 extends Component {
    onClick = (color) => {
      const { onSelectColor } = this.props;
      onSelectColor(color);
    }

    render() {
      return (
        <div className="color-button-container">
          <button type="button" onClick={() => this.onClick('green')}>
            Green
          </button>
          <button type="button" onClick={() => this.onClick('fuchsia')}>
                Fuchsia
          </button>
          <button type="button" onClick={() => this.onClick('white')}>
                White
          </button>
        </div>
      );
    }
}

export default ColorButtons2;
