import React, { useState } from "react";
import useForm from "../hooks/useForm";

const initialValue = {
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  state: "",
  zip: "",
};

// This form should be handled by a "useForm" custom hook
// Build out the logic needed for a form custom hook (see the useForm.js file)
// and replace the necessary stateful logic from CheckoutForm with the hook

const CheckoutForm = (props) => {
 
  const {
    handleChanges, 
    handleSubmit, 
    values} = useForm(initialValue)

    
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  return (
    <>
      <form onSubmit={e => handleSubmit(e)}>
        <h2>Checkout Form</h2>
        <label>
          First Name:
          <input
            className="firstName-text"
            name="firstName"
            value={values.firstName}
            onChange={e => handleChanges(e)}
            id= "firstName"
          />
        </label>
        <label>
          Last Name:
          <input
            className="lastName-text"
            name="lastName"
            value={values.lastName}
            onChange={e => handleChanges(e)}
            id="lastName"
          />
        </label>
        <label>
          Address:
          <input
            className="address-text"
            name="address"
            value={values.address}
            onChange={e => handleChanges(e)}
            id="address"
          />
        </label>
        <label>
          City:
          <input
          className="city-text"
           name="city" 
           value={values.city} 
           onChange={e => handleChanges(e)} 
           id="city"
           />
        </label>
        <label>
          State:
          <input
          className="state-text" 
          name="state" 
          value={values.state} 
          onChange={e => handleChanges(e)} 
          id="state"
          />
        </label>
        <label>
          Zip:
          <input 
          className="zip-text"
          name="zip" 
          value={values.zip} 
          onChange={e => handleChanges(e)} 
          id="zip"
          />
        </label>
        <button>Checkout</button>
      </form>

      {showSuccessMessage && (
        <div className="success-message" data-testid="successMessage">
          <p>
            You have ordered some plants! Woo-hoo! <span role="img">🎉</span>
          </p>
          <p>Your new green friends will be shipped to:</p>
          <br />
          <br />
          <p>
            {values.firstName} {values.lastName}
          </p>
          <p>{values.address}</p>
          <p>
            {values.city}, {values.state} {values.zip}
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
