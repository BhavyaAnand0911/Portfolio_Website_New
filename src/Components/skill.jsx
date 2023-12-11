import React from "react";

const cardStyle = {
  color: "black",
  minWidth: "100px",
  width: "130px",
  height: "50px",
  padding: "2px",
  borderRadius: "6px",
  backgroundColor: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginRight: "8px",
  marginLeft: "8px",
};

const contentStyle = {
  color: "black",
  fontSize: "0.9rem",
  fontWeight: "600",
  textAlign: "center",
  padding: "2px",
};

const skill = (name) => {
  return (
    <>
      <div
        className="card m-3 w-full md:w-[90px] h-[30px] md:m-8 "
        style={cardStyle}
      >
        <span className="cardContent" style={contentStyle}>
          {name.name}
        </span>
      </div>
    </>
  );
};

export default skill;
