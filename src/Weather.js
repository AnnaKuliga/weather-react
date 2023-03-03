import "./Weather.css";
import Footer from "./Footer";
import Search from "./Search";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="weather-app-wrapper">
        <div className="weather-app-body">
          <Search />

          <div className="overview">
            <div className="row">
              <div className="col-5">
                <div className="cityName">
                  <h1 id="city">Oslo</h1>
                  <div id="country">Norway</div>
                </div>
                <div className="d-flex weather-temperature">
                  <span className="current-temp" id="temperature">
                    -3
                  </span>
                  <span className="current-temp-degree">°</span>
                </div>
              </div>
              <div className="col-3" class="main-icon">
                <div className="clearfix weather-temperature">
                  <img
                    src="http://openweathermap.org/img/wn/10d@2x.png"
                    width="80"
                    id="icon"
                    alt="weather icon"
                    className="float-left"
                  />
                  <div className="float-left"></div>
                </div>
              </div>
              <div className="col-3">
                <button id="gps">
                  <i className="fa fa-location-arrow" aria-hidden="true">
                    GPS
                  </i>
                </button>
                <button className="unitBtn active" id="celsius-link">
                  C
                </button>
                <button className="unitBtn active" id="fahrenheit-link">
                  F
                </button>
              </div>
            </div>
          </div>
          <section className="weather-description">
            <div className="row">
              <div className="col-6">
                <div className="time-date" id="show-time">
                  <span className="clock"></span>
                  <span className="weekday"></span>
                  <div className="calendar">October 09, 2022</div>
                </div>
              </div>
              <div className="col-6" id="extraDescription">
                <div className="mainDescription" id="description">
                  Clear sky
                </div>
                <div className="humidityElement">
                  Humidity: <span id="humidity">30</span>%
                </div>
                <div className="windElement">
                  Wind: <span id="wind">5</span> Km/H
                </div>
                <div className="pressureElement">
                  Pressure: <span id="pressure">30</span>
                </div>
              </div>
            </div>
          </section>

          <div className="weather-forecast" id="forecast"></div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
