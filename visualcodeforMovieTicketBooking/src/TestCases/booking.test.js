import axios from "axios";



let Booking = 
//     "customerId": 0,
//   "noOfTickets": 0,
//   "showDate": "2022-05-15",
//   "theaterId": 0,
//   "movieId": 0,
//   "showId": 0
// }
{
customerId: 1,

noOfTickets: 2,

  showDate: "2022-05-15",

  theaterId: 2,

  movieId: 3,
  
  showId:4,

};



// test("Testing create booking", async () => {

//   axios

//     .post("http://localhost:8085/booking/add", Booking)

//     .then((resp) => {

//       let booking = result.data;

//       expect(booking).toBe(booking);

//     });

// });



test("Testing fetch all booking", async () => {

  axios

    .get("http://localhost:8085/booking/all")

    .then((resp) => {

      let booking = result.data;

      expect(booking).toBe(booking);

    });

});



test("Testing Delete booking", async () => {

  axios

    .get("http://localhost:8085/booking/delete/" + 2)

    .then((resp) => {

      let booking = result.data;

      expect(booking.bookingId).toBe(2);

    });

});