import { useState, useEffect } from 'react';
import Booking from '../components/Cars/Booking';
const BookingPage = () => {
  const [booking, setBooking] = useState([]);
const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    const fetchCars = async () => {
      setIsLoading(true)
      const response = await fetch(
        'https://motivapi-default-rtdb.firebaseio.com/cars.json'
      );
      
      const responseData = await response.json();

      const loadedCars = [];

      for (const key in responseData) {
        loadedCars.push({
          id: key,
          title: responseData[key].title,
          type: responseData[key].type,
          Seating: responseData[key].Seating,
          booking: responseData[key].booking,
          gearStick: responseData[key].gearStick,
          price: responseData[key].price,
          photo: responseData[key].photo,
        });
      }
      setBooking(loadedCars);
      setIsLoading(false)
    };
    fetchCars();
  }, []);
  

  return <Booking dataCars={booking} loading={isLoading} />;
};

export default BookingPage;
