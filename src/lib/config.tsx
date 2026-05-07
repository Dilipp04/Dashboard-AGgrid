import type { DepartmentConfigType } from "./types";
import { Code2, Briefcase, Megaphone, Users, ShieldCheck } from "lucide-react";

export const departmentConfig: DepartmentConfigType = {
  Engineering: {
    color: "#2563eb",
    bg: "#dbeafe",
    icon: <Code2 size={14} />,
  },
  Marketing: {
    color: "#db2777",
    bg: "#fce7f3",
    icon: <Megaphone size={14} />,
  },
  HR: {
    color: "#7c3aed",
    bg: "#ede9fe",
    icon: <Users size={14} />,
  },
  Finance: {
    color: "#059669",
    bg: "#d1fae5",
    icon: <Briefcase size={14} />,
  },
  Security: {
    color: "#ea580c",
    bg: "#ffedd5",
    icon: <ShieldCheck size={14} />,
  },
};
