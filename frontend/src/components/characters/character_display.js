import React from "react";
import "../../assets/character.scss";

const CharacterDisplay = (props) => {

    return (
        <div className="main-character-display">
            <div className="character-display-div">
                <section className="character-section">
                    {props.location.state.word.string}
                </section>
                <section className="character-info-section">
                    <p>{props.location.state.word.kDefinition}</p>
                    <p>{props.location.state.word.kMandarin}</p>
                </section>
            </div>
            <section className="button-section">
                <button className="add-character-button">Add to Character Diary</button>
            </section>
           
        </div>
        
    )
}



export default CharacterDisplay;
