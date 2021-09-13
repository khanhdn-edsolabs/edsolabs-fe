import { Grid, Input } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import Swal from 'sweetalert2';
import './search.scss';
import React, { useState } from 'react';


export default function SearchCity(prop) {

    const { getCity } = prop;

    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        getCity(value);
        if(value === "") 
        {
            Swal.fire({
                icon: 'warning',
                title: 'Oops...',
                text: 'You have not entered the city',
              })
        }
            

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
                            placeholder="Nhập thành phô bạn muốn xem" className="search-input"
                            value={value}
                            onChange={(e) => setValue(e.target.value)} />
                    </form>
                </Grid>
            </Grid>
        </>
    );
}