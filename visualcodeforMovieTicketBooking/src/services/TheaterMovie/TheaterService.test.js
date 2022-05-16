import axios from "axios";
import TheaterMovieService from "./TheaterMovieService";

let theatermovie = {

  id: 1,

  theaterId: 1,

  showId: 2,

  movieId: 8,

  costPerTicket: 150

};

test("Testing view all theater function.", async () => {

  axios.get("http://localhost:8085/api/theaterMovie/getall").then((resp) => {

    let addTheaterMovie = result.data;
    expect(addTheaterMovie).toBe(addTheaterMovie);

  });

});

test("Testing add theater movie function.", async () => {

    axios

    .post("http://localhost:8085/api/theaterMovie/add", theatermovie)

    .then((resp)=>{

    let addTheaterMovie = result.data;

    expect(addTheaterMovie).toBe(addTheaterMovie);

});
});

test("Testing find theater movie by movie id function.", async () => {
  axios.get("http://localhost:8085/api/theaterMovie/viewTheaterMovie/" + 1).then(resp =>{
    let theatermovie = result.data;
    expect(theatermovie.costPerTicket).toBe(150);
  });

  });
