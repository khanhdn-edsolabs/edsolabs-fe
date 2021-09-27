import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { Col } from 'reactstrap'
import "./style.css"
export default function SearchStudent(props) {
  const [value, setvalue] = useState({
    name: "",
    gender: "",
    age: ""
  })
  const onChangeName = (e) => {
    setvalue({ ...value, name: e.target.value })
  }
  const onChangeGender = (e) => {
    setvalue({ ...value, gender: e.target.value })
  }
  const onChangeAge = (e) => {
    setvalue({ ...value, age: e.target.value })
  }
  const onclick = () => {
    props.handleOnChangeSearch(value.name, value.gender, value.age)
  }
  return (
    <>
      <Col lg="8" xs="12 text-end mt-2 p-0">
        <input type="text" placeholder="Search by name" className="p-2" onChange={onChangeName} id="input__search"/>
      </Col>
      <Col lg="4" xs="12" className="d-flex justify-content-between p-0 mt-2">
        <select className="p-2 " onChange={onChangeGender}>
          <option value="">Gender</option>
          <option value="M" >Male</option>
          <option value="F" >Female</option>
        </select>
        <input type="number" placeholder="age" min="1" className="p-2 w-100 me-2 ms-2" onChange={onChangeAge} />
        <button className="border border-secondary p-2 bg-primary text-white btn" onClick={onclick}>
          <BsSearch size="26" ></BsSearch>
        </button>
      </Col>
    </>
  )
}
