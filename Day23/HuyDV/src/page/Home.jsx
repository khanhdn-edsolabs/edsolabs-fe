import React from 'react'
import Grid from '@material-ui/core/Grid';
import InputSearch from '../Component/InputSearch';
import PaperWeather from '../Component/PaperWeather';
import PropTypes from 'prop-types'
import CardWeather from '../Component/CardWeather';
import { makeStyles } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({

    flex: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '30px',
        marginTop: '30px'
    },
    divWrap: {
        width: '100%'
    },
    title: {
        textAlign: 'center',
        fontSize: '35px',
        marginTop: '50px',
    }
}));
const Home = (props) => {

    const classes = useStyles();

    const handleValueChange = (value) => {
        props.handleValueChange(value)
    }
    const handleClickList = (value) => {
        props.handleClickList(value)
    }

    const pageWeather = props.data.map((item, index) => {
        return <div key={index} className={classes.divWrap}>
            <PaperWeather
                key={index}
                city={`${item.location.name}, ${item.location.country} `}
                img={item.current.condition.icon}
                weather={item.current.condition.text}
                temperature={item.current.temp_c}
                wind={item.current.wind_kph}
                precip={item.current.precip_mm}
                pressure={item.current.pressure_mb}
            />
            <h2 className={classes.title}>3 ngày dự báo thời tiết </h2>
        </div>
    })
    
    const listCard = props.data3day.map((item, index) => (
        <CardWeather
            key={index}
            img={item.day.condition.icon}
            date={item.date}
            maxtemp={item.day.maxtemp_c}
            mintemp={item.day.mintemp_c}
        />
    ))

    return (
        <>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                <InputSearch
                    handleValueChange={handleValueChange}
                    handleClickList={handleClickList}
                    dataSearch={props.dataSearch}
                    trangThaiBlockDataSeach={props.trangThaiBlockDataSeach}
                    valueInput={props.valueInput}
                />
                {
                    pageWeather
                }
                <div className={classes.flex}>
                    {
                        listCard
                    }
                </div>
            </Grid>
        </>
    )
}

Home.propTypes = {
    data: PropTypes.array.isRequired,
    data3day: PropTypes.array.isRequired,
}

export default Home
