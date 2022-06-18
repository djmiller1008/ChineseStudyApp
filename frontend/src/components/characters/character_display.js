import React, { useEffect } from "react";
import "../../assets/character.scss";

const CharacterDisplay = (props) => {

    if (props.location.state.word.character === undefined) {
        props.location.state.word.character = props.location.state.word.string;
        props.location.state.word.definition = props.location.state.word.kDefinition;
        props.location.state.word.pinyin = props.location.state.word.kMandarin;
    }

    useEffect(() => {
        props.getDiary(props.user_id);
    }, [])
    
    const handleClick = (e) => {
        e.preventDefault();
        
        const entry = {
            character: props.location.state.word.character,
            user_id: props.user_id,
            definition: props.location.state.word.definition,
            pinyin: props.location.state.word.pinyin
        };
        props.addEntryToDiary(entry)
            .then(() => props.getDiary(props.user_id));
        
    }

    const handleDelete = (e) => {
        e.preventDefault();
        const id = props.diaryWithIds.filter(word => word.character === props.location.state.word.character)[0]._id;
        props.removeEntry(id);
    }

    const renderButton = () => {
        if (props.diary.includes(props.location.state.word.character)) {
            return (
                <button onClick={handleDelete} className="delete-character-button">Delete From Diary</button>
            )
        } else {
            return (
                <button onClick={handleClick} className="add-character-button">Add to Character Diary</button>
            )
        }

    }

    return (
        <div className="main-character-display">
            <div className="character-display-div">
                <section className="character-section">
                    {props.location.state.word.character}
                </section>
                <section className="character-info-section">
                    <p>{props.location.state.word.definition}</p>
                    <p>{props.location.state.word.pinyin}</p>
                </section>
            </div>
            <section className="button-section">
                {renderButton()}
            </section>
           
        </div>
        
    )
}



export default CharacterDisplay;
