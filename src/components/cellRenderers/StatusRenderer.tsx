import type { ICellRendererParams } from "ag-grid-community";
import type { Employee } from "@/lib/types";
import { Badge } from "@/components/ui/badge";

const StatusRenderer = (params: ICellRendererParams<Employee>) => {
  return (
    <div>
      {params.value ? (
        <Badge
          variant="outline"
          className="
            bg-green-50
            text-green-700
            border-green-700
            dark:bg-green-950
            dark:text-green-300">
          Active
        </Badge>
      ) : (
        <Badge
          variant="outline"
          className="
            bg-red-50
            border-red-700
            text-red-700
            dark:bg-red-950
            dark:text-red-300">
          Inactive
        </Badge>
      )}
    </div>
  );
};

export default StatusRenderer;
