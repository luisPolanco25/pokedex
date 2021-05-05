import React from 'react';
import './loading.css';

export const Loading = () => {
    return (
        <div id="loading-box">
            <div className="roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            <div>
                <h2>Wait...</h2>
            </div>
        </div>
    )
}
