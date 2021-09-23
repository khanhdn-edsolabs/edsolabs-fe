import ReplayIcon from '@mui/icons-material/Replay';
import SearchIcon from '@mui/icons-material/Search';
import { Autocomplete, Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { searchStudent, refreshListStudents } from 'actions/student';
import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const gender = [
  {
    label: 'Male',
    value: 'M',
  },
  {
    label: 'Female',
    value: 'F',
  },
];

const SearchStudents = () => {
  const [filterGender, setFilterGender] = useState('');
  const [filterAge, setFilterAge] = useState('');
  const [filterName, setFilterName] = useState('');

  const dispatch = useDispatch();

  const handleSearch = () => {
    const filter = {
      filterAge,
      filterName,
      filterGender,
    };

    const action = searchStudent(filter);
    dispatch(action);
  };

  const handleRefresh = () => {
    setFilterName('');
    setFilterAge('');
    setFilterGender('');

    const action = refreshListStudents();
    dispatch(action);
  };
  return (
    <Box
      sx={{
        margin: '20px 0px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-end',
        '& > .MuiButton-root,.MuiTextField-root ,.MuiAutocomplete-root': {
          margin: '0px 10px ',
        },
      }}
    >
      <TextField
        id="outlined-basic"
        size="small"
        label="Search by name..."
        variant="outlined"
        value={filterName}
        onChange={(e) => setFilterName(e.target.value)}
      />
      <Autocomplete
        size="small"
        disablePortal
        id="combo-box-demo"
        options={gender}
        sx={{ width: 150 }}
        onChange={(e, value) => setFilterGender(value.value)}
        renderInput={(params) => <TextField {...params} label="Gender" />}
      />
      <TextField
        size="small"
        id="outlined-basic"
        label="Age"
        type="number"
        variant="outlined"
        value={filterAge}
        sx={{ width: 80 }}
        onChange={(e) => setFilterAge(e.target.value)}
      />
      <Button variant="outlined" size="small" onClick={handleSearch}>
        <SearchIcon />
      </Button>

      <Button
        variant="outlined"
        color="secondary"
        size="small"
        onClick={handleRefresh}
      >
        <ReplayIcon />
      </Button>
    </Box>
  );
};

export default SearchStudents;
