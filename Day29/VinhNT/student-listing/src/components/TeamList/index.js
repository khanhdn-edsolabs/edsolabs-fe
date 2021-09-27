import {
  Paper,
  TableContainer,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import action from '../../services/action'
function chunkArray(myArray, chunk_size) {
  var results = []

  while (myArray.length) {
    results.push(myArray.splice(0, chunk_size))
  }

  return results
}
export default function TeamList() {
  const [student, setStudent] = useState([])
  useEffect(() => {
    async function getStudent() {
      const res = await action.getStuList()
      setStudent(res.data)
    }
    getStudent()
  }, [])
  student.sort((a, b) => {
    return a.rank - b.rank
  })
  let rs1 = []

  for (let i = 0; i < 5; i++) {
    rs1.push(student[i + 0])
    rs1.push(student[i + 5])
    rs1.push(student[i + 10])
    rs1.push(student[i + 15])
    rs1.push(student[i + 20])
  }

  let rs = chunkArray(rs1, 5)
  return (
    <>
      {student.length > 0 && (
        <>
          {rs.map((e, index) => {
            return (
              <div key={index}>
                <Typography>Team {index + 1}</Typography>
                <TableContainer component={Paper}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell>Full name</TableCell>
                        <TableCell>rank</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {e.map((student, index) => {
                        return (
                          <TableRow key={student.id}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>{student.full_name}</TableCell>
                            <TableCell>{student.rank}</TableCell>
                          </TableRow>
                        )
                      })}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            )
          })}
        </>
      )}
    </>
  )
}
