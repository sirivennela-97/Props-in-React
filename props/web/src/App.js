import "./App.css";
import Moviedetails from "./components/Moviedetails";
import Shop from "./components/Shop";
function App() {
  return (
    <div>
      <Shop />
      <div className="details">
        <Moviedetails
          moviename="pushpa"
          Director="sukumar"
          Hero="AlluArjun"
          poster="https://i0.wp.com/www.socialnews.xyz/wp-content/uploads/2020/04/08/Stylish-Star-Allu-Arjun-First-Look-Posters-as-Pushpa-Raj-From-Pushpa-Movie-in-5-languages-.jpg?fit=1365%2C2048&quality=80&zoom=1&ssl=1"
          trailer="https://www.youtube.com/watch?v=Q1NKMPhP8PY"
        ></Moviedetails>
        <Moviedetails
          moviename="vikram"
          Director="Lokesh Kanagaraj"
          Hero="kamal Hassan"
          poster="https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg"
          trailer="https://www.youtube.com/watch?v=WC5X3i0B4cg"
        ></Moviedetails>
        <Moviedetails
          moviename="Mrs.Shetty Mr.Polishetty"
          Director="Mahesh Babu Pachigolla"
          Hero="Naveen polishetty"
          poster="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTXqiFJxCEl77f-WcvjtWkxXN3zBikNs_E-9GXB2WZhYmcLIcPS"
          trailer="https://www.youtube.com/watch?v=Q1NKMPhP8PY"
        ></Moviedetails>

        <Moviedetails
          moviename="Mission: Impossible Dead Reckoning Part One "
          Director="Christopher McQuarrie"
          Hero="Tom Cruise,"
          poster="https://dx35vtwkllhj9.cloudfront.net/paramountpictures/mission-impossible-7/images/regions/us/header.jpg"
          trailer="https://www.youtube.com/watch?v=Q1NKMPhP8PY"
        ></Moviedetails>

        <Moviedetails
          moviename="jailer"
          Director="Nelson Dilipkumar"
          Hero="Rajinikanth"
          poster="https://www.hindustantimes.com/ht-img/img/2023/08/19/1600x900/jailer_box_office_tamil_nadu_1692416829885_1692416841022.jpg"
          trailer="https://www.youtube.com/watch?v=Q1NKMPhP8PY"
        ></Moviedetails>
        <Moviedetails
          moviename="kushi"
          Director="Shiva Nirvana"
          Hero="Vijaydeverkonda"
          poster="https://timesofindia.indiatimes.com/photo/91608543.cms"
          trailer="https://www.youtube.com/watch?v=Q1NKMPhP8PY"
        ></Moviedetails>
        <Moviedetails
          moviename="BRO"
          Director="Samuthirakani"
          Hero="pavankalyan"
          poster="https://cdn.123telugu.com/content/wp-content/uploads/2023/05/BRO-7.jpg"
          trailer="https://www.youtube.com/watch?v=Q1NKMPhP8PY"
        ></Moviedetails>
        <Moviedetails
          moviename="Bholashakar"
          Director="Meher Ramesh"
          Hero="chiranjeevi"
          poster="https://images.news18.com/telugu/uploads/2023/05/Megastar-Chiranjeevi-Bhola-Shankar-News18.jpg"
          trailer="https://www.youtube.com/watch?v=Q1NKMPhP8PY"
        ></Moviedetails>
      </div>
    </div>
  );
}

export default App;
