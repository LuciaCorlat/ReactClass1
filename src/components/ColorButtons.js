import React, {Component} from 'react';
import Buttons from './Buttons';

export default class ColorButtons extends Component {
    onClick = (color) => {
        const {onSelectColor} = this.props;
        onSelectColor(color);
    }
    render() {
        return (
        <div>
            <Buttons title="Blue" value="blue" onClick={()=> this.onClick('blue')}/>
            <Buttons title="Yellow" value="yellow" onClick={()=> this.onClick('yellow')}/>
            <Buttons title="Red" value="red" onClick={()=> this.onClick('red')}/>
            <Buttons title="Green" value="green" onClick={()=> this.onClick('green')}/>
        </div>
        )
    }
}