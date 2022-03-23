import { useState } from "react";
import { Icon } from "@iconify/react";
import Button from "../../components/Button";
import Table from "../../components/Table";

import { IProps as TableProps } from "../../components/Table";

const StudentType = () => {
  const columns: TableProps["columns"] = [
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Active",
      accessor: "active",
      Cell: ({ cell: { value } }: any) => {
        const isActive = value === "True" ? "text-success" : "text-danger";
        return <span className={`${isActive}`}>{value}</span>;
      },
    },
  ];

  const [data, setData] = useState<TableProps["data"]>([
    {
      name: "Semester Name One",
      active: "True",
    },
    {
      name: "Semester Name Two",
      active: "False",
    },
  ]);

  const additionalCol = (hooks: any) => {
    hooks.visibleColumns.push((columns: any) => [
      ...columns,
      {
        id: "actions",
        Header: "Actions",
        Cell: ({ row, refs }: any) => {
          return (
            <>
              <Button
                variant="link"
                onClick={() => {
                  alert(row.values.name);
                }}
              >
                <Icon icon="bi:pencil-square" className="inline-block" />{" "}
                <span className="text-ash-gray">Edit</span>
              </Button>

              <Button
                variant="link"
                onClick={() => {
                  alert(row.values.name);
                }}
              >
                <Icon icon="bi:trash" className="inline-block " color="red" />
                <span className="text-ash-gray">Delete</span>
              </Button>
            </>
          );
        },
      },
    ]);
  };

  return (
    <div>
      <p className="text-sm text-primary">Modules &gt; Semester</p>
      <div className="divide-y divide-solid divide-gray">
        <div className="py-2 m-0">
          <Button variant="link">
            <Icon className="inline mr-2" icon={"bi:plus-lg"} />
            Create
          </Button>
          <Button variant="link">
            <Icon className="inline mr-2" icon={"bi:pencil-square"} />
            Edit
          </Button>
          <Button variant="link">
            <Icon className="inline mr-2" icon={"bi:trash3"} />
            Delete
          </Button>
          <Button variant="link">
            <Icon className="inline mr-2" icon={"bi:arrow-repeat"} />
            Refresh
          </Button>
        </div>
        <Table data={data} columns={columns} additionalCol={additionalCol} />
      </div>
    </div>
  );
};

export default StudentType;
