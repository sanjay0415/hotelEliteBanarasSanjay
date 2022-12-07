import React from "react";
import { useState } from "react";
import axios from "axios";
import "./BookingSub2.css";

function BookingSub2() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhonenumber] = useState("");
  const [mail, setMail] = useState("");
  const [address, setAddress] = useState("");
  const [order, setOrder] = useState("");

  const addOrder = () => {
    axios
      .post("http://localhost:3003/create", {
        name: name, //this 3 names should be same as other 3 names in backend part
        phoneNumber: phoneNumber,
        mail: mail,
        address: address,
        order: order,
      })
      .then(() => {
        console.log("success buddy");

        alert(`Dear ${name} thanks for your feedback...!`);
      });
  };
  
  const confirm =()=>{
    alert("Online Payment have to be done for CONFIRMATION of your order");
  }

  return (
    <>
      <div className="mainBookingController">
        <div className="booking">
          <form id="orderForm">
            <div className="inputBoxOrder" id="inp1Order">
              <input
                type="text"
                required="required"
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
              <span>Name</span>
            </div>

            <div className="inputBoxOrder" id="inp2Order">
              <input
                type="text"
                required="required"
                onChange={(event) => {
                  setPhonenumber(event.target.value);
                }}
              />
              <span>Phone Number</span>
            </div>

            <div className="inputBoxOrder" id="inp3Order">
              <input
                type="text"
                required="required"
                onChange={(event) => {
                  setMail(event.target.value);
                }}
              />
              <span>Mail ID</span>
            </div>

            <div className="inputBoxOrder" id="inp4Order">
              <input
                type="text"
                required="required"
                onChange={(event) => {
                  setAddress(event.target.value);
                }}
              />
              <span>Address</span>
            </div>

            <p>* Enter as - [QUANTITY * FOOD ITEM]</p>
            <div className="inputBoxOrder" id="inp5Order">
              <textarea
                cols="30"
                rows="10"
                required="required"
                onChange={(event) => {
                  setOrder(event.target.value);
                }}
              ></textarea>
              <span>Order Items</span>
            </div>
          </form>
        </div>

        <div id="oderButton">
          <a href="/" onClick={confirm}>
            ORDER NOW
          </a>
        </div>
      </div>
    </>
  );
}

export default BookingSub2;
