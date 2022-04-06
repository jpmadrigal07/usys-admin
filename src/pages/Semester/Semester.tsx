import { Icon } from "@iconify/react";
import { useState } from "react";
import Button from "../../components/Button";
import Table from "../../components/Table";

import { IProps } from "../../components/Table";

const Semester = () => {
  const [columns, setColumns] = useState<IProps["columns"]>([
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Active",
      accessor: "active",
      Cell: ({ cell: { value } }: any) => {
        const isActive = value === "True" ? "text-success" : "text-danger";

        return (
          <>
            <span className={`${isActive}`}>{value} </span>
          </>
        );
      },
    },
  ]);

  const addColumn = (hooks: any) => {
    hooks.visibleColumns.push((columns: any) => [
      ...columns,
      {
        id: "Action",
        Header: "action",
        Cell: ({ row, refs }: any) => {
          return (
            <>
              <Button variant="link" onClick={() => alert(row.values.name)}>
                <Icon icon="bi:pencil-square" className="inline-block" />
                <span className="text-ash-gray">Edit</span>
              </Button>
              <Button variant="link" onClick={() => alert(row.values.name)}>
                <Icon icon="bi:trash" color="red" className="inline-block" />
                <span className="text-ash-gray">Delete</span>
              </Button>
            </>
          );
        },
      },
    ]);
  };

  const [data, setData] = useState<IProps["data"]>([
    {
      name: "Semeter Name 1",
      active: "True",
    },
    {
      name: "Semeter Name 2",
      active: "False",
    },
  ]);

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
        <Table data={data} columns={columns} addColumn={addColumn} />
      </div>
    </div>
  );
};

export default Semester;
