import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

export default function TableGroup(props) {
  const { group } = props;
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead style={{ background: "#e2e2e2" }}>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Full Name</TableCell>
            <TableCell>Rank</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {group.map((o, i) => (
            <TableRow key={o.id}>
              <TableCell>{++i}</TableCell>
              <TableCell>{o.full_name}</TableCell>
              <TableCell>{o.rank}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
