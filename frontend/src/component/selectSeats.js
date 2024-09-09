import React, { useContext, useState } from "react";
import '../css/selectSeats.css'
import InputSeats from "./seatsInput";
import { seats } from "../data";
import BsContext from "../context/bookShowContext";

const SelectSeats = ()=>{
    const context = useContext(BsContext);
    const {noOfSeat , changeNoOfSeats} = context

    return(
        <div className="ss_wrapper">
            <h1 className="ss_heading"> Select Seats:-</h1>
            <div className="ss_main_container"> 

                {seats.map((el,index)=>{
                    return(
                        <InputSeats key={index} text={el} noOfSeat={noOfSeat} changeNoOfSeats={changeNoOfSeats}/>
                        
                    )
                })}


            </div>

        </div>
    )
}

export default SelectSeats