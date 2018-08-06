import React, {Component} from 'react';

class Buttons extends Component {
    render() {
        const {title} = this.props;
        return (
            <div className="bttn">
                <button>{title}</button>
            </div>
        )
    }
}

export default Buttons;