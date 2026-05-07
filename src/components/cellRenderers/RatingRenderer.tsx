import type { ICellRendererParams } from "ag-grid-community";
import type { Employee } from "@/lib/types";

const RatingRenderer = (params: ICellRendererParams<Employee>) => {
  return (
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
  );
};

export default RatingRenderer;
