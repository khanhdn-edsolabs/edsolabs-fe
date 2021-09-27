import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Container } from 'reactstrap';
import classnames from 'classnames'
import Studentlist from '../liststudents.js/Studentlist';
import Teams from '../teams/Teams';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
export default function Tabs() {
  const [activeTab, setActiveTab] = useState('1');
  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  }
  //team start
  const history = useHistory()
  const [data, setdata] = useState([])//data gốc cằn và cõi lắm cần cày và tưới

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
        setdata(res.data);
      })
      .catch((err) => {
        alert("Token timeout please login again");
        history.push("/");
      });
  }, [history]);
  const dataFill = [...data]//data copy gốc
  const countRank = [...new Set(dataFill.map(e => e.rank))]//lấy độ dài của các rank 
  //xử lý gọp mảng theo rank
  const arrGroupRank = []
  for (let index = 1; index <= countRank.length; index++) {
    let subArrGroupRank = [];
    dataFill.forEach(item => { if (item.rank === index) { subArrGroupRank.push(item) } })
    arrGroupRank.push(subArrGroupRank)
  }
  //xử lý mỗi team có đủ 5 rank
  const dataFillAllFull = []
  while (arrGroupRank[0]?.length > 0) {
    const listAllRank = []
    arrGroupRank.map(e => listAllRank.push(e.shift()))
    dataFillAllFull.push(listAllRank)
  }
  //team end
  return (
    <>
      <Container>
        <Nav tabs className="text-center justify-content-center mt-5 border-bottom-0">
          <NavItem>
            <NavLink
              className={`${classnames({ active: activeTab === '1' })}`}
              onClick={() => { toggle('1'); }}
            >
              Student list
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '2' })}
              onClick={() => { toggle('2'); }}
            >
              Teams
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Row className="mt-5">
              <Studentlist></Studentlist>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row className="mt-5">
              <Teams dataFillAllFull={dataFillAllFull}></Teams>
            </Row>
          </TabPane>
        </TabContent>
      </Container>
    </>
  )
}
