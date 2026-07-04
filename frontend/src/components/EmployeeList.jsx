import EmployeeCard from "./EmployeeCard";

function EmployeeList({ employees, deleteEmployee }) {
  return (
    <div className="grid">
      {employees.map((employee) => (
        <EmployeeCard
          key={employee._id}
          employee={employee}
          deleteEmployee={deleteEmployee}
        />
      ))}
    </div>
  );
}

export default EmployeeList;