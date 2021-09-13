import React, {useState, useEffect} from 'react';
require('dotenv').config();

export const UseForecast = () => {
    const [weather, setWeather] = useState({});
    const [query, setQuery] = React.useState('');
    const timerRef = React.useRef();
    const [next, setNext] = useState([])
    const [err, setErr] = useState(null); 
    const [loading, setLoading] = useState(true)
    useEffect(
        () => () => {
            clearTimeout(timerRef.current);
        },
        [],
    );
      // Hàm lấy dữ liệu từ API
    const submitRequest = location => {    
        clearTimeout(timerRef.current);
            setQuery('progress');
            timerRef.current = window.setTimeout(() => {
                setQuery('success');
            }, 3000);
        fetch(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_KEY}&q=${location}&days=3&aqi=no&alerts=no
          `)
            .then(res => res.json())
            .then(result => {
              setWeather(result)
              setNext(result.forecast.forecastday)
              setLoading(true)
              setErr(null)
            }).catch(result => {
              setWeather(result)
              setNext([])
              setLoading(null)
              setErr(true)    
            });
      }
      // Biến cho phần modal footer
      const about = {
        name: process.env.REACT_APP_ABOUT_ME_NAME,
        date: '27/1/2000',
        school: 'Trường Đại học Khoa học Tự nhiên, ĐHQGHN',
        home: 'Thái Nguyên',
        position: 'Front-end internship'
    }
      // Hàm trả về 2 thứ tiếp theo
    const getDay = next.map((item) =>{
        let date = new Date(item.date);
        let day = date.toLocaleString('en-us', {weekday: 'long'}).slice(0,3);
        return day
    }).slice(1,3)
      // Hàm trả về hai ngày tiếp theo
    const getDate = next.map((item) =>{
        const [yy, mm, dd] = item.date.split(/-/g);
        return `${dd}/${mm}`;
    }).slice(1,3)  
      
      //Hàm trả về icon và nhiệt độ 2 ngày tiếp theo
    const getIcon = next.map((item) => item.day.condition.icon).slice(1,3)
    const get_c = next.map((item) => item.day.avgtemp_c).slice(1,3)
    return {
        weather,
        query,
        loading,
        err,
        getDay,
        getDate,
        getIcon,
        get_c,
        about,
        submitRequest,
    }
}
