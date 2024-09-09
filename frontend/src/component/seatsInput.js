import React from "react";
import '../css/seatInput.css'

const InputSeats = ({text , noOfSeat , changeNoOfSeats})=>{
    //changing the seats according to user input
  const change_seats = (e) => {
    changeNoOfSeats({ ...noOfSeat, [e.target.name]: Number(e.target.value) });

    //setting seats in localsorage
    window.localStorage.setItem(
      "seats",
      JSON.stringify({
        ...noOfSeat,
        [e.target.name]: Number(e.target.value),
      })
    );
  };
    return(
        <div className="form-check-label seats">
            <span className="text">{text}</span>
            <input type="number" className="seats-input" placeholder="0" min="0" max="30" name={text} onChange={change_seats} value={noOfSeat[text]}/>
            
        </div>
    )
}

export default InputSeats