import { Button, FormControl, MenuItem, Select } from '@mui/material'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { Box } from '@mui/system'
import * as React from 'react'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { TableContainer } from '@mui/material'
import { TextField } from '@mui/material'
import Swal from 'sweetalert2'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0
  }
}))

function createData (stt, firstname, lastname, gender, age, rank) {
  return { stt, firstname, lastname, gender, age, rank }
}

export default function StudentList (props) {
  const history = useHistory()
  const [listStudents, setListStudents] = useState([])
  const [list, setList] = useState([])
  const [data, setData] = useState([])
  useEffect(() => {
    var axios = require('axios')
    var config = {
      method: 'get',
      url: `${process.env.REACT_APP_STUDENTS}`
    }
    axios(config)
      .then(response => {
        setListStudents(response.data)
      })
      .catch(error => {
         Swal.fire(
            'Opps!',
            'Your login session has expired ! Please login again',
            'Warning'
          )
        localStorage.removeItem('access_token')
        history.push('/')
      })
  }, [history])

  useEffect(() => {
    let newList = []
    listStudents.map(item => {
      function getAge (dateString) {
        var today = new Date()
        var birthDate = new Date(dateString)
        var age = today.getFullYear() - birthDate.getFullYear()
        var m = today.getMonth() - birthDate.getMonth()
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
          age--
        }
        return age
      }
      let getLastName = item.full_name.split(' ')
      let lastName = item.full_name.split(' ')[0]
      let fisrtName = item.full_name.split(' ')[getLastName.length - 1]
      if (item.gender === 'M') {
        newList.push({
          ...item,
          gender: 'Male',
          firstname: fisrtName,
          lastName: lastName,
          age: getAge(item.dob)
        })
      }
      if (item.gender === 'F') {
        newList.push({
          ...item,
          gender: 'FeMale',
          firstname: fisrtName,
          lastName: lastName,
          age: getAge(item.dob)
        })
      }
      return item
    })
    setList(newList)
  }, [listStudents])
  const [check, setCheck] = useState(true)
  const rows = (check ? list : data).map((item, index) => {
    return createData(
      index + 1,
      item.firstname,
      item.lastName,
      item.gender,
      item.age,
      item.rank
    )
  })

  const [actions, setActions] = useState({
    fullname: '',
    gender: 'Gender',
    age: ''
  })
  const [gender, setGender] = React.useState('Gender')

  const handleChangeGender = event => {
    setGender(event.target.value)
    setActions({ ...actions, gender: event.target.value })
  }
  const handleValueName = valueName => {
    setActions({ ...actions, fullname: valueName.target.value })
  }
  const handleAge = valueAge => {
    setActions({ ...actions, age: valueAge.target.value })
  }
  //filer
  const getActions = () => {
    setCheck(false)
    let emtyArr = []
    list.map(item => {
      if (
        item.full_name.toLowerCase().includes(actions.fullname.toLowerCase()) &&
        actions.gender === 'Gender' &&
        actions.age === ''
      ) {
        emtyArr.push(item)
      }
      if (
        item.full_name.toLowerCase().includes(actions.fullname.toLowerCase()) &&
        actions.gender === item.gender &&
        actions.age === ''
      ) {
        emtyArr.push(item)
      }
      if (
        item.full_name.toLowerCase().includes(actions.fullname.toLowerCase()) &&
        actions.gender === item.gender &&
        actions.age.includes(item.age)
      ) {
        emtyArr.push(item)
      }
      if (
        actions.fullname === '' &&
        actions.gender === 'Gender' &&
        actions.age.includes(item.age)
      ) {
        emtyArr.push(item)
      }
      return item
    })
    setData(emtyArr)
  }
  // loadmore
  let [count, setCount] = useState(5)
  const [isHid, setIsHid] = useState(true)
  const handleLoadmore = () => {
    setCount((count += 6))
    if (count === 29) {
      setIsHid(false)
    } else {
      setIsHid(true)
    }
  }
  return (
    <>
      <Box
        component='form'
        sx={{
          width: '100%',
          marginBottom: '50px',
          display: 'flex',
          justifyContent: 'flex-end',
          '& > :not(style)': { m: 1 }
        }}
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        <TextField
          id='outlined-basic'
          variant='outlined'
          required
          onChange={handleValueName}
          placeholder='Search by name.. '
        />
        <div>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Select
              value={gender}
              onChange={handleChangeGender}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem value='Gender'>Gender</MenuItem>
              <MenuItem value='FeMale'>Female</MenuItem>
              <MenuItem value='Male'>Male</MenuItem>
            </Select>
          </FormControl>
        </div>
        <TextField
          id='outlined-basic'
          variant='outlined'
          placeholder='Age..'
          onChange={handleAge}
        />
        <Button sx={{ height: '56px' }} variant='outlined' onClick={getActions}>
          <i className='fas fa-search'></i>
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label='customized table'>
          <TableHead>
            <TableRow>
              <StyledTableCell>#</StyledTableCell>
              <StyledTableCell align='center'>First Name</StyledTableCell>
              <StyledTableCell align='center'>Last Name</StyledTableCell>
              <StyledTableCell align='center'>Gender</StyledTableCell>
              <StyledTableCell align='center'>Age</StyledTableCell>
              <StyledTableCell align='center'>Rank</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.splice(0, count).map(row => (
              <StyledTableRow key={row.stt}>
                <StyledTableCell component='th' scope='row'>
                  {row.stt}
                </StyledTableCell>
                <StyledTableCell align='center'>
                  {row.firstname}
                </StyledTableCell>
                <StyledTableCell align='center'>{row.lastname}</StyledTableCell>
                <StyledTableCell align='center'>{row.gender}</StyledTableCell>
                <StyledTableCell align='center'>{row.age}</StyledTableCell>
                <StyledTableCell align='center'>{row.rank}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {isHid && (
        <Box sx={{ width: '100%', textAlign: 'center' }}>
          <Button
            sx={{ marginTop: '40px' }}
            variant='contained'
            onClick={handleLoadmore}
          >
            Load More
          </Button>
        </Box>
      )}
    </>
  )
}
