import React from 'react';

function Button({ content, color, onClick = () => {} }) {
  return (
    <>
      <style jsx>
        {`
          button {
            background-color: ${color};
            color: #fff;
            text-shadow: none;
            cursor: pointer;
            display: inline-block;
            min-height: 10px;
            outline: 0;
            border: none;
            vertical-align: baseline;
            margin: 0 4px 0 0;
            padding: 13px 22px;
            text-transform: none;
            text-shadow: none;
            font-weight: 700;
            line-height: 10px;
            font-style: normal;
            text-align: center;
            text-decoration: none;
            border-radius: 4px;
          }
        `}
      </style>
      <button onClick={onClick}>{content}</button>
    </>
  );
}

export default Button;
