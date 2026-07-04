import { useEffect, useState } from "react";
import axios from "axios";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";
import "./App.css";

const API = "http://localhost:5000/api/employees";

function App() {
  const [employees, setEmployees] = useState([]);

  const fetchEmployees = async () => {
    try {
      const res = await axios.get(API);
      setEmployees(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const addEmployee = async (employee) => {
    try {
      await axios.post(API, employee);
      fetchEmployees();
    } catch (err) {
      console.log(err);
    }
  };

  const deleteEmployee = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      fetchEmployees();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <h1>Employee Directory</h1>

      <EmployeeForm addEmployee={addEmployee} />

      <EmployeeList
        employees={employees}
        deleteEmployee={deleteEmployee}
      />
    </div>
  );
}

export default App;