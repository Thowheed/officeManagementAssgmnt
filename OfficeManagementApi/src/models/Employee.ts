import mongoose, { Document, Schema } from 'mongoose';
import { IDepartment } from './Department';

export interface IEmployee extends Document {
  name: string;
  age: number;
  departmentId: mongoose.Types.ObjectId | IDepartment;
  isActive: boolean;
  gender: 'Male' | 'Female' | 'Other';
  nationality: string;
}

const EmployeeSchema: Schema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  departmentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Department', required: true },
  isActive: { type: Boolean, default: true },
  gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
  nationality: { type: String, required: true },
});

const Employee = mongoose.model<IEmployee>('Employee', EmployeeSchema);
export default Employee;
