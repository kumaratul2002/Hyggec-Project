import React from 'react'

const Homes = () => {
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
          <h1 style={titleStyle}>Home Page</h1>
        </div>
      );
}

export default Homes
