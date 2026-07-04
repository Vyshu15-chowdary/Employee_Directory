function EmployeeCard({ employee, deleteEmployee }) {
  return (
    <div className="card">

      <h2>{employee.name}</h2>

      <p>
        <strong>Email:</strong> {employee.email}
      </p>

      <p>
        <strong>Department:</strong> {employee.department}
      </p>

      <p>
        <strong>Salary:</strong> ₹{employee.salary}
      </p>

      <button
        onClick={() => deleteEmployee(employee._id)}
        className="delete-btn"
      >
        Delete
      </button>

    </div>
  );
}

export default EmployeeCard;