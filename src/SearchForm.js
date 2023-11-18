import React, { useState } from 'react';

const SearchForm = (props) => {
    const [inputText, setInputText] = useState("");

    const handleChangeInput = (event) => {
        setInputText(event.target.value);
        console.log(inputText);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        props.onSubmit(inputText);
    };

    return (
        <div className='container-sm rounded' style={{ margin:'15px'}}>
            <form onSubmit={handleFormSubmit}>
                <div className='form-group'>
                    <label htmlFor='search-term' style={{fontWeight:'bold'}}>Search for</label>
                    <input
                        style={{maxWidth:'250px'}}
                        type='text'
                        className='form-control'
                        placeholder='Enter players name here'
                        onChange={handleChangeInput}
                    />
                </div>
            </form>
        </div>
    );
};

export default SearchForm;