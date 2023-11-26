import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import Button from "@mui/material/Button";
import { ActionButton } from "../buttons/ActionButtons";

interface DataTableProps {
  rows: any[];
  headers: string[];
  actionButton: any[];
  id: string;
}

const DataTable: React.FC<DataTableProps> = ({
  rows,
  headers,
  actionButton,
  id,
}) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <Paper>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {headers.map((header: string, index: number) => (
                <TableCell key={index} sx={{ fontWeight: "bold" }}>
                  {header}
                </TableCell>
              ))}
              {actionButton.length > 0 && <TableCell></TableCell>}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row: any) => (
                <TableRow
                  key={row[id]}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  {Object.values(row).map((value: any, index) => (
                    <TableCell key={index}>{value}</TableCell>
                  ))}
                  {actionButton.length > 0 && (
                    <TableCell align="right">
                      {actionButton?.map((item, index3) => (
                        <ActionButton
                          tooltip={item.tooltip}
                          key={index3}
                          icon={item.icon}
                          action={() => {
                            return item.action(row[id]);
                          }}
                        />
                      ))}
                    </TableCell>
                  )}
                </TableRow>
              ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell
                  colSpan={headers.length + (actionButton.length > 0 ? 1 : 0)}
                />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default DataTable;
