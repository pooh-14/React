
import React, {useState} from 'react';

const DynamicStyles = () => {
    const [backgroundColor, setBackgroundColor] = useState('red');
    const colorChange = () =>{
        setBackgroundColor('blue')
    };
    
    const styles = {
        backgroundColor: backgroundColor,
        color: 'white',
        padding: '10px',
        borderRadius: '5px',
        cursor: 'pointer'
    };

  return (
    <div style={styles} onClick={colorChange}>
        Click to change Color
    </div>
  )
}

export default DynamicStyles