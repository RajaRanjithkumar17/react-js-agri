import React, { useContext, useState } from 'react'
import { stateContext } from '../context/context';
import { useSearchParams } from "react-router-dom";
import Card from "react-bootstrap/Card";

const Order = () => {

  const [searchParams] = useSearchParams();
  let id = searchParams.get("id");
  const [getOrders,setOrder] = useState([])
  const { state, dispatch } = useContext (stateContext );
  console.log(state, Number(id));

  const result = state.tasks.filter((item)=>{

    if(item.selected== true){
      return item;
    }
  })

  console.log(result);






  return (
    <div className='container'>
      <div className='row'>
      {result.map((item,index) => {
            return (
              <div className="col-xl-3 col-sm-12 products " key={index}>
                <Card>
                  <Card.Img variant="top" src={item.img} />
                  <Card.Body className="txtalign">
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                      <h6> {item.price}</h6>

                    </Card.Text>
                    {/* <Button variant="primary" onClick={() => handelbuy(item.id)}>
                      Buy
                    </Button> */}
                  </Card.Body>
                </Card>
              </div>
            );
          })}
      </div>
    </div>
  )
}

export default Order