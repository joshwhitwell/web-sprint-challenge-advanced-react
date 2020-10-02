// write your custom hook here to control your checkout form
import React, { useState } from 'react'

const initialValues = {
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  };

export const useForm = () => {
    //initialize state
    const [values, setValues] = useState(initialValues)
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    //change handler
    const changeHandler = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    //submit handler
    const handleSubmit = (e) => {
        e.preventDefault();
        setShowSuccessMessage(true);
    };

    //return custom hook
    return [values, showSuccessMessage, changeHandler, handleSubmit]
}