import axios from 'axios';


class TheaterMovieService{
    addTheaterMovie(theatermovie) {
        return axios.post('http://localhost:8085/api/theaterMovie/add', theatermovie);
    }
    viewTheaterMovie() {
        return axios.get('http://localhost:8085/api/theaterMovie/getall');
    }
    deleteTheaterMovie(id){
        return axios.delete(`http://localhost:8085/api/theaterMovie/deleteTheaterMovie/${id}`);
    }
    findTheaterMovieById(id){
        return axios.get(`http://localhost:8085/api/theaterMovie/viewTheaterMovie/${id}`);
    }
    updateTheaterMovie(id){
        return axios.put('http://localhost:8085/api/theaterMovie/update', theatermovie);
    }
}
export default TheaterMovieService;