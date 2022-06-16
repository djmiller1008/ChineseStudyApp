import React from "react";
import "../../assets/character.scss";

const CharacterDisplay = (props) => {
    
    const handleClick = (e) => {
        e.preventDefault();
        const entry = {
            character: props.location.state.word.string,
            userId: props.userId,
            definition: props.location.state.word.kDefinition,
            pinyin: props.location.state.word.kMandarin
        };

        props.addEntryToDiary(entry);
        
    }

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
                <button onClick={handleClick} className="add-character-button">Add to Character Diary</button>
            </section>
           
        </div>
        
    )
}



export default CharacterDisplay;
