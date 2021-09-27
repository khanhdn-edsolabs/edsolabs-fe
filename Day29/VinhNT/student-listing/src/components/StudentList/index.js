import React, { useState, useEffect } from 'react'
import SearchStudent from '../SearchStudent'
import StudentTable from '../StudentTable'
import action from '../../services/action'
export default function StudentList() {
  const [student, setStudent] = useState([])
  const [name, setName] = useState()
  const [gender, setGender] = useState()
  const [age, setAge] = useState()
  useEffect(() => {
    async function getStudent() {
      const res = await action.getStuList()
      setStudent(res.data)
    }
    getStudent()
  }, [])
  const handleNameChagne = (data) => {
    setName(data)
  }
  const handlgeGenderChagne = (data) => {
    setGender(data)
  }
  const handleAgeChange = (data) => {
    setAge(data)
  }
  return (
    <>
      {' '}
      <SearchStudent
        student={student}
        nameChange={handleNameChagne}
        genderChange={handlgeGenderChagne}
        ageChange={handleAgeChange}
      />
      <StudentTable student={student} name={name} gender={gender} age={age} />
    </>
  )
}
