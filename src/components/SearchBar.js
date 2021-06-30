import React from 'react'

class SearchBar extends React.Component{
    state = {searchTerm: 'Hello'};
    onInputChange = (event) => {
        this.setState({searchTerm: event.target.value})
    };
    onFormSubmit = (event) => {
        event.preventDefault();
        
        this.props.onFormSubmit(this.state.searchTerm)
    }
    render() {
        return(
             <div className = "search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className = "ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input
                            type = "text"
                            value = {this.state.searchTerm}
                            onChange = {this.onInputChange}
                        />
                    </div>
                </form>
             </div>
        );
    }   
}

export default SearchBar;