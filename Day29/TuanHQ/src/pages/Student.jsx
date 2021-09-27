import { Container, Tab, Tabs } from '@mui/material';
import { createTheme, styled, ThemeProvider } from '@mui/material/styles';
import { getAllStudent } from 'actions/student';
import axios from 'axios';
import FilterStudents from 'components/SearchStudents';
import Header from 'components/Header';
import StudentList from 'components/StudentList';
import Teams from 'components/Teams';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1db9ce',
    },
    secondary: {
      main: '#d310b2',
    },
  },
});

/**
 * Style div bao ngoai, responsive
 */
const SectionList = styled('div')(({ theme }) => ({
  marginTop: '30px',
  [theme.breakpoints.down('sm')]: {
    marginTop: 0,
  },
}));

/**
 * Component tab hiển thị
 * @param {*} props
 * @returns
 */
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Container sx={{}}>{children}</Container>}
    </div>
  );
}

/**
 * Đầu mục tab
 */
const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    width: 180,
    textTransform: 'none',
    border: '1px solid #ccc',
    borderBottom: '1px solid #fff',
    borderRadius: 10,

    // color: 'rgba(255, 255, 255, 0.7)',

    '&.Mui-selected': {
      border: `1px solid ${theme.palette.primary.main}`,
      borderBottom: '1px solid #fff',
    },
  })
);

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Student = (props) => {
  /** value khi chọn tab - UI */
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //
  const dispatch = useDispatch();
  const listStudentsFiltered = useSelector(
    (state) => state.student.listStudentsFiltered
  );
  const listStudents = useSelector((state) => state.student.listStudents);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_LOCAL_API_URL}/students`).then((res) => {
      const action = getAllStudent(res.data);
      dispatch(action);
    });
  }, [dispatch]);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Header />

        <SectionList>
          {/* tab */}
          <Tabs sx={{}} value={value} onChange={handleChange} centered>
            <StyledTab label="Student List" {...a11yProps(0)} />
            <StyledTab label="Teams" {...a11yProps(1)} />
          </Tabs>

          {/* component hien thi */}
          <TabPanel value={value} index={0}>
            <FilterStudents />
            <StudentList listStudentsFiltered={listStudentsFiltered} />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Teams listStudents={listStudents} />
          </TabPanel>
        </SectionList>
      </ThemeProvider>
    </div>
  );
};

Student.propTypes = {};

export default Student;
