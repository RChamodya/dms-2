import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { Pagination } from "@mui/material";
// import { ActionButton } from "../buttons/";
import { useState } from "react";

interface NormalTableProps {
  columnHeaders: Array<any>;
  tableData: Array<any>;
  sideRowHeaders?: Array<string>;
  actionButtons?: Array<any>;
  id?: string;
}

export const FileTable = ({
  columnHeaders,
  tableData,
  sideRowHeaders,
  actionButtons,
  id,
}: NormalTableProps) => {
  const [page, setPage] = useState(1);

  const [rowsPerPage] = useState(5);

  const paginatedData = tableData.slice(
    (page - 1) * rowsPerPage,
    (page - 1) * rowsPerPage + rowsPerPage
  );

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="overflow-hidden border rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    {sideRowHeaders?.length && <th></th>}
                    {columnHeaders?.map((header, index) => (
                      <th
                        key={index}
                        scope="col"
                        className="px-6 py-3 text-xs font-medium text-left text-gray-500 uppercase"
                      >
                        {header}
                      </th>
                    ))}
                    {actionButtons?.length && <th></th>}
                  </tr>
                </thead>
                {tableData?.length ? (
                  <tbody className="divide-y divide-gray-200">
                    {tableData?.map((row, index) => (
                      <tr key={index}>
                        {sideRowHeaders?.length && (
                          <td
                            className={
                              "px-6 py-3 whitespace-nowrap text-sm font-semibold text-gray-800"
                            }
                          >
                            {sideRowHeaders[index]}
                          </td>
                        )}
                        {Object.entries(row)?.map(([key, value], index) => (
                          <td
                            key={index}
                            className={
                              "px-6 py-3 whitespace-nowrap text-sm font-medium text-gray-800"
                            }
                          >
                            {<>{value}</>}
                          </td>
                        ))}
                        {actionButtons?.length ? (
                          <td
                            className={
                              "px-6 py-3 whitespace-nowrap text-sm font-semibold  text-gray-800"
                            }
                          >
                            <div className="-mr-[80px]">
                              {actionButtons?.map((b: any, index) => (
                                // <ActionButton
                                //   key={index}
                                //   tooltip={b.tooltip}
                                //   icon={b.icon}
                                //   handleClick={() => {
                                //     return b.handleClick(row[id ? id : ""]);
                                //   }}
                                // />
                                <h1>btn</h1>
                              ))}
                            </div>
                          </td>
                        ) : (
                          <></>
                        )}
                      </tr>
                    ))}
                  </tbody>
                ) : (
                  <tbody>
                    <td
                      colSpan={
                        !actionButtons?.length
                          ? columnHeaders?.length
                          : columnHeaders?.length + 1
                      }
                      className={
                        "px-6 py-3 whitespace-nowrap text-sm font-semibold text-gray-800 text-center"
                      }
                    >
                      No Data Found
                    </td>
                  </tbody>
                )}
              </table>
            </div>
            {tableData?.length ? (
              <div className="flex items-center justify-center mt-2">
                <Pagination
                  count={Math.ceil(tableData.length / rowsPerPage)}
                  shape="rounded"
                  onChange={(event) => handlePageChange}
                  page={page}
                />
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
