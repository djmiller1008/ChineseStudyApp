import React from "react";
import { useHistory } from "react-router-dom";
import "../../assets/search.scss";

const Table = (data) => {
    let history = useHistory();

    const handleClick = (word) => {
        history.push({
            pathname: '/character_display',
            state: word 
       })
    }
    
    const renderCharacters = () => {
        const words = data['data'].filter(word => word.kDefinition !== null)
                        .map((word, i) => {
                            if (word.kDefinition === undefined) {
                                return (
                                    <tr key={i} className='search-table-row' onClick={() => handleClick({word})}>
                                        <td>{word.character}</td>
                                        <td>{word.definition}</td>
                                        <td>{word.pinyin}</td>
                                    </tr>
                                )
                            }

                            else {
                                return (    
                                    <tr key={i} className='search-table-row' onClick={() => handleClick({word})}>
                                        <td>{word.string}</td>
                                        <td>{word.kDefinition}</td>
                                        <td>{word.kMandarin}</td>
                                    </tr>)
                            }
    });

       

        return (
            <table className='search-table'>
                <thead>
                    <tr className='title-row'>
                        <th>Character</th>
                        <th>Definition</th>
                        <th>Pinyin with tone</th>
                    </tr>
                </thead>
                <tbody>
                    {words}
                </tbody>
            </table>

        );
    }
  
    if (data['data'].length > 0) {
        return (
            <div className="search-results-div">
                {renderCharacters()}
            </div>
        )
    } else {
        return ""
    }



}

export default Table;