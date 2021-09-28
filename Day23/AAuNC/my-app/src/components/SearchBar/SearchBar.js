import './SearchBar.css';
import { Grid, Input } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import React, { useState, useEffect } from 'react';


export default function SearchBar(props) {

    const { getCity } = props;

    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        getCity(value);
        if(value === "") alert("Bạn chưa nhập thành phố!!!")

    };

    return (
        <>
            <Grid container alignItems="center" className="searchBar">
                <Grid item>
                    <Search className="search-icon" />
                </Grid>
                <Grid item xs sm>
                    <form onSubmit={handleSubmit}>
                        <Input
                            type="text"
                            fullWidth
                            disableUnderline
                            placeholder="Nhập thành phố bạn muốn xem" className="search-input"
                            value={value}
                            onChange={(e) => setValue(e.target.value)} />
                    </form>
                </Grid>
            </Grid>
        </>
    );
}
