import axios from "axios";
import TheaterService from "./TheaterService";

let theater = {

  theaterId: 1,

  theaterName: "PVR",

  city: "Mumbai",

  address: "Lane NL-4, Sector-5 Seawoods",

  phone: "9892535472"

};

test("Testing view all theater function.", async () => {

  axios.get("http://localhost:8085/api/theater/getall").then((resp) => {

    let addTheater = result.data;
    expect(addTheater).toBe(addTheater);

  });

});

test("Testing add theater function.", async () => {

    axios

    .post("http://localhost:8085/api/theater/add", theater)

    .then((resp)=>{

    let addTheater = result.data;

    expect(addTheater).toBe(addTheater);

});
});

test("Testing find theater by id function.", async () => {
  axios.get("http://localhost:8085/api/theater/viewTheater/" + 1).then(resp =>{
    let theater = result.data;
    expect(theater.city).toBe("Mumbai");
  });

  });

