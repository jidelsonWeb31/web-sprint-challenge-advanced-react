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
    // const [values, setValues] = useLocalStorage(key, initialValue);
   const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [values, setValues] = useState(initialValue);

    
    const handleChanges = e => {
        const {name, value} = e.target;
      setValues({
        ...values,
        [name]: value
      });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setShowSuccessMessage(true);
      };
     
  
  
    return {
        values, 
        handleChanges,
        handleSubmit 
    }
  };
  
  export default useForm;