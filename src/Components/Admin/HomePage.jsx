import React from "react";

const HomePage = () => {
  return (
    <>
      <div>
        <div className="first-div" style={{display: "flex", justifyContent: "center" }}>
        <div
          className="box"
          style={{
            border: "2px solid black",
            borderRadius: "10px",
            width: "812px",
            height: "382px",
          }}
        >
          hello
        </div>
        <div className="button-box " style={{width: "20%", margin: "20px"}}>
          <button style={{margin: "10px", borderRadius: "5px"}}>C</button>
          <button style={{margin: "10px", borderRadius: "5px"}}>Q</button>
          <button style={{margin: "10px", borderRadius: "5px"}}>N</button>
        </div>
        </div>

        <div className="second-div" style={{display: "flex", justifyContent: "center"}}>
        <div
          className="box"
          style={{
            border: "2px solid black",
            borderRadius: "10px",
            width: "312px",
            height: "282px",
            margin: "20px",
          }}
        >
          Hi
        </div>
        <div style={{
            border: "2px solid black",
            borderRadius: "10px",
            width: "612px",
            height: "282px",
            margin: "20px",
          }}>
          Hihi
        </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
