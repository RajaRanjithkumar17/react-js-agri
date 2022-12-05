import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import "./FormProducts.css";
import { useSearchParams } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Rating from "@mui/material/Rating";
import { data } from "./Products.js";
import { useNavigate, createSearchParams } from "react-router-dom";
import { stateContext } from "../context/context.js";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const FormProducts = () => {
  const [value, setValue] = useState(4);
  const [setval, setvalue] = useState([]);
  const [setmsg, setmessage] = useState([]);
  const { state, dispatch } = React.useContext(stateContext);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  let id = searchParams.get("id");

  const handleClose = () => setShow(false);
  const handleClosed = () => {
    setShow(false);
    if (id) {
      const res = {
        id: parseInt(id),
        setval,
        setmsg,
      };
      dispatch({ type: "addOrder", payload: res });
    }

    // navigate("order");
  };

  const getkgs = (val) => {
    console.log("done");
    if (val.target.name === "num") {
      setvalue(val.target.value);
    } else {
      setmessage(val.target.value);
    }
  };

  const handelbuy = () => {
    console.log(state);
    setShow(true);

    if (state.islogin === undefined) {
      navigate("loginform");
    } else {
      navigate("order"
      //   {
      //   pathname: "/order",
      //   search: createSearchParams({
      //     id: 1,
      //   }).toString(),
      // }
      );
    }

    dispatch({ type: "getOrder", payload: data });
  };



  const handelselect = (id) => {
console.log(state);
  
    dispatch({ type: "isselected", payload: id });
  };



  console.log(setval, setmsg);
  return (
    <div className="ind">
      <div className="container">
        <div className="row how_we">
          <div className="col-xl-4 col-md-4 col-sm-12">
            <h2>HOW WE WORK </h2>
            <h1>
              We Work from <br /> Farm to table
            </h1>
            <Button variant="success"> Contact us</Button>
          </div>
          <div className="col-xl-4 col-md-4 col-sm-12">
            <div>
              <h4>Use of Our Natural Resourses</h4>
              <p>
                Natural resources are used to make food, fuel and raw materials
                for the production of goods.{" "}
              </p>
            </div>
            <div>
              <h4>Climate Smart Agriculture</h4>
              <p>
                Natural resources are used to make food, fuel and raw materials
                for the production of goods.
              </p>
            </div>
            <div>
              <h4>Supply Chain</h4>
              <p>
                Natural resources are used to make food, fuel and raw materials
                for the production of goods.
              </p>
            </div>
          </div>
          <div className="col-xl-4 col-md-4 col-sm-12">
            <div>
              <h4>Future of Work</h4>
              <p>
                Future of work is a projection of how work, workers and the
                workplace will evolve in the years ahead.
              </p>
            </div>
            <div>
              <h4>Statergy Development</h4>
              <p>
                Most promising and deciding how resources will be allocated
                across the organisation to achieve objectives.
              </p>
            </div>
            <div>
              <h4>Good Jobs</h4>
              <p>
                Future of work is a projection of how work, workers and the
                workplace will evolve in the years ahead.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Enter Details</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <TextField
                  id="standard-basic"
                  type={"number"}
                  value={setval}
                  onChange={getkgs}
                  label="Kgs"
                  variant="standard"
                  name="num"
                />
                <br />

                <TextField
                  id="standard-basic"
                  type={"textarea"}
                  value={setmsg}
                  onChange={getkgs}
                  label="If any messages.."
                  variant="standard"
                  name="msg"
                />
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Not Now
                </Button>
                <Button variant="primary" onClick={handleClosed}>
                  Place Order
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>

      <div className="container form_produucts">
        <h1>Form Products</h1>
        <p>
          Vegetables are grown from seed whereas others are started in
          greenhouses after which seedlings are transplanted.{" "}
        </p>

        <div className="row">
          {data.map((item) => {
            return (
              <div className="col-xl-3 col-sm-12 products ">
                <Card>
                  <Card.Img variant="top" src={item.img} />
                  <Card.Body className="txtalign">
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                      <h6> {item.price}</h6>

                      <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                          setValue(newValue);
                        }}
                      />
                    </Card.Text>

                    <FormGroup>
                      <FormControlLabel
                        label="Select"
                        control={
                          <Checkbox
                            checked={item.selected}
                            onChange={() => handelselect(item.id)}
                          />
                        }
                      />
                   
                    </FormGroup>
                  </Card.Body>
                </Card>
              </div>
            );
          })}

          <Button variant="primary" onClick={() => handelbuy()}>
            Buy
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FormProducts;
