import axios from 'axios';


class TheaterService{
    addTheater(theater) {
        return axios.post('http://localhost:8085/api/theater/add', theater);
    }
    viewTheater() {
        return axios.get('http://localhost:8085/api/theater/getall');
    }
    deleteTheater(id){
        return axios.delete(`http://localhost:8085/api/theater/deleteTheater/${id}`);
    }
    findTheaterById(id){
        return axios.get(`http://localhost:8085/api/theater/viewTheater/${id}`);
    }
    updateTheater(id){
        return axios.put('http://localhost:8085/api/theater/update', theater);
    }
}
export default TheaterService;