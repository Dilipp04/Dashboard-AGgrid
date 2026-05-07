import { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { themeQuartz, type ColDef } from "ag-grid-community";
import Data from "@/data.json";
import type { Employee } from "@/lib/types";

import FullNameRenderer from "./cellRenderers/FullNameRenderer";
import DepartmentRenderer from "./cellRenderers/DepartmentRenderer";
import RatingRenderer from "./cellRenderers/RatingRenderer";
import StatusRenderer from "./cellRenderers/StatusRenderer";
import SkillsRenderer from "./cellRenderers/SkillsRenderer";

const Dashboard = () => {
  const employeeData: Employee[] = Data;

  const [columnDefs] = useState<ColDef<Employee>[]>([
    {
      field: "id",
      headerName: "ID",
      sortable: true,
      width: 80,
      minWidth: 80,
    },

    {
      headerName: "FULL NAME",
      sortable: true,
      filter: true,
      flex: 1,
      width: 160,
      minWidth: 180,
      valueGetter: (params) =>
        `${params.data?.firstName} ${params.data?.lastName}`,
      cellRenderer: FullNameRenderer,
    },

    {
      field: "email",
      headerName: "EMAIL",
      sortable: true,
      filter: true,
      flex: 1.5,
      width: 150,
      minWidth: 150,
    },

    {
      field: "department",
      headerName: "DEPARTMENT",
      sortable: true,
      width: 150,
      minWidth: 150,
      cellRenderer: DepartmentRenderer,
    },

    {
      field: "position",
      headerName: "POSITION",
      sortable: true,
      flex: 1.5,
      width: 180,
      minWidth: 180,
    },

    {
      field: "salary",
      headerName: "SALARY",
      filter: true,
      sortable: true,
      width: 120,
      valueFormatter: (params) => `$${params.value.toLocaleString()}`,
    },

    {
      field: "age",
      headerName: "AGE",
      sortable: true,
      width: 70,
    },

    {
      field: "location",
      headerName: "LOCATION",
      sortable: true,
      filter: true,
      width: 120,
    },

    {
      field: "performanceRating",
      headerName: "RATING",
      sortable: true,
      filter: true,
      width: 120,
      cellRenderer: RatingRenderer,
    },

    {
      field: "projectsCompleted",
      headerName: "PROJECTS",
      sortable: true,
      width: 120,
    },

    {
      field: "manager",
      headerName: "MANAGER",
      sortable: true,
      width: 140,
    },

    {
      field: "isActive",
      headerName: "STATUE",
      sortable: true,
      width: 120,
      cellRenderer: StatusRenderer,
    },

    {
      field: "skills",
      headerName: "SKILLS ",
      flex: 2,
      filter: true,
      minWidth: 250,
      width: 250,
      cellRenderer: SkillsRenderer,
    },
  ]);

  const myTheme = themeQuartz
    .withParams(
      {
        browserColorScheme: "light",
      },
      "light",
    )
    .withParams(
      {
        backgroundColor: "#141D2C",
        foregroundColor: "#FFF",
        headerBackgroundColor: "#1F2836",
        selectedRowBackgroundColor: "rgba(110, 168, 254, 0.2)",
        spacing: 10,
        fontSize: 14,
      },
      "dark",
    );

  return (
    <div
      className="ag-theme-alpine rounded-2xl shadow-lg overflow-hidden w-full font-semibold border-2"
      style={{ height: 600, fontSize: "12px" }}>
      <AgGridReact
        rowData={employeeData}
        rowHeight={62}
        columnDefs={columnDefs}
        animateRows={true}
        theme={myTheme}
        scrollbarWidth={0}
      />
    </div>
  );
};

export default Dashboard;
