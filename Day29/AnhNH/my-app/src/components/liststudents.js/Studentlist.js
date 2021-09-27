import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { ButtonToggle, Col, Row } from 'reactstrap'
import SearchStudent from '../searchstudents/SearchStudent'
import Students from '../students/Students'
import "./style.css"
export default function Studentlist() {
  const history = useHistory()
  const [dataFill, setdataFill] = useState([])//data gốc cằn và cõi lắm cần cày và tưới
  const [countLoaMore, setcountLoaMore] = useState(6)//số lần tăng loadmore
  const [valueSearch, setvalueSearch] = useState({}) //value search
  const [dataSearch, setdataSearch] = useState([])//data lấy từ value search
  //api 
  useEffect(() => {
    var axios = require("axios");
    var config = {
      method: "get",
      url: "http://localhost:4000/students",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };
    axios(config)
      .then((res) => {
        setdataFill(res.data);
      })
      .catch((err) => {
        alert("Token timeout please login again");
        history.push("/");
      });
  }, [history]);
  //loadmore
  const data = [...dataFill]
  //hàm sử lý lấy value search

  const handleOnChangeSearch = (name, gender, age) => {
    setcountLoaMore(6)
    setvalueSearch({ ...valueSearch, name: name, gender: gender, age: age })
    const dataSearchName = [...dataFill].filter(item => item.full_name.toLowerCase().indexOf(name.toLowerCase()) !== -1)
    const dataSearchGender = gender === "" ? [...dataSearchName].map(item => item) : [...dataSearchName].filter(item => item.gender === gender)
    const dataSearchAge = age === "" ? [...dataSearchGender].map(item => item) : [...dataSearchGender].filter(item => Math.floor((Number(new Date().getTime()) - Number(new Date(item.dob).getTime())) / 31622400000) === Number(age))
    setdataSearch(dataSearchAge)
  }
  return (
    <>
      <Col className="col-xs-12 col-lg-12">
        <Row>
          <SearchStudent handleOnChangeSearch={handleOnChangeSearch}></SearchStudent>
        </Row>
        <Row>
          <Col xs="12" className=" overflow-scroll mt-5 mb-5 w-100">
            <table className="border text-start w-100 ">
              <caption className="text-start">{Object.keys(valueSearch).length === 0 ?(dataFill.length-countLoaMore)<0?"":"Tổng: "+dataFill.length+" | Còn chưa hiện : "+(dataFill.length-countLoaMore): dataSearch.length===0?"không có kết quả phù hợp":(dataSearch.length-countLoaMore)<0?"":"Tổng: "+dataSearch.length+" | Còn chưa hiện: "+(dataSearch.length-countLoaMore)}</caption>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First name</th>
                  <th>Last Name</th>
                  <th>Gender</th>
                  <th>Age</th>
                  <th>Rank</th>
                </tr>
              </thead>
              <tbody className="border">
                {
                  Object.keys(valueSearch).length === 0
                    ? data.splice(0, countLoaMore).map((item, index) => <Students
                      key={item.id}
                      id={index + 1}
                      FirstName={item.full_name.split(" ").slice(0, -1)}
                      lastName={item.full_name.split(" ")[item.full_name.split(" ").length - 1]}
                      gender={item.gender === "M" ? "Male" : "Female"}
                      dob={Math.floor((Number(new Date().getTime()) - Number(new Date(item.dob).getTime())) / 31622400000)}
                      rank={item.rank}
                    ></Students>)
                    : [...dataSearch].splice(0, countLoaMore).map((item, index) => <Students
                      key={item.id}
                      id={index + 1}
                      FirstName={item.full_name.split(" ").slice(0, -1)}
                      lastName={item.full_name.split(" ")[item.full_name.split(" ").length - 1]}
                      gender={item.gender === "M" ? "Male" : "Female"}
                      dob={Math.floor((Number(new Date().getTime()) - Number(new Date(item.dob).getTime())) / 31622400000)}
                      rank={item.rank}
                    ></Students>)
                }
              </tbody>
            </table>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            {Object.keys(valueSearch).length === 0 ?
              countLoaMore > dataFill.length ? "" : <ButtonToggle color="primary" className="mb-5" onClick={() => { setcountLoaMore(countLoaMore + 6) }}>load more</ButtonToggle>
              : countLoaMore > dataSearch.length ? "" : <ButtonToggle color="primary" className="mb-5" onClick={() => { setcountLoaMore(countLoaMore + 6) }}>load more</ButtonToggle>}
          </Col>
        </Row>
      </Col>
    </>

  )
}
