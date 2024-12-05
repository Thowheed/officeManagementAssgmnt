import mongoose, { Document, Schema } from 'mongoose';

export interface IDepartment extends Document {
  name: string;
  description?: string;
}

const DepartmentSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, default: '' },
});

const Department = mongoose.model<IDepartment>('Department', DepartmentSchema);
export default Department;
