import React from 'react';
import './error-message.css';


export const ErrorMesagge = ({pokemonName}) => {
    return (
        <div id="error-message">
            <span id="error-text">{`Couldn't find any pokemon named ${pokemonName}. Try with other name.`}</span>
        </div>
    )
}
