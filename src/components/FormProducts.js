import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import capage from "./vegitables/capage.webp"
import potato from "./vegitables/potato.jpg"
import bean from "./vegitables/bean.jpg"
import beans from "./vegitables/beans.jpg"
import ladiesfin from "./vegitables/ladies.jpg"
import onion from "./vegitables/onion.jpg"
import tomato from "./vegitables/tomato.jpg"
import corn from "./vegitables/corn.png";
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import "./FormProducts.css"
import TextField from '@mui/material/TextField';
import Rating from '@mui/material/Rating';



const FormProducts = () => {
  const [value, setValue] = useState(4);
  const [setval,setvalue] = useState(1);
  const [setmsg,setmessage] = useState();

  const [show, setShow] = useState(false);
  const navigate = useNavigate(); 

  const handleClose = () => setShow(false);
  const handleClosed = () => {
    setShow(false);
    navigate("order")
  }
  // const handleShow = () => setShow(true);


  const getkgs= ()=>{
    console.log("done");
  }

  const handelbuy= (val)=>{
    
    setShow(true);

    if (val==="kilo") {

      setvalue(val.target.name)
      
    }
    else{
      setmessage(val.target.name)

    }
  }

  console.log(setval);
  return (
   <div className='ind'>
    <div className='container'>
      <div className='row how_we'>
        <div className='col-xl-4 col-md-4 col-sm-12' >
          <h2>HOW WE WORK </h2>
          <h1>We Work from <br/> Farm to table</h1>
          <Button variant='success'> Contact us</Button>

        </div>
        <div className="col-xl-4 col-md-4 col-sm-12">
          <div>
            <h4>Use of Our Natural Resourses</h4>
            <p>Natural resources are used to make food, fuel and raw materials for the production of goods. </p>
          </div>
          <div>
            <h4>Climate Smart Agriculture</h4>
            <p>Natural resources are used to make food, fuel and raw materials for the production of goods.</p>
          </div>
          <div>
            <h4>Supply Chain</h4>
            <p>Natural resources are used to make food, fuel and raw materials for the production of goods.</p>
          </div>
        </div>
        <div className="col-xl-4 col-md-4 col-sm-12">
        <div>
            <h4>Future of Work</h4>
            <p>Future of work is a projection of how work, workers and the workplace will evolve in the years ahead.</p>
          </div>
          <div>
            <h4>Statergy Development</h4>
            <p>Most promising and deciding how resources will be allocated across the organisation to achieve objectives.</p>
          </div>
          <div>
            <h4>Good Jobs</h4>
            <p>Future of work is a projection of how work, workers and the workplace will evolve in the years ahead.</p>
          </div>
        </div>
      </div>
    </div>

    <div className='container'>
      <div className='row'>
        <div className='col-xl-12'>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enter Details</Modal.Title>
          
        </Modal.Header>
        <Modal.Body>

        <TextField id="standard-basic"  type={"number"} value={setval} onChange={getkgs}  label="Kgs" variant="standard" />
        <br/>
         
          <TextField id="standard-basic" type={"textarea"} value={setmsg} onChange={getkgs}  label="If any messages.." variant="standard" />
         
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

     <div className='container form_produucts'>
      <h1>Form Products</h1>
      <p >Vegetables are grown from seed whereas others are started in greenhouses after which seedlings are transplanted. </p>
      <div className='row'>
        <div className='col-xl-3 col-sm-12 products ' >
        <Card >
      <Card.Img variant="top" src={capage} />
      <Card.Body className='txtalign'>
        <Card.Title>Green Capage</Card.Title>
        <Card.Text>
        <h6>  Rs.30/Kg</h6>
        
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
        </Card.Text>
        <Button variant="primary" onClick={handelbuy}>Buy</Button>
      </Card.Body>
    </Card>

        </div>
        <div className='col-xl-3 col-sm-12 products'>
        <Card >
      <Card.Img variant="top" src={bean}/>
      <Card.Body className='txtalign'>
        <Card.Title>Beans</Card.Title>
        <Card.Text>
        <h6>  Rs.40/500g</h6>
        <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
        </Card.Text>
        <Button variant="primary" onClick={handelbuy}>Buy</Button>
      </Card.Body>
    </Card>

        </div>
        <div className='col-xl-3 col-sm-12 products'>
        <Card >
      <Card.Img variant="top" src={beans} />
      <Card.Body className='txtalign'>
        <Card.Title>Beans</Card.Title>
        <Card.Text>
        <h6>  Rs.40/250g</h6>
        <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
        </Card.Text>
         <Button variant="primary" onClick={handelbuy}>Buy</Button>
      </Card.Body>
    </Card>

        </div>
        <div className='col-xl-3 col-sm-12 products'>
        <Card >
      <Card.Img variant="top" src={ladiesfin}/>
      <Card.Body className='txtalign'>
        <Card.Title>Ladies Finger</Card.Title>
        <Card.Text>
        <h6>  Rs.40/500g</h6>
        <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
        </Card.Text>
         <Button variant="primary" onClick={handelbuy}>Buy</Button>
      </Card.Body>
    </Card>

        </div>
        <div className='col-xl-3 col-sm-12 products'>
        <Card >
      <Card.Img variant="top" src={potato}  />
      <Card.Body className='txtalign'>
        <Card.Title>Potato</Card.Title>
        <Card.Text>
        <h6>  Rs.40/Kg</h6>
        <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
        </Card.Text>
         <Button variant="primary" onClick={handelbuy}>Buy</Button>
      </Card.Body>
    </Card>

        </div>
        <div className='col-xl-3 col-sm-12 products'>
        <Card >
      <Card.Img variant="top" src={onion}/>
      <Card.Body className='txtalign'>
        <Card.Title>Onion</Card.Title>
        <Card.Text>
        <h6>  Rs.60/Kg</h6>
        <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
        </Card.Text>
         <Button variant="primary" onClick={handelbuy}>Buy</Button>
      </Card.Body>
    </Card>

        </div>
        <div className='col-xl-3 col-sm-12 products'>
        <Card >
      <Card.Img variant="top" src={corn} />
      <Card.Body className='txtalign'>
        <Card.Title>Baby Corn</Card.Title>
        <Card.Text>
        <h6>  Rs.35/Kg</h6>
        <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
        </Card.Text>
         <Button variant="primary" onClick={handelbuy}>Buy</Button>
      </Card.Body>
    </Card>

        </div>
        <div className='col-xl-3 col-sm-12 products'>
        <Card >
      <Card.Img variant="top" src={tomato}/>
      <Card.Body className='txtalign'>
        <Card.Title>Tomato</Card.Title>
        <Card.Text>
        <h6>  Rs.40/Kg</h6>
        <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
        </Card.Text>
         <Button variant="primary" onClick={handelbuy}  >Buy</Button>
      </Card.Body>
    </Card>

        </div>

      </div>

      
      
    </div>
   </div>
  )
}

export default FormProducts