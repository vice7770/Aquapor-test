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
import { useGetInvoices } from "@/app/hooks/invoices"
import queryClient from "@/lib/queryClient"
import { QueryClientProvider } from "@tanstack/react-query"

function PlanetsTableComponent() {

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

    const { data : invoices, isLoading, isError } = useGetInvoices();

    const sortedInvoices = useMemo(() => {
      return invoices ? [...invoices].sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()) : [];
  }, [invoices]);
    
  const table = useReactTable({
    data: sortedInvoices || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  })
  if (isLoading) return <div className="flex w-full h-[500px] justify-center items-center">Loading...</div>;
  if (isError) return <div className="flex w-full h-full justify-center items-center">Error loading data</div>;

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

const PaymentsTable = () => (
    <QueryClientProvider client={queryClient}>
      <PlanetsTableComponent />
    </QueryClientProvider>
);
  

export default PaymentsTable;