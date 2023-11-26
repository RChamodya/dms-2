// import { KeyboardArrowRight, KeyboardArrowLeft } from "@mui/icons-material";
import { Pagination } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import * as React from "react";
import { useEffect, useState } from "react";
import { ActionButton, ActionButtonProps } from "../buttons/ActionButtons";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

interface SearchTableProps {
  rows: {}[];
  columnHeaders?: string[];
  actionButtons: ActionButtonProps[];
  paginate?: boolean;
  rowsPerPageOptions?: number[];
  oredreByColumn?: string;
}

function stableSort<T>(
  array: readonly T[],
  comparator: (a: T, b: T) => number
) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

type Order = "asc" | "desc";

/**
 * *props used to customize the table
 * @actionButtons list of actions buttons to display in the search table
 * @id : id column of the table
 * @filterByColumn : key of the column to match the filter val
 * @filterVal :  value in table based on which the action should be disabled
 * note: e.g if `isActive` is filterByColumn, and filterVal is 'Blocked', then when the row contains Blocked in isActive column, the actions will be blocked)
 * note: a column could be excluded from this disabling by adding exclude={true} in the @ActionButton props.
 * @disableOnProp : used to overrride the conditional disabling. If set to true, the @ActionButton disabled prop will take effect and precedence.
 * @excludeColumns : if other columns are in the result set that needs not be shown except the id column
 */

interface SearchResultTableProps extends SearchTableProps {
  actionButtons: Array<ActionButtonProps>;
  id?: string;
  filterByColumn?: string;
  filterVal?: string;
  excludeAction?: string;
  disableOnProp?: boolean;
  rowsPerPage?: number;
  excludeColumns?: string[];
  actionColWidth?: number;
}

export default function SearchResultTable(props: SearchResultTableProps) {
  const [rowKeys, setRowKeys] = useState<string[]>([]);
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<any>("");
  const [columnHeaders, setColumnHeaders] = useState<string[]>([]);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(props.rowsPerPage ?? 8);
  const [rowsPerPageOptions, setRowsPerPageOptions] = useState([5, 10, 25]);
  const [dense, setDense] = useState(true);

  useEffect(() => {
    let temp = props.columnHeaders?.length
      ? props.columnHeaders
      : props.rows.length
      ? Object.keys(props.rows[0])
      : [];
    setColumnHeaders(temp);
    let keys = Object.keys(props.rows ? [0] : {});
    setRowKeys(keys);
    setPage(1);
  }, [props.rows]);

  useEffect(() => {
    setOrderBy(props.oredreByColumn ? props.oredreByColumn : rowKeys[0]);
  }, [rowKeys]);
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper} className="search-table-container">
      <Table
        sx={{ minWidth: 700 }}
        aria-label="customized table"
        size={dense ? "small" : "medium"}
      >
        <TableHead className="search-result-table-header">
          <TableRow>
            {columnHeaders.map((e, index) => (
              <StyledTableCell align="left" key={index}>
                {e}
              </StyledTableCell>
            ))}
            {props.actionButtons.length ? (
              <StyledTableCell align="right"></StyledTableCell>
            ) : (
              <></>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {stableSort(props.rows, getComparator(order, orderBy))
            .slice(
              (page - 1) * rowsPerPage,
              (page - 1) * rowsPerPage + rowsPerPage
            )
            .map((row: any, index) => (
              <StyledTableRow key={index}>
                {Object.entries(row).map(([key, value], index2) => (
                  <React.Fragment key={index2}>
                    {key !== props.id &&
                      !props.excludeColumns?.includes(key) && (
                        <StyledTableCell align="left" key={index2}>
                          <>{value}</>
                        </StyledTableCell>
                      )}
                  </React.Fragment>
                ))}
                {props.actionButtons.length ? (
                  <StyledTableCell
                    align="right"
                    style={{ width: props.actionColWidth ?? 150 }}
                  >
                    {props.actionButtons?.map((item, index3) => (
                      <ActionButton
                        tooltip={item.tooltip}
                        key={index3}
                        icon={item.icon}
                        width={item.width}
                        height={item.height}
                        disabled={
                          props.disableOnProp
                            ? item.disabled ||
                              (props.filterByColumn &&
                                props.filterVal &&
                                row[props.filterByColumn] === props.filterVal &&
                                !item.exclude)
                              ? true
                              : false
                            : props.filterByColumn &&
                              props.filterVal &&
                              row[props.filterByColumn] === props.filterVal &&
                              !item.exclude
                            ? true
                            : false
                        }
                        action={() => {
                          return item.action(row[props.id ? props.id : ""]);
                        }}
                      />
                    ))}
                  </StyledTableCell>
                ) : (
                  <></>
                )}
              </StyledTableRow>
            ))}
        </TableBody>
      </Table>
      {props.paginate && (
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 15 }}
        >
          {props.rows?.length ? (
            <Pagination
              count={Math.ceil(props.rows.length / rowsPerPage)}
              color="primary"
              onChange={handleChangePage}
              page={page}
            />
          ) : (
            <></>
          )}
        </div>
      )}
    </TableContainer>
  );
}
