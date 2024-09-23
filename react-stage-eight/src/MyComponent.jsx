// onChange - event handler used primarily with form elements (Ex. <input> <textarea> <select> <radio>)
// Triggers a function everytime the value of the input changes.

import React, {useState} from "react";

function MyComponent(){

  const [name,setName] = useState("User"); // initial state is User
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("Delivery"); //Initial state is delivery

  function handleShippingChange(e){
    setShipping(e.target.value) //function to use setShipping to change the value of shipping variable
  }

  function handlePaymentChange(e){
    setPayment(e.target.value)
  }

  function handleCommentChange(e){
    setComment(e.target.value);
  }

  function handleQuantityChange(e){
    setQuantity(e.target.value);
  }

  function handleNameChange(e){
    setName(e.target.value);
  }

  return (
    <div>
      <input value = {name} onChange={handleNameChange}/>
      <p>Hello, {name}</p>
      <input value = {quantity} onChange = {handleQuantityChange} type="number"/>
      <p>Quantity: {quantity}</p>
      <textarea value={comment} onChange={handleCommentChange} placeholder="Ex. delivery instructions" />
      <p>Comment: {comment}</p>
      <select value={payment} onChange={handlePaymentChange}>
        <option value="">Select an option</option>
        <option value="Visa">Visa</option>
        <option value="Mastercard">Mastercard</option>
        <option value="Giftcard">Giftcard</option>
      </select>
      <p>Payment: {payment}</p>
      <label>
        <input type="radio" value="Pick up" checked={shipping === "Pick Up"} onChange={handleShippingChange}/>
        Pick up
      </label>
      <label>
        <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleShippingChange}/>
        Delivery
      </label>
      <p>Shipping: {shipping}</p>
    </div>
  );
}
export default MyComponent