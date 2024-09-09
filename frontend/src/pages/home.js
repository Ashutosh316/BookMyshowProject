import {useContext} from "react";
import SelectMovie from "../component/selectMovie";
import LastBookingDetails from "../component/lastBookingDetails";
import TimeSchedule from "../component/timeSchedule";
import SelectSeats from "../component/selectSeats";
import BsContext from "../context/bookShowContext";
import '../css/home.css'

const Home = ()=>{

    const context = useContext(BsContext);
  const {
    movie,
    time,
    noOfSeat,
    handlePostBooking,
    setErrorPopup,
    setErrorMessage,
  } = context;

    const handleBookNow = () => {

        if (!movie) {
            setErrorPopup(true);
            setErrorMessage("Please select  a movie!");
          }else {
            //validation successfull
            handlePostBooking();
          }
        

    }

    return(
        <div className="container">
            <div className="wrapper">
        <div className="select-movie-component">
            <SelectMovie/>
        </div>
        <div className="last_booking_details_container">
            <LastBookingDetails/>

        </div>
        </div>
        <div className="time_seats_container">
            <TimeSchedule/>
            
            <SelectSeats/>
            <button className="BN-btn" onClick={()=>{handleBookNow();}}>Book Now</button>

        </div>
        
        </div>
    )
        
    
}

export default Home