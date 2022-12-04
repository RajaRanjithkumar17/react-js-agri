import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import milk from "./dairy/milk.png";
import curd from "./dairy/curd.png";
import butter from "./dairy/butter.jpg";
import ghee from "./dairy/ghee.jpg";
import { useState } from "react";
import Rating from "@mui/material/Rating";
import drink from "./images/milkdrink.png";
import cowcare from "./dairy/cowcare.png";
import cow from "./dairy/cow.png";
import del from "./dairy/delimg.jpg";

const Offers = () => {
  const [value, setValue] = useState(4);
  return (
    <div>
      <div className="container form_prouct">
        <h1>Dairy Products </h1>
        <p>The objective of good dairy farming practice is the on-farm production of safe, quality milk from healthy animals under generally acceptable conditions.</p>
        <div className="row how_we  ">
          <div className="col-xl-4 col-md-4 col-sm-12">
            <img src={drink} alt="milk d" />
          </div>
          <div className="col-xl-4 col-md-4 col-sm-12">
            <h2>Form Services</h2>
            <h4>Products From Our Family Forms</h4>
            <ul>
              <li>Support local farmers. </li>
              <li>Enjoy the food of the season</li>
              <li>Farms create sharing communities. </li>
            </ul>
            <Button variant="success"> Learn More</Button>
          </div>
          <div className="col-xl-4 col-md-4 col-sm-12">
            <img src={cowcare} alt="care" />
            <h4 className="paad">Excellent Cow Care Services</h4>
            <Button variant="success" className="btns"> Learn More</Button>
          </div>
        </div>
      </div>

      <div className="container form_produucts">
       
        <div className="row">
          <div className="col-xl-3 col-md-6 col-sm-12">
            <Card>
              <Card.Img variant="top" src={milk} />
              <Card.Body className="txtalign">
                <Card.Title>Milk</Card.Title>
                <Card.Text>
                  <h6> Rs.40/lit</h6>
                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                </Card.Text>
                <Button variant="primary">Buy</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-xl-3 col-md-6 col-sm-12">
            <Card>
              <Card.Img variant="top" src={curd} />
              <Card.Body className="txtalign">
                <Card.Title>Curd</Card.Title>
                <Card.Text>
                  <h6> Rs.55/lit</h6>
                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                </Card.Text>
                <Button variant="primary">Buy</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-xl-3 col-md-6 col-sm-12">
            <Card>
              <Card.Img variant="top" src={butter} />
              <Card.Body className="txtalign">
                <Card.Title>Butter</Card.Title>
                <Card.Text>
                  <h6> Rs.40/250g</h6>
                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                </Card.Text>
                <Button variant="primary">Buy</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-xl-3 col-md-6 col-sm-12">
            <Card>
              <Card.Img variant="top" src={ghee} />
              <Card.Body className="txtalign">
                <Card.Title>Ghee</Card.Title>
                <Card.Text>
                  <h6> Rs.40/250ml</h6>
                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                </Card.Text>
                <Button variant="primary">Buy</Button>
              </Card.Body>
            </Card>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-4 col-md-4 col-sm-12 ">
            <div className="fresh_prd">
              <h6>KEEP IT FRESH!</h6>
              <h1>Fresh Dairy Goodness</h1>
            </div>
          </div>
          <div className="col-xl-4 col-md-4 col-sm-12">
            <div className="fresh_prd">
              <h3>100% Organic</h3>
              <p>
                This resulted in the price of organic milk reducing, many
                farmers were not earning as much profit conventional milk
                production would give them.
              </p>
            </div>
          </div>
          <div className="col-xl-4 col-md-4 col-sm-12">
            <div className="fresh_prd">
              <h3>High quality</h3>
              <p>
                This resulted in the price of organic milk reducing, many
                farmers were not earning as much profit conventional milk
                production would give them.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container testi">
        <div className="row">
          <div className="col-xl-6 col-md-6 col-sm-12">
            <h6>TESTIMONIALS</h6>
            <h2> What Folks Are Saying</h2>
            <h5>
           
              <strong>Fresh milk from the Form</strong> <br />
              Fresh milk is what most people regularly consume on a daily basis.
              Contrary to popular belief, fresh milk does not refer to a single
              type of milk, but to a variety of milk mogenised milk. Low-fat
              milk.
            </h5>
          </div>
          <div className="col-xl-6 col-md-6 col-sm-12">
            <img src={cow} />
          </div>
        </div>
      </div>

      <div className="container testi">
      <h6>SERVICES</h6>
        <div className="row">
          <div className="col-xl-5 col-md-5 col-sm-12 servi">
            <div>
              <h5>Pick Your Box Style</h5>
              <p>Delivery Box. Inspirational designs, illustrations, and graphic elements from the world's best designers.</p>
            </div>
            <div>
              <h5>Customise Your Produce</h5>
              <p>Product customization  enabling customers to personalize a product according to their needs and preferences.</p>
            </div>
            <div>
              <h5>We Deliver and Your Enjoy</h5>
              <p>The fastest ordering experience is right at your fingertips! Welcome to WeDeliver Local Restaurant Delivery.</p>
            </div>
          </div>
          <div className="col-xl-7 col-md-7 col-sm-12 delimg">
       
            <img src={del}/>
          </div>
         
        </div>
      </div>

      <div className="container testii">
        <h6>CONTACT US</h6>
        <div className="row">
          <div className="col-xl-4 col-sm-12 col-md-4 ">
        <h3>Get in touch</h3>
        <p>
          NewYork, USA
        </p>
        <p>+1 11443145</p>
        <p>contact@mail.com</p>
            
          </div>
          <div className="col-xl-4 col-sm-12 col-md-4">
            <h3>Talk to Sale</h3>
            <p> Be natural and do not use scripts.</p>
            <p> Ask about the clients' well-being.</p>
            <p>Use names while talking with a client.</p>
           
          </div>
          <div className="col-xl-4 col-sm-12 col-md-4">
          <h3>Contact Customer Support</h3>
          <p>Offering amazing customer service is important if you want to retain customers and grow your business.</p>

          <Button variant="success">Contact Support</Button>
            
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Offers;
