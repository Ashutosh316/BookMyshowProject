import React, { useContext } from "react";
import { slots } from "../data";
import RadioComponent from "./radioComponent";
import '../css/timeSchedule.css';
import BsContext from "../context/bookShowContext";


const   TimeSchedule=()=>{
    const context = useContext(BsContext);


    
  // Getting time and change changeTime components from the context.
    const {time , changeTime} =  context;

    const handleChangeTime = (value)=>{
        changeTime(value);

        //setting slot in localstorage
    window.localStorage.setItem("slot", value);
    };

    return(
        <>
        <div className="slot_container">

            <h1 className="TS_heading">Select a Schedule :-</h1>
            <div className="TS_Main_container">
                {slots.map((el , index)=>{

                    return(
                        <RadioComponent 
                        text={el}
                        key={index}
                        data={time}
                        changeSelection={handleChangeTime}
                        
                        />
                    )

                   
                })}

            </div>

        </div>
        </>
    )
}


export default TimeSchedule