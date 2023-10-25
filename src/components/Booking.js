import React from "react";
import BookinfForm from "./BookingForm";


const Booking = (props) =>{

    return(

        <BookinfForm availableTimes={props.availableTimes} dispatch ={props.dispatch} submitForm ={props.submitForm}/>
    )
}

export default Booking;