import React from 'react';
import "../../assets/search.scss";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: "",
            results: []
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSearch = this.handleSearch.bind(this);

    }

  
    handleInput(e) {
        this.setState({ searchTerm: e.currentTarget.value })
    }

    handleSearch(e) {
        e.preventDefault();
        fetch(`http://ccdb.hemiola.com/characters/mandarin/${this.state.searchTerm}?fields=kDefinition,kMandarin,string`)
            .then(response => response.json())
            .then(data => {
                this.setState({ results: data })
            })
    }

    handleClick(word) {
        this.props.history.push({
            pathname: '/character_display',
            state: word 
       })
    }

    
    renderCharacters() {
        const words = this.state.results.filter(word => word.kDefinition !== null)
                        .map((word, i) => (
                            <tr key={i} className='search-table-row' onClick={() => this.handleClick({word})}>
                            <td>{word.string}</td>
                            <td>{word.kDefinition}</td>
                            <td>{word.kMandarin}</td>
                        </tr>
        ));

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

    render() {
        let words;
        if (this.state.results.length > 0) {
            words = this.renderCharacters();
            
        }
        return (
            <div>
                <div className='main-search-div'>
                    <h1>Pinyin Search</h1>
                    <div className='search-bar'>
                        <input type='text' 
                                value={this.state.searchTerm} 
                                onChange={this.handleInput}
                                className='search-bar'></input>
                        <button onClick={this.handleSearch}>Search</button>
                    </div>
                </div>
                <div className='search-results-div'>
                    {words}
                </div>
                
            </div>
            
        )
    }
}

export default Search;