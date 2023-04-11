import React from 'react';
import Table from '../table/table';
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
        fetch(`https://ccdb.hemiola.com/characters/mandarin/${this.state.searchTerm}?fields=kDefinition,kMandarin,string`)
            .then(response => response.json())
            .then(data => {
                this.setState({ results: data })
            })
    }

    render() {
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
                    <Table data={this.state.results} />
                </div>
            </div>
        )
    }
}

export default Search;