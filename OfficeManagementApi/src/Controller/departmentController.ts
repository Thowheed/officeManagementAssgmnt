import { Request, Response } from 'express';
import Department from '../models/Department';

export const getDepartments = async (req: Request, res: Response):Promise<any> => {
  try {
    const departments = await Department.find();
    res.json(departments);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const createDepartment = async (req: Request, res: Response):Promise<any> => {
  const { name, description } = req.body;
  console.log("ini=side create dept..")

  try {
    const newDepartment = new Department({ name, description });
    await newDepartment.save();
    res.status(201).json(newDepartment);
  } catch (err) {
    res.status(400).json({ message: 'Failed to create department' });
  }
};

export const updateDepartment = async (req: Request, res: Response):Promise<any> => {
  const { id } = req.params;
  const updateData = req.body;

  try {
    const updatedDepartment = await Department.findByIdAndUpdate(id, updateData, { new: true });
    if (!updatedDepartment) return res.status(404).json({ message: 'Department not found' });
    res.json(updatedDepartment);
  } catch (err) {
    res.status(400).json({ message: 'Failed to update department' });
  }
};

export const deleteDepartment = async (req: Request, res: Response):Promise<any> => {
  const { id } = req.params;

  try {
    const deletedDepartment = await Department.findByIdAndDelete(id);
    if (!deletedDepartment) return res.status(404).json({ message: 'Department not found' });
    res.json({ message: 'Department deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
