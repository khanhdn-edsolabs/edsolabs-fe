import styled from "styled-components/macro";

export const Container = styled.div`
  width: 450px;
  margin: 200px auto;
  padding: 30px;
  border: 1px solid;
  border-radius: 40px;
  @media (max-width: 480px) {
    width: 200px;
    margin: 20px auto;
    padding: 30px;
    border: 1px solid;
    border-radius: 40px;
  }
`;
export const Title = styled.h1`
  text-align: center;
`;
export const NameInput = styled.label`
  font-weight: 600;
  margin: 10px 0;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-contents: center;
`;
export const Inputform = styled.input`
  width: 90%;
  height: 38px;
  outline: none;
  border: 1px solid;
  border-radius: 40px;
  padding: 0 20px;
  @media (max-width: 480px) {
    width: 80%;
    border: 1px solid;
    border-radius: 40px;
  }
`;
export const ButtonForm = styled.button`
  width: 164px;
  margin: 40px 0 0 263px;
  height: 38px;
  border: 1px solid;
  cursor: pointer;
  @media (max-width: 480px) {
    width: 100px;
    margin: 20px auto;
    border: 1px solid;
    border-radius: 40px;
  }
`;
