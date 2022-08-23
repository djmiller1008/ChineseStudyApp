import React, { useEffect } from "react";
import Table from '../table/table';

const Diary = props => {


    useEffect(() => {
        props.getDiary(props.user_id);
    }, [props])

    if (props.diary.length > 0) {
        return (
            <div>
                <Table data={props.diary} />
            </div>
        )
    } else {
        return (
            <div className="no-entries-div">
                <p>Go to 'Search' to find characters to add to your diary!</p>

            </div>
        )
    }
}

export default Diary;