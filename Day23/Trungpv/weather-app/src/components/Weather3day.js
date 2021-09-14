import moment from "moment";
import { Fragment } from "react";

export default function weather3day(e) {
  const { city } = e;
  return (
    <Fragment>
       <div className="weather3day">
            {city.forecast.forecastday.map((items) => {
              return (
                <div key={items.date_epoch} className="box">
                  <p className="day">{moment(`${items.date}`).format(`ddd`)}</p>
                  <p className="time">
                    {moment(`${items.date}`).format(`DD/MM`)}
                  </p>
                  <img src={items.day.condition.icon} alt=""></img>
                  <p>{items.day.avgtemp_c} °c</p>
                </div>
              );
            })}
          </div>
    </Fragment>
  );
}
