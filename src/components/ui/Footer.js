import React from "react";

const Footer = ({ getOffset, offsetValue }) => {
  const handleLeft = () => {
    let val = offsetValue >= 10 ? offsetValue - 10 : offsetValue;
    getOffset(val);
  };

  const handleRight = () => {
    let val = offsetValue <= 50 ? offsetValue + 10 : offsetValue;
    getOffset(val);
  };
  return (
    <div className="footer">
      <button className="footerBtn" onClick={() => handleLeft()}>
        &#8249;
      </button>
      <button className="footerBtn" onClick={() => handleRight()}>
        &#8250;
      </button>
    </div>
  );
};

export default Footer;
