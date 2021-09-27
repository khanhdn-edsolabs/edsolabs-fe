import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Col } from 'reactstrap';
export default function Teams(props) {

  return (
    <>
      {props.dataFillAllFull.map((el, index) => <Col key={index} className="p-2 col-xs-12 col-lg-6 col-md-12 col-sm-12">
        <h3>Team {index + 1}</h3>
        <table className="border mt-2 text-start w-100">
          <thead className="border">
            <tr>
              <th>#</th>
              <th>Full name</th>
              <th>Rank</th>
            </tr>
          </thead>
          <tbody className="border">
            {el.map((e, index) => <tr className="border" key={index}>
              <td>{index + 1}</td>
              <td>{e.full_name}</td>
              <td>{e.rank}</td>
            </tr>)}
          </tbody>
        </table>
      </Col>)}
    </>
  )
}
