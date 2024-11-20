"use client"

import * as React from "react"
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  createColumnHelper,
} from "@tanstack/react-table"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Invoice } from "@/app/types/api"
import { useMemo } from "react"

function PaymentsTable() {

    const columnHelper = createColumnHelper<Invoice>();
    const columns = useMemo(() => {
        return [
          columnHelper.accessor("id", {
            cell: (info) => info.getValue(),
            header: () => <span>Id</span>,
          }),
          columnHelper.accessor("value", {
            cell: (info) => <span>{info.getValue()}</span>,
            header: () => <span>Value</span>,
          }),
          columnHelper.accessor("timestamp", {
            cell: (info) => <span>{info.getValue()}</span>,
            header: () => <span>Time of Submission</span>,
          }),
        ];
    }, []);

    const data = [
        {
          id: "1",
          value: "9.99EUR",
          timestamp: "2021-09-01T00:00:00Z",
        },
        {
          id: "2",
          value: "19.99EUR",
          timestamp: "2021-09-02T00:00:00Z",
        },
        {
          id: "3",
          value: "29.99EUR",
          timestamp: "2021-09-03T00:00:00Z",
        },
        {
          id: "4",
          value: "39.99EUR",
          timestamp: "2021-09-04T00:00:00Z",
        },
        {
          id: "5",
          value: "49.99EUR",
          timestamp: "2021-09-05T00:00:00Z",
        },
    ];
    

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        
      </div>
      <div className="rounded-md border border-black">
        <Table className="border border-black">
          <TableHeader className="border border-black">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="border border-black">
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className="border border-black">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody className="border border-black">
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className="border border-black"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="border border-black">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow className="border border-black">
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center border border-black"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default PaymentsTable;