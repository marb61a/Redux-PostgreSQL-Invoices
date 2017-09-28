import React from 'react';

export default function ColorBlock({r, g, b}){
    return(
        <div style={{
            width: '500px',
            height: '100px',
            backgroundColor:`rgb(${r}, ${g}, ${b})`
        }}>
        </div>    
    );
}