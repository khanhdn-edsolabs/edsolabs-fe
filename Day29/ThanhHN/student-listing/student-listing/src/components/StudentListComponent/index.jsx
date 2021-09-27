import { Button, FormControl, MenuItem, Select, TextField } from '@mui/material';
import React, { useState } from 'react';
import { HiSearch } from 'react-icons/hi';
import styled from 'styled-components';
import { getAge, LoadMore } from '../../constants';
import { StudentDetail } from '../StudentDetailComponent';

export const StudentListComponent = ({
  listStudents = [],
  onAddRule = () => {},
  filter = {},
  onAddGenderRule = () => {},
  onFilter = () => {},
  filterList = [],
  countStudents = 5,
  onLoadMore = () => {},
}) => {
  const [gender, setGender] = useState('Gender');
  const handleChange = (e) => {
    setGender(e.target.value);
    onAddGenderRule(e.target.value);
  };

  return (
    <Wrapper>
      <div className="searchInfo">
        <div className="searchName">
          <TextField
            variant="outlined"
            type="text"
            placeholder="Search by name ..."
            fullWidth
            name="nameSearch"
            value={filter.nameSearch}
            onChange={onAddRule}
          />
        </div>

        <div className="searchGender">
          <FormControl sx={{ m: 1, minWidth: 140 }} className="formSelect">
            <Select value={gender} onChange={handleChange}>
              <MenuItem value="Gender">Gender</MenuItem>
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className="searchAge">
          <TextField
            variant="outlined"
            type="number"
            placeholder="Age"
            fullWidth
            name="age"
            onChange={onAddRule}
            value={filter.age}
          />
        </div>

        <div className="searchIcon" onClick={onFilter}>
          <HiSearch />
        </div>
      </div>

      <div className="listStudent">
        <div className="headerList">
          <StudentDetail
            STT="#"
            firstName="First Name"
            lastName="Last Name"
            gender="Gender"
            age="Age"
            rank="Rank"
          />
        </div>

        {(filterList.length > 0 ? filterList : LoadMore(countStudents, listStudents))?.map(
          (item, index) => {
            return (
              <StudentDetail
                key={index}
                STT={item?.id}
                firstName={item?.full_name?.split(' ')[0]}
                lastName={item?.full_name?.split(' ')[1]}
                gender={item?.gender}
                age={item?.dob ? getAge(item?.dob) : '0'}
                rank={item?.rank}
              />
            );
          },
        )}
      </div>

      <div className="loadMore">
        <Button
          variant="outlined"
          color="success"
          onClick={onLoadMore}
          disabled={countStudents === 25 ? true : false}
        >
          {countStudents === 25 ? 'Disabled' : 'Load more students'}
        </Button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 80px;
  padding: 0 60px;
  width: 100%;

  @media (min-width: 320px) and (max-width: 748px) {
    margin-top: 50px;
    padding: 0 10px;
  }

  .searchInfo {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-wrap: wrap;

    @media (min-width: 320px) and (max-width: 748px) {
      display: block;
    }
  }

  .searchName {
    width: 260px;

    @media (min-width: 320px) and (max-width: 748px) {
      width: 100%;
    }
  }

  .searchAge {
    width: 180px;
    margin: 0 30px;

    @media (min-width: 320px) and (max-width: 748px) {
      width: 100%;
      margin: 0;
    }
  }

  input {
    border: 1px solid #000;
    padding: 10px 60px 10px 20px;
  }

  fieldset {
    border: none;
  }

  .formSelect {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #000;
    margin-left: 80px;
    overflow: hidden;
    height: 45px;
    width: 200px;

    @media (min-width: 320px) and (max-width: 748px) {
      width: 100%;
      margin-left: 0;
    }
  }
  .searchIcon {
    border: 1px solid #000;
    width: 35px;
    height: 35px;
    border-radius: 5px;
    cursor: pointer;
    @media (min-width: 320px) and (max-width: 748px) {
      width: 25px;
      height: 25px;
    }

    @media (min-width: 320px) and (max-width: 748px) {
      margin: auto;
      margin-top: 5px;
    }

    svg {
      width: 30px;
      height: 30px;

      @media (min-width: 320px) and (max-width: 748px) {
        width: 25px;
        height: 25px;
      }
    }
  }

  .listStudent {
    margin-top: 40px;
    border: 1px solid #000;

    @media (min-width: 320px) and (max-width: 748px) {
        margin-top: 10px;
    }

    .headerList {
      font-weight: 600;
      border-bottom: 1px solid #000;
    }
  }

  .loadMore {
    text-align: center;
    margin-top: 60px;

    @media (min-width: 320px) and (max-width: 748px) {
      margin-top: 20px;
    }

    button {
      color: #000;
      border: 2px solid #000;
    }

    fieldset {
      border: none;
    }
  }
`;
