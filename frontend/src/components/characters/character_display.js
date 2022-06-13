import React from "react";

class CharacterDisplay extends React.Component {
    constructor(props) {
        super(props);

    }

    
    render() {
        return (
            <div>{this.props.location.state.word.string}</div>
        )
    }

}

export default CharacterDisplay;
