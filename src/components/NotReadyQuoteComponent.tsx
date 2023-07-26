import React from 'react';

const NotReadyQuoteComponent = () => {
  return (
    <div className="inner">
      <h1 className="lm-Heading lm-Heading1 lm-typography-align-center">
        Not ready for a quote yet?
      </h1>
      <div className="hrContainer">
        <span className="yellowRule"></span>
        <span className="blueRule"></span>
      </div>
      <p>Here are some options to get started.</p>
    </div>
  );
};

export default NotReadyQuoteComponent;