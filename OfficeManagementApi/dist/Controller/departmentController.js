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
exports.deleteDepartment = exports.updateDepartment = exports.createDepartment = exports.getDepartments = void 0;
const Department_1 = __importDefault(require("../models/Department"));
const getDepartments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const departments = yield Department_1.default.find();
        res.json(departments);
    }
    catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});
exports.getDepartments = getDepartments;
const createDepartment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, description } = req.body;
    console.log("ini=side create dept..");
    try {
        const newDepartment = new Department_1.default({ name, description });
        yield newDepartment.save();
        res.status(201).json(newDepartment);
    }
    catch (err) {
        res.status(400).json({ message: 'Failed to create department' });
    }
});
exports.createDepartment = createDepartment;
const updateDepartment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const updateData = req.body;
    try {
        const updatedDepartment = yield Department_1.default.findByIdAndUpdate(id, updateData, { new: true });
        if (!updatedDepartment)
            return res.status(404).json({ message: 'Department not found' });
        res.json(updatedDepartment);
    }
    catch (err) {
        res.status(400).json({ message: 'Failed to update department' });
    }
});
exports.updateDepartment = updateDepartment;
const deleteDepartment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const deletedDepartment = yield Department_1.default.findByIdAndDelete(id);
        if (!deletedDepartment)
            return res.status(404).json({ message: 'Department not found' });
        res.json({ message: 'Department deleted' });
    }
    catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});
exports.deleteDepartment = deleteDepartment;
