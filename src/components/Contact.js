import React from 'react'

const Contact = () => {
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
          <h1 style={titleStyle}>Contact Page</h1>
        </div>
      );
}

export default Contact
