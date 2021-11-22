import React from 'react';

const Button = ({ text, subTitle }) => {
  return (
    <>
      <div>
        <button className="btn">
          {text} <br /> {subTitle}
        </button>
      </div>
    </>
  );
};

export default Button;
