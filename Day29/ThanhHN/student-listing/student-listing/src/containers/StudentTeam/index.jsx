import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { StudentTeamComponent } from '../../components/StudentTeamComponent';
import { groupListStudent } from '../../constants';

export const StudentTeam = () => {
  const [teamGroup, setTeamGroup] = useState([]);
  const history = useHistory();

  useEffect(() => {
    var axios = require('axios');
    var config = {
      method: 'get',
      url: process.env.REACT_APP_STUDENTS_URL,
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    };
    axios(config)
      .then((response) => {
        setTeamGroup(groupListStudent(response.data));
      })
      .catch((error) => {
        history.push('/');
      });
  }, []);

  return <StudentTeamComponent teamGroup={teamGroup} />;
};
