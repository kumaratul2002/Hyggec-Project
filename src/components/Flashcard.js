import React from 'react'
import {Link} from 'react-router-dom';
const Flashcard = () => {
    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '10vh', // Adjust the height based on your design
      };
    
      const titleStyle = {
        textAlign: 'center',
      };
    
      return (
        <div style={containerStyle}>
          <h1 style={titleStyle}>Flashcard Page</h1>
        </div>
      );
}

export default Flashcard
