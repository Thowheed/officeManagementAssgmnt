import { Request, Response } from 'express';
import Employee, { IEmployee } from '../models/Employee';
import Department from '../models/Department';

export const getEmployees = async (req: Request, res: Response): Promise<any> => {
  try {
    const employees = await Employee.find().populate('departmentId', 'name');
    res.json(employees);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const createEmployee = async (req: Request, res: Response): Promise<any> => {
  const { name, age, departmentId, isActive, gender, nationality } = req.body;

  try {
    const newEmployee = new Employee({
      name, age, departmentId, isActive, gender, nationality
    });
    await newEmployee.save();
    res.status(201).json(newEmployee);
  } catch (err) {
    console.log("Error_inside_createEmployee:: ", err)
    res.status(400).json({ message: 'Failed to create employee' });
  }
};

export const updateEmployee = async (req: Request, res: Response): Promise<any> => {
  const { id } = req.params;
  const updateData = req.body;

  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(id, updateData, { new: true });
    if (!updatedEmployee) return res.status(404).json({ message: 'Employee not found' });
    res.json(updatedEmployee);
  } catch (err) {
    res.status(400).json({ message: 'Failed to update employee' });
  }
};

export const deleteEmployee = async (req: Request, res: Response): Promise<any> => {
  const { id } = req.params;

  try {
    const deletedEmployee = await Employee.findByIdAndDelete(id);
    if (!deletedEmployee) return res.status(404).json({ message: 'Employee not found' });
    res.json({ message: 'Employee deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
