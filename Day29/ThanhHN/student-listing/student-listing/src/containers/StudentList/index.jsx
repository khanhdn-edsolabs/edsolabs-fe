import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { StudentListComponent } from '../../components/StudentListComponent';
import { getAge } from '../../constants';

export const StudentList = () => {
  const [listStudents, setListStudents] = useState([]);
  const [filter, setFilter] = useState({ nameSearch: '', gender: '', age: 0 });
  const [filterList, setFilterList] = useState([]);
  let [countStudents, setCountStudent] = useState(5);

  const history = useHistory();

  const handleChangeFilter = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  const handleAddGenderRule = (gender) => {
    let Gender = '';
    if (gender === 'Male') {
      Gender = 'M';
    }
    if (gender === 'Female') {
      Gender = 'F';
    }
    setFilter({ ...filter, gender: Gender });
  };

  const handleFilter = () => {
    if (filter.nameSearch.length > 0 || filter.gender.length > 0 || filter.age > 0) {
      const firstFilter = filter.nameSearch.length > 0 ? listStudents.filter(item => item.full_name.toLowerCase().includes(filter.nameSearch)) : listStudents
      const secondFilter = filter.gender.length > 0 ? firstFilter.filter(item => item.gender === filter.gender) : firstFilter;
      const lastFilter = filter.age ? secondFilter.filter(item => getAge(item.dob) === Number(filter.age)) : secondFilter;
      if (lastFilter.length > 0) {
        setFilterList(lastFilter);
      } else {
        setFilterList([0]);
      }
      
    } else {
      setFilterList([0]);
    }
  };

  const handleLoadMore = () => {
    let count = 0;
    if (countStudents < listStudents.length) {
      count = countStudents += 6;

      if (countStudents === 23) {
        count = countStudents + 2;
      }
    } else {
      count = listStudents.length;
    }

    setCountStudent(count);
  };

  useEffect(() => {
    var axios = require('axios');
    var config = {
      method: 'get',
      url: 'http://localhost:8000/students',
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    };
    axios(config)
      .then((response) => {
        setListStudents(response.data);
      })
      .catch((error) => {
        history.push('/');
      });
  }, []);
  
  return (
    <StudentListComponent
      listStudents={listStudents}
      onAddRule={handleChangeFilter}
      filter={filter}
      onAddGenderRule={handleAddGenderRule}
      onFilter={handleFilter}
      filterList={filterList}
      countStudents={countStudents}
      onLoadMore={handleLoadMore}
    />
  );
};
