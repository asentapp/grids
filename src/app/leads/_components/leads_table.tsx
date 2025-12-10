"use client";

import {
  ColumnDef,
  ColumnFiltersState,
  PaginationState,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from "@/components/ui/button";
import { DataTablePagination } from "@/components/data-table/pagination";
import DataTableSearch from "@/components/data-table/search";
import { DataTableViewOptions } from "@/components/data-table/view-options";
import { Plus } from "lucide-react";
import { useState } from "react";
import { Lead } from "@/types";
import { DataTableHeaderCheckbox } from "@/components/data-table/header-checkbox";
import { DataTableCheckbox } from "@/components/data-table/checkbox";
import { DataTableColumnHeader } from "@/components/data-table/column-header";
import { DataTableField } from "@/components/data-table/custom-fields/field";


export const LeadsColumns: ColumnDef<Lead>[] = [
  {
    id: "select",
    header: DataTableHeaderCheckbox,
    cell: DataTableCheckbox,
  },
  {
    accessorKey: "company",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Lead Name" />
    ),
    cell: DataTableField,
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: DataTableField,
  },
  {
    accessorKey: "website",
    header: "Website",
    cell: DataTableField,
  },
  {
    accessorKey: "phone",
    header: "Phone",
    cell: DataTableField,
  },
  {
    accessorKey: "address",
    header: "Address",
    cell: DataTableField,
  },
]


interface LeadsTableProps<TData, TValue> {
  tableData: TData[];
}

export function LeadsTable<TData, TValue>({
  tableData,
}: LeadsTableProps<TData, TValue>) {
  const [data, setData] = useState<TData[]>(tableData);
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable<TData>({
    data,
    columns: LeadsColumns as ColumnDef<TData, TValue>[],
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    state: {
      pagination,
      columnFilters,
      sorting,
    },
  });

  return (
    <>
      <section className="px-6 py-4 flex flex-col justify-between h-screen">
        <div className="flex flex-col gap-4">
          <div className="flex flex-row items-center justify-between">
            <h1 className="text-xl font-semibold">Leads</h1>
            <div className="flex flex-row gap-2">
              <div>
                <DataTableViewOptions table={table} primaryField="company" />
              </div>
              <DataTableSearch
                table={table}
                primaryField="company"
                primaryFieldPrettyName="Lead"
              />
              <Button className="flex flex-row gap-1 max-h-7 max-w-28 rounded-lg ">
                <Plus className="h-4 w-4" />
                <span>Add Lead</span>
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <Table>
              <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                      return (
                        <TableHead key={header.id}>
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                        </TableHead>
                      );
                    })}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody>
                {table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map((row) => (
                    <TableRow
                      key={row.id}
                      data-state={row.getIsSelected() && "selected"}
                    >
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={LeadsColumns.length}
                      className="h-24 text-center"
                    >
                      No results.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>
        <div>
          <DataTablePagination table={table} />
        </div>
      </section>
    </>
  );
}
