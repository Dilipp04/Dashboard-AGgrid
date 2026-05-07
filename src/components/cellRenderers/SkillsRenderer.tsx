import type { ICellRendererParams } from "ag-grid-community";
import type { Employee } from "@/lib/types";

const SkillsRenderer = (params: ICellRendererParams<Employee>) => {
  return (
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
  );
};

export default SkillsRenderer;
