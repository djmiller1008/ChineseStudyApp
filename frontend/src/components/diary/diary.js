import React, { useEffect } from "react";
import Table from '../table/table';

const Diary = props => {

    useEffect(() => {
        props.getDiary(props.user_id);
    }, [])

    return (
        <div>
            <Table data={props.diary} />
        </div>
    )
}

export default Diary;