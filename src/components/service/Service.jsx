import React from 'react';
const Service = ({ title, desc, bg, num }) => {
  return (
    <div className="service-item" style={{ backgroundColor: bg }}>
      <div className="num-absolute">{num}</div>
      <div className="containerLeftText">
        <h3 className="service-title">
          <strong>{title}</strong>
        </h3>
        <p className="service-desc">{desc}</p>
      </div>
    </div>
  );
};

export default Service;
