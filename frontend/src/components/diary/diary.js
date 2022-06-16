import React, { useEffect } from "react";

const Diary = props => {

    useEffect(() => {
        props.getDiary(props.user_id);
    }, [])

    const displayDiary = () => {
        if (props.diary.length > 0) {
            return <section>{props.diary[0].character}</section>
        }
    }

    return (
        <div>
            {displayDiary()}
        </div>
    )
}

export default Diary;