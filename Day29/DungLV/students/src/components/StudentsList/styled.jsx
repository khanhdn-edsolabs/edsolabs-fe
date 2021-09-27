import { Box, styled } from "@mui/system";
import { TextField } from "@mui/material";
import { TableContainer } from "@mui/material";
export const MyBox = styled(Box)`
  @media (max-width: 480px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-contents: center;
  }
`;
export const MyTextFiled = styled(TextField)`
  @media (max-width: 480px) {
    width: 220px;
  }
`;
export const MyTableContainer = styled(TableContainer)`
  @media (max-width: 480px) {
    width: 100%;
  }
`;
