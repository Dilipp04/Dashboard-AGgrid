import { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import {
  themeQuartz,
  type ColDef,
  type ICellRendererParams,
} from "ag-grid-community";
import Data from "@/data.json";
import type { Employee } from "@/lib/types";
import { Briefcase } from "lucide-react";
import { departmentConfig } from "@/lib/config";

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
      cellRenderer: (params: ICellRendererParams<Employee>) => {
        return (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              height: "100%",
            }}>
            <img
              src="https://www.photopacks.ai/static/personas/examples/casual_4.jpeg"
              alt="profile"
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />

            <span>
              {params.data?.firstName} {params.data?.lastName}
            </span>
          </div>
        );
      },
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
      cellRenderer: (params: ICellRendererParams<Employee>) => {
        const dept = params.value;

        const config = departmentConfig[dept] || {
          color: "#374151",
          bg: "#f3f4f6",
          icon: <Briefcase size={14} />,
        };

        return (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              // gap: "8px",

              height: "100%",
            }}>
            <div
              style={{
                height: "30px",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
                padding: "4px 10px",
                borderRadius: "10px",
                // backgroundColor: config.bg,
                // color: config.color,
                fontWeight: 600,
                fontSize: "12px",
                border: `3px solid ${config.color}`,
              }}>
              {config.icon}
              <span>{dept}</span>
            </div>
          </div>
        );
      },
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
      cellRenderer: (params: ICellRendererParams<Employee>) => (
        <span
          style={{
            padding: "4px 10px",
            borderRadius: "8px",
            backgroundColor: params.value >= 4 ? "#dcfce7" : "#fee2e2",
            color: params.value >= 4 ? "#166534" : "#991b1b",
            fontWeight: "bold",
          }}>
          ⭐ {params.value}
        </span>
      ),
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
      cellRenderer: (params: ICellRendererParams<Employee>) => (
        <span
          style={{
            padding: "4px 10px",
            borderRadius: "8px",
            backgroundColor: params.value ? "#dcfce7" : "#fee2e2",
            color: params.value ? "#166534" : "#991b1b",
            fontWeight: "bold",
          }}>
          {params.value ? "Active" : "Inactive"}
        </span>
      ),
    },

    {
      field: "skills",
      headerName: "SKILLS ",
      flex: 2,
      filter: true,
      minWidth: 250,
      width: 250,
      cellRenderer: (params: ICellRendererParams<Employee>) => (
        <div>
          {params.value.map((skill: string, index: number) => (
            <span
              key={index}
              style={{
                marginLeft: "5px",
                background: "#e0e7ff",
                color: "#3730a3",
                padding: "4px 8px",
                borderRadius: "12px",
                fontSize: "12px",
              }}>
              {skill}
            </span>
          ))}
        </div>
      ),
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
