import express from 'express';
import { loginUser } from '../Controller/authController';
import { getEmployees, createEmployee, updateEmployee, deleteEmployee } from '../Controller/employeeController';
import { getDepartments, createDepartment, updateDepartment, deleteDepartment } from '../Controller/departmentController';

const router = express.Router();

// Auth Routes
router.get('/auth/login', loginUser);

// Employee Routes
router.get('/employees', getEmployees);
router.post('/employees', createEmployee);
router.put('/employees/:id', updateEmployee);
router.delete('/employees/:id', deleteEmployee);

// Department Routes
router.get('/departments', getDepartments);
router.post('/departments', createDepartment);
router.put('/departments/:id', updateDepartment);
router.delete('/departments/:id', deleteDepartment);

export default router;
