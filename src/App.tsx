import { AllCommunityModule } from "ag-grid-community";
import { AgGridProvider } from "ag-grid-react";
import Dashboard from "./components/Dashboard";
import { Button } from "./components/ui/button";
import { useEffect, useState } from "react";
import type { ThemeMode } from "./lib/types";
// import "ag-grid-community/styles/ag-grid.css";
// import "ag-grid-community/styles/ag-theme-alpine.css";

const modules = [AllCommunityModule];

function App() {
  const [themeMode, setThemeMode] = useState<ThemeMode>("dark");

  useEffect(() => {
    document.body.dataset.agThemeMode = themeMode;
  }, [themeMode]);

  // Toggle theme mode
  const toggleThemeMode = () => {
    setThemeMode((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <AgGridProvider modules={modules}>
      <div
        className={`p-6 bg-gr min-h-screen bg-background text-foreground ${themeMode === "dark" ? "dark" : ""}`}>
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold mb-6">
            Employee Management Dashboard
          </h1>

          <Button className="" onClick={toggleThemeMode}>
            {themeMode === "dark" ? "Enable Light Mode" : "Enable Dark Mode"}
          </Button>
        </div>
        <Dashboard />
      </div>
    </AgGridProvider>
  );
}

export default App;
