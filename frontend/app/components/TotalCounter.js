import React from 'react';

const TotalCounter = (props) => {
  return (
    <div className="total-wrapper">
      <h4>Total:</h4>
      <h4>{props.total}</h4>
    </div>
  );
};

export default TotalCounter;
