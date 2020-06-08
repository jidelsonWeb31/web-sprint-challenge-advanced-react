// write your custom hook here to control your checkout form
import React, { useState } from "react";
import useLocalStorage from "./localStorage";

//  const useForm = initialValue => {
//     const [value, setValue] = useState(initialValue);
//     const handleChanges = updatedValue => {
//       setValue(updatedValue);
//     };
//     return [value, setValue, handleChanges];
//   };


const useForm = (initialValue) => {
   
    // const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [values, setValues] = useState(initialValue);
    
   
    const handleChanges = e => {
        const {name, value} = e.target;
      setValues({
        ...values,
        [name]: value
      });
    };
    
    
     
  
  
    return [
        values, 
        handleChanges
    ]
    
  };
  
  export default useForm;