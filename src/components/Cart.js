import { Table, Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { Item } from "./Item";

export const Cart = (props) => {
  

 

  const [buttonShow, setButtonShow] = useState(false);
  let myStyle = {
    marginTop: "10px",
    marginBottom: "10px",
  };

  // show reset button logic
    useEffect(() => {
    if (!props.items.length) {
      setButtonShow(true);
    }
  }, [props.items]);

  


  return (
    <>
      <div className="container" style={myStyle}>
        {buttonShow === true || !props.totalCounts ? (
          ""
        ) : (
          <Button variant="secondary" onClick={props.reset}>
            Reset
          </Button>
        ) 
        }
      </div>
      <Table striped bordered hover>
        <tbody>
          {props.items.map((item) => {
            return (
              <Item item={item} key={item.id} onDelete={props.onDelete} inc={props.inc} desc={props.desc} />
            );
          })}
        </tbody>
      </Table>
      {/* <div className="container">
        Total Items: {props.totalCounts}
      </div> */}
    </>
  );
};
