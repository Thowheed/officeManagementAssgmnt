"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEmployee = exports.updateEmployee = exports.createEmployee = exports.getEmployees = void 0;
const Employee_1 = __importDefault(require("../models/Employee"));
const getEmployees = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const employees = yield Employee_1.default.find().populate('departmentId', 'name');
        res.json(employees);
    }
    catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});
exports.getEmployees = getEmployees;
const createEmployee = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, age, departmentId, isActive, gender, nationality } = req.body;
    try {
        const newEmployee = new Employee_1.default({
            name, age, departmentId, isActive, gender, nationality
        });
        yield newEmployee.save();
        res.status(201).json(newEmployee);
    }
    catch (err) {
        console.log("Error_inside_createEmployee:: ", err);
        res.status(400).json({ message: 'Failed to create employee' });
    }
});
exports.createEmployee = createEmployee;
const updateEmployee = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const updateData = req.body;
    try {
        const updatedEmployee = yield Employee_1.default.findByIdAndUpdate(id, updateData, { new: true });
        if (!updatedEmployee)
            return res.status(404).json({ message: 'Employee not found' });
        res.json(updatedEmployee);
    }
    catch (err) {
        res.status(400).json({ message: 'Failed to update employee' });
    }
});
exports.updateEmployee = updateEmployee;
const deleteEmployee = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const deletedEmployee = yield Employee_1.default.findByIdAndDelete(id);
        if (!deletedEmployee)
            return res.status(404).json({ message: 'Employee not found' });
        res.json({ message: 'Employee deleted' });
    }
    catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});
exports.deleteEmployee = deleteEmployee;
