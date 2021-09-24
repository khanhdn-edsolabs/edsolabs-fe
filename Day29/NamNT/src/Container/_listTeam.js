import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { getStudents } from "../Api/_getAPI";
import { group } from "../Container/_funtion";
// import PropTypes from 'prop-types';

ListTeam.propTypes = {};

function ListTeam(props) {
  const [list, setList] = useState();
  useEffect(() => {
    getStudents()
      .then((e) => e.data)
      .then((data) => setList(data))
      .catch((err) => err);
  }, []);
  let newArr = [];
  let arr1 = [];
  let arr2 = [];
  let arr3 = [];
  let arr4 = [];
  let totalArr = [];
  if (list) {
    newArr = [...list];
    arr1 = group(newArr);
    arr2 = group(newArr);
    arr3 = group(newArr);
    arr4 = group(newArr);
    totalArr.push(arr1, arr2, arr3, arr4, newArr);
  }
  return (
      <section className="d-flex flex-row flex-wrap justify-content-evenly">
        {list &&
          totalArr.map((arr, i) => {
            return (
              <div key={i} className="d-flex flex-column">
                <p>{`Team ${i + 1}`}</p>
                <Table className="list border">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Full Name</th>
                      <th>Rank</th>
                    </tr>
                  </thead>
                  {arr.map((e, index) => {
                    return (
                      <tbody key={index}>
                        <tr>
                          <td>{index + 1}</td>
                          <td>{e.full_name}</td>
                          <td>{e.rank}</td>
                        </tr>
                      </tbody>
                    );
                  })}
                </Table>
              </div>
            );
          })}
      </section>
  );
}

export default ListTeam;
