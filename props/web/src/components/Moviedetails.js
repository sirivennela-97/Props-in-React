import React from "react";
//import Shop from "./components/Shop";
function Moviedetails(props) {
  return (
    <a href={props.trailer} target="_blank">
      <div>
        {/* <Shop /> */}
        <div className="list">
          <img className="poster" src={props.poster} alt="pic"></img>

          <p>
            <b>Name:</b>
            {props.moviename}
          </p>
          <p>
            <b>Director:</b>
            {props.Director}
          </p>
          <p>
            <b>Hero:</b>
            {props.Hero}
          </p>
        </div>
      </div>
    </a>
  );
}

export default Moviedetails;
