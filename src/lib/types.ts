import type { ReactNode } from "react";

export type DepartmentConfigType = {
  [key: string]: {
    color: string;
    bg: string;
    icon: ReactNode;
  };
};

export type Employee = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  department: string;
  position: string;
  salary: number;
  hireDate: string;
  age: number;
  location: string;
  performanceRating: number;
  projectsCompleted: number;
  isActive: boolean;
  skills: string[];
  manager: string | null;
};

export type ThemeMode = "light" | "dark";
