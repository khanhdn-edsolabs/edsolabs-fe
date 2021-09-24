import { Grid, Button } from "@material-ui/core";
import { useState } from "react";
import InputText from "../../components/Input/InputText";
import SelectBox from "../../components/Box/SelectBox";
import SearchIcon from "@material-ui/icons/Search";

export default function Filter(props) {
  const { getFilter } = props;
  const [name, setName] = useState("");
  const getName = (value) => setName(value);
  const [gender, setGender] = useState("");
  const getSelect = (value) => setGender(value);
  const [age, setAge] = useState("");
  const getAge = (value) => setAge(value);

  const handleSubmit = (e) => {
    e.preventDefault();
    getFilter(name, gender, age);
  };

  return (
    <Grid
      container
      justifyContent="flex-end"
      style={{ marginTop: "3%", marginBottom: "3%" }}
      component="form"
      onSubmit={handleSubmit}
    >
      <InputText
        type="text"
        value={name}
        getValue={getName}
        placeholder="Search by name"
      />
      <SelectBox getSelect={getSelect} value={gender} />
      <InputText type="text" value={age} getValue={getAge} placeholder="Age" />
      <Button
        type="submit"
        color="primary"
        style={{
          width: "56px",
          height: "56px",
          border: "1px solid black",
        }}
      >
        <SearchIcon fontSize="large" />
      </Button>
    </Grid>
  );
}