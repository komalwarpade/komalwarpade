import axios from 'axios';
class bookingService{
    addBooking(booking) {
        return axios.post('http://localhost:8085/booking/add', booking);
    }
    viewBooking() {
        return axios.get('http://localhost:8085/booking/all');
    }
    deleteBooking(bookingId){
        return axios.delete(`http://localhost:8085/booking/delete/`);
    }
    
}
export default bookingService;