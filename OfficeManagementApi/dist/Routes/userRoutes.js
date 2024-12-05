"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authController_1 = require("../Controller/authController");
const employeeController_1 = require("../Controller/employeeController");
const departmentController_1 = require("../Controller/departmentController");
const router = express_1.default.Router();
// Auth Routes
router.get('/auth/login', authController_1.loginUser);
// Employee Routes
router.get('/employees', employeeController_1.getEmployees);
router.post('/employees', employeeController_1.createEmployee);
router.put('/employees/:id', employeeController_1.updateEmployee);
router.delete('/employees/:id', employeeController_1.deleteEmployee);
// Department Routes
router.get('/departments', departmentController_1.getDepartments);
router.post('/departments', departmentController_1.createDepartment);
router.put('/departments/:id', departmentController_1.updateDepartment);
router.delete('/departments/:id', departmentController_1.deleteDepartment);
exports.default = router;
