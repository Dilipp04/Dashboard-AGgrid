import type { ICellRendererParams } from "ag-grid-community";
import type { Employee } from "@/lib/types";
import { Briefcase } from "lucide-react";
import { departmentConfig } from "@/lib/config";

const DepartmentRenderer = (params: ICellRendererParams<Employee>) => {
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
          fontWeight: 600,
          fontSize: "12px",
          border: `3px solid ${config.color}`,
        }}>
        {config.icon}
        <span>{dept}</span>
      </div>
    </div>
  );
};

export default DepartmentRenderer;
