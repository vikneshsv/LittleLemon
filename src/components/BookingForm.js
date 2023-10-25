import React from "react";
import { useState } from "react";

const BookingForm = (props)=>{

    const[occasion,setOccasion] = useState("");
    const[guests,setGuests] = useState("");
    const[date,setDate] = useState("");
    const[times,setTimes] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault();
        props.submitForm(e);
    }

    const handleChange = (e) =>{
        setDate(e);
        props.dispatch(e);
    }


    return(
        <header>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset className="formField">
                        <div>
                            <label htmlFor="book-date">Choose Date:</label>
                            <input id="book-date" value={date} onChange={(e)=>{handleChange(e.target.value)}}  type="date" required/>
                        </div>
                        <div>
                        <label htmlFor="book-time">Choose Time:</label>
                        <select id="book-time" value={times} onChange={(e)=>{setTimes(e.target.value)}} required>
                            <option value=" ">choose a time</option>
                            {props.availableTimes.availableTimes.map(availableTimes => {return  <option key={availableTimes}>{availableTimes}</option>})}
                        </select>
                        </div>
                        <div>
                        <label htmlFor="book-guests">Number of Guests:</label>
                        <input id="book-guests" value={guests} onChange={(e) =>{setGuests(e.target.value)}} min={1} max={10} placeholder="0" type="number"required/>
                        </div>
                        <div>
                        <label htmlFor="book-occasion">Occasion:</label>
                        <select id="book-occasion" key={occasion} value={occasion} onChange={(e)=>{setOccasion(e.target.value)}} required>
                            <option value="">Select an option</option>
                            <option>Birthday</option>
                            <option>Anniversary</option>
                        </select>
                        </div>
                        <div >
                            <input  id="btn" aria-label="On click" type="submit" value={"Reserve a table"} required />
                        </div>
                    </fieldset>
                </form>
            </section>
        </header>

    );

};
export default BookingForm;