import React from 'react';
import { useTable, useGroupBy, useFilters, useSortBy, useExpanded, usePagination } from 'react-table';
import styled from 'styled-components';
import { Typography } from '../styleguide/Typography';
const { Paragraph, SmallLead } = Typography;

// https://blog.logrocket.com/building-styling-tables-react-table-v7/

// export interface TableProps<D, C> {
//   data: D[];
//   columns: C[];
// }

// const Table = <D extends, C>(): React.FC<TableProps<D, C>> => ({ data, columns }) => {
const Styles = styled.div`
  padding: 40px;

  table {
    display: inline-block;
    border-spacing: 0;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    // border-radius: 10px;

    thead {
      background-color: ${({ theme }) => theme.colors.primary};
      padding: 10px;

      th {
        border-bottom: 0;
        color: white;
      }
    }

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      padding: 0.5rem;
      border-bottom: 1px solid #ddd;

      :last-child {
        border-right: 0;
      }
    }

    td {
      p {
        margin: 5px;
      }
    }
  }
`;

const StyledRow = styled.tr<{ textColor: string }>`
  ${({ textColor }) =>
    textColor
      ? `
    p {
      color: ${textColor}
    }
  `
      : ''}
`;

// @ts-ignore
const Table = ({ data, columns, getRowColor }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

  return (
    <Styles>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup, index) => (
            <tr key={index} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, index) => (
                <th key={index} {...column.getHeaderProps()}>
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, index) => {
            prepareRow(row);
            const rowColor = getRowColor(index);
            return (
              <StyledRow key={index} {...row.getRowProps()} textColor={rowColor}>
                {row.cells.map((cell, index: number) => {
                  return (
                    <td key={index} {...cell.getCellProps()}>
                      <Paragraph>{cell.render('Cell')}</Paragraph>
                    </td>
                  );
                })}
              </StyledRow>
            );
          })}
        </tbody>
      </table>
    </Styles>
  );
};

export default Table;
