import React, { useRef } from "react";
import Button from "../ui/Button";
import classes from "./event-search.module.css";

const EventsSearch = ({onSearch}) => {
  const yearInputRef = useRef()
  const monthInputRef = useRef()

  

  const submitHandler=(e)=>{
    e.preventDefault()
    const year = yearInputRef.current.value
    const month = monthInputRef.current.value
    onSearch(year,month)

  }
  
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year"> Year</label>
          <select ref={yearInputRef} name="year" id="year">
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month">Month</label>
          <select ref={monthInputRef} name="month" id="month">
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">Decenber</option>
          </select>
        </div>
      </div>
      <Button type='submit'>Find Events</Button>
    </form>
  );
};

export default EventsSearch;
