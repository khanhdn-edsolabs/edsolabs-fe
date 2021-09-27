import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {getStudents} from "../Api/_getAPI";
import {
  InputGroup,
  FormControl,
  Dropdown,
  Button,
  Table,
} from "react-bootstrap";
import {
  firstName,
  lastName,
  gender,
  findAge,
} from "../Container/_funtion";
// import PropTypes from "prop-types";

ListStudents.propTypes = {};

function ListStudents(props) {
  const [student, setStudent] = useState();
  const [show, setShow] = useState(5);
  const [name, setName] = useState("");
  const [sex, setSex] = useState("gender");
  const [age, setAge] = useState("");
  const [search, setSearch] = useState(false);
  useEffect(() => {
    getStudents()
      .then((e) => e.data)
      .then((data) => setStudent(data))
      .catch((err) => err);
  }, []);
  const handleClick = () => {
    setShow(0);
    setSearch(!search);
  };
  return (
      <main>
        <section className="filter container  mt-5">
          <div className="filter d-flex justify-content-end">
            <InputGroup
              className="mb-3 filter__name mx-3"
              onChange={(e) => setName(e.target.value.trim().toLowerCase())}
              value={name}
            >
              <FormControl
                placeholder="Search by name"
                aria-label="Search by name"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <Dropdown>
              <Dropdown.Toggle
                variant="variant"
                id="dropdown-basic"
                className="gender border mx-3"
              >
                {sex}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => setSex("Male")}>
                  Male
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setSex("Female")}>
                  Female
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setSex("gender")}>
                  Gender
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <InputGroup
              className="mb-3 filter__age mx-3"
              onChange={(e) => {
                setAge(e.target.value.trim());
              }}
              value={age}
            >
              <FormControl
                placeholder="Age"
                aria-label="Age"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            {search ? (
              <Button
                variant="outline-dark"
                className="filter__search active"
                onClick={() => handleClick()}
              >
                <i className="fas fa-search "></i>
              </Button>
            ) : (
              <Button
                variant="outline-dark"
                className="filter__search"
                onClick={() => handleClick()}
              >
                <i className="fas fa-search "></i>
              </Button>
            )}
          </div>
          <div className="data">
            <Table responsive>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Gender</th>
                  <th>Age</th>
                  <th>Rank</th>
                </tr>
              </thead>
              <tbody>
                {student &&
                  student.map((e, index) => {
                    if (index < show) {
                      return (
                        <tr key={index}>
                          <td>{e.id}</td>
                          <td>{firstName(e.full_name)}</td>
                          <td>{lastName(e.full_name)}</td>
                          <td>{gender(e.gender)}</td>
                          <td>{findAge(e)}</td>
                          <td>{e.rank}</td>
                        </tr>
                      );
                    } else if (search === true) {
                      if (
                        e.full_name.toLowerCase().includes(name) &&
                        gender(e.gender) === sex &&
                        findAge(e) === age
                      ) {
                        return (
                          <tr key={index}>
                            <td>{e.id}</td>
                            <td>{firstName(e.full_name)}</td>
                            <td>{lastName(e.full_name)}</td>
                            <td>{gender(e.gender)}</td>
                            <td>{findAge(e)}</td>
                            <td>{e.rank}</td>
                          </tr>
                        );
                      } else if (
                        e.full_name.toLowerCase().includes(name) &&
                        age === "" &&
                        gender(e.gender) === sex
                      ) {
                        return (
                          <tr key={index}>
                            <td>{e.id}</td>
                            <td>{firstName(e.full_name)}</td>
                            <td>{lastName(e.full_name)}</td>
                            <td>{gender(e.gender)}</td>
                            <td>{findAge(e)}</td>
                            <td>{e.rank}</td>
                          </tr>
                        );
                      } else if (
                        name === "" &&
                        gender(e.gender) === sex &&
                        findAge(e) === age
                      ) {
                        return (
                          <tr key={index}>
                            <td>{e.id}</td>
                            <td>{firstName(e.full_name)}</td>
                            <td>{lastName(e.full_name)}</td>
                            <td>{gender(e.gender)}</td>
                            <td>{findAge(e)}</td>
                            <td>{e.rank}</td>
                          </tr>
                        );
                      } else if (
                        e.full_name.toLowerCase().includes(name) &&
                        findAge(e) === age &&
                        sex === "gender"
                      ) {
                        return (
                          <tr key={index}>
                            <td>{e.id}</td>
                            <td>{firstName(e.full_name)}</td>
                            <td>{lastName(e.full_name)}</td>
                            <td>{gender(e.gender)}</td>
                            <td>{findAge(e)}</td>
                            <td>{e.rank}</td>
                          </tr>
                        );
                      } else if (
                        e.full_name.toLowerCase().includes(name) &&
                        age === "" &&
                        sex === "gender"
                      ) {
                        return (
                          <tr key={index}>
                            <td>{e.id}</td>
                            <td>{firstName(e.full_name)}</td>
                            <td>{lastName(e.full_name)}</td>
                            <td>{gender(e.gender)}</td>
                            <td>{findAge(e)}</td>
                            <td>{e.rank}</td>
                          </tr>
                        );
                      } else if (
                        name === "" &&
                        age === "" &&
                        gender(e.gender) === sex
                      ) {
                        return (
                          <tr key={index}>
                            <td>{e.id}</td>
                            <td>{firstName(e.full_name)}</td>
                            <td>{lastName(e.full_name)}</td>
                            <td>{gender(e.gender)}</td>
                            <td>{findAge(e)}</td>
                            <td>{e.rank}</td>
                          </tr>
                        );
                      } else if (
                        name === "" &&
                        findAge(e) === age &&
                        sex === "gender"
                      ) {
                        return (
                          <tr key={index}>
                            <td>{e.id}</td>
                            <td>{firstName(e.full_name)}</td>
                            <td>{lastName(e.full_name)}</td>
                            <td>{gender(e.gender)}</td>
                            <td>{findAge(e)}</td>
                            <td>{e.rank}</td>
                          </tr>
                        );
                      }
                    }
                    return undefined;
                  })}
              </tbody>
            </Table>
            {show <= 25 && !search && (
              <div className="d-flex justify-content-center">
                <Button
                  variant="outline-dark"
                  className="filter__search"
                  onClick={(e) => setShow(show + 6)}
                >
                  Load More Student
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
  );
}

export default ListStudents;
