/* eslint-disable eqeqeq */
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { Button } from '@material-ui/core'
import moment from 'moment'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
})

export default function StudentTable(props) {
  const classes = useStyles()

  const [stuNum, setStuNum] = useState(5)
  const handleStuNum = () => {
    if (stuNum < props.student.length) {
      setStuNum(stuNum + 5)
    }
  }
  let newArr = []

  if (props.name !== undefined) {
    newArr = props.student.filter((e) =>
      e.full_name.toLowerCase().includes(props.name.toLowerCase().trim()),
    )
  }
  if (props.gender !== undefined) {
    newArr = props.student.filter((e) => e.gender === props.gender)
  }
  if (props.age !== undefined) {
    newArr = props.student.filter(
      (e) => moment().diff(moment(e.dob), 'year') == props.age,
    )
  }
  if (props.name !== undefined && props.gender !== undefined) {
    newArr = props.student
      .filter((e) => e.full_name.toLowerCase().includes(props.name))
      .filter((o) => o.gender === props.gender)
  }
  if (props.name !== undefined && props.age !== undefined) {
    newArr = props.student
      .filter((e) => e.full_name.toLowerCase().includes(props.name))
      .filter((o) => moment().diff(moment(o.dob), 'year') == props.age)
  }
  if (props.gender !== undefined && props.age !== undefined) {
    newArr = props.student
      .filter((e) => e.gender === props.gender)
      .filter((o) => moment().diff(moment(o.dob), 'year') == props.age)
  }
  if (
    props.name !== undefined &&
    props.gender !== undefined &&
    props.age !== undefined
  ) {
    newArr = props.student
      .filter((e) => e.full_name.toLowerCase().includes(props.name))
      .filter((o) => o.gender === props.gender)
      .filter((t) => moment().diff(moment(t.dob), 'year') == props.age)
  }
  return (
    <>
      {newArr.length === 0 ? (
        <>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>#</TableCell>
                  <TableCell>First Name</TableCell>
                  <TableCell>Last Name</TableCell>
                  <TableCell>Gender</TableCell>
                  <TableCell>Age</TableCell>
                  <TableCell>Rank</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.student.slice(0, stuNum).map((student) => (
                  <TableRow key={student.id}>
                    <TableCell>{student.id}</TableCell>
                    <TableCell component="th" scope="row">
                      {student.full_name.split(' ').slice(0, -1).join(' ')}
                    </TableCell>
                    <TableCell>
                      {student.full_name.split(' ').slice(-1).join(' ')}
                    </TableCell>
                    <TableCell>
                      {student.gender === 'M' ? 'Male' : 'Female'}
                    </TableCell>
                    <TableCell>
                      {moment().diff(moment(student.dob), 'year')}
                    </TableCell>
                    <TableCell>{student.rank}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          {stuNum < props.student.length ? (
            <Button onClick={handleStuNum}>Load more</Button>
          ) : (
            <Button disabled>Load more</Button>
          )}
        </>
      ) : (
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Gender</TableCell>
                <TableCell>Age</TableCell>
                <TableCell>Rank</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {newArr.map((student) => (
                <TableRow key={student.id}>
                  <TableCell>{student.id}</TableCell>
                  <TableCell component="th" scope="row">
                    {student.full_name.split(' ').slice(0, -1).join(' ')}
                  </TableCell>
                  <TableCell>
                    {student.full_name.split(' ').slice(-1).join(' ')}
                  </TableCell>
                  <TableCell>
                    {student.gender === 'M' ? 'Male' : 'Female'}
                  </TableCell>
                  <TableCell>
                    {moment().diff(moment(student.dob), 'year')}
                  </TableCell>
                  <TableCell>{student.rank}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  )
}
