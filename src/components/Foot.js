import React from "react";
import news1 from "./images/news1.jpeg";
import news2 from "./images/news2.jpeg";
import "./Foot.css"

const Foot = () => {
  return (
    <div>
      <div className=" footer">
        <div className="container">
        <div className="row">
          <div className="col-xl-3">
            <h1>AGRIA</h1>
            <p>
              Agria Corporation is an investment holding company,incorporated in
              Cayman Islands. We have deregistered our securities with the
              Securities.
            </p>
          </div>
          <div className="col-xl-3">
            <h2>EXPLORE</h2>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Products</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="col-xl-3">
            <h2>NEWS</h2>
            <div className="row">
              <div className="col-xl-4 ">
                <img src={news1} alt="attach" />
              </div>
              <div className="col-xl-8 ">
                <p>
                Indian missions to be roped in for branding, promotion of domestic millets
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 ">
                <img src={news2} alt="attach" />
              </div>
              <div className="col-xl-8 ">
                <p>
                  IFC Partners with Angola Agriculture Association to Boost
                  Agribusiness Sector in Angola
                </p>
              </div>
            </div>
          
          </div>
          <div className="col-xl-3">
            <h2>CONTACT US</h2>
            <ul>
              <li>+1 11434254</li>
              <li>contact@mail.com</li>
              <li>NewYork,USA</li>
              <li>Services</li>
             
            </ul>
          </div>

        </div>
        <br/>
        <br/>
        <br/>
          <hr/>
      </div>
      </div>
    </div>
  );
};

export default Foot;
