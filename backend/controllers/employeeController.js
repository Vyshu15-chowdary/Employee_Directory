import Employee from "../models/Employee.js";

// Get All Employees
export const getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();

    res.json(employees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add Employee
export const addEmployee = async (req, res) => {
  try {
    const employee = await Employee.create(req.body);

    res.status(201).json(employee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete Employee
export const deleteEmployee = async (req, res) => {
  try {
    await Employee.findByIdAndDelete(req.params.id);

    res.json({
      message: "Employee Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};