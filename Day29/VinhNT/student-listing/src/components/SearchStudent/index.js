import {
  Grid,
  TextField,
  IconButton,
  FormControl,
  Select,
  MenuItem,
} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import React, { useState } from 'react'
export default function SearchStudent(props) {
  const [name, setName] = useState('')
  const [gender, setGender] = useState('')
  const [age, setAge] = useState()
  const handleNameChagne = (e) => {
    const value = e.target.value
    setName(value)
  }
  const handleAgeChagne = (e) => {
    const value = e.target.value
    setAge(value)
  }
  const handleGenderChange = (event) => {
    setGender(event.target.value)
  }
  const handleFilter = () => {
    props.nameChange(name)
    props.genderChange(gender)
    props.ageChange(age)
  }
  return (
    <Grid container spacing={1} justifyContent="flex-end">
      <Grid item xs={3}>
        <TextField
          placeholder="Search by name"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          onChange={handleNameChagne}
        />
      </Grid>
      <Grid item xs={2}>
        <FormControl variant="outlined">
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={gender}
            onChange={handleGenderChange}
          >
            <MenuItem value={'M'}>Male</MenuItem>
            <MenuItem value={'F'}>Female</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={2}>
        <TextField
          placeholder="Age"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          onChange={handleAgeChagne}
        />
      </Grid>
      <Grid item xs={1}>
        <IconButton onClick={handleFilter}>
          <SearchIcon />
        </IconButton>
      </Grid>
    </Grid>
  )
}
