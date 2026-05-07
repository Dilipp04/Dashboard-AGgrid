import type { ICellRendererParams } from "ag-grid-community";
import type { Employee } from "@/lib/types";

const FullNameRenderer = (params: ICellRendererParams<Employee>) => {
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
};

export default FullNameRenderer;
