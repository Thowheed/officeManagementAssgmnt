import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  createdDate: Date;
  modifiedDate: Date;
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: {  type: String,
    required: true,
    unique: true,
    // validate: {
    //   validator: (v: string) => /^\S+@\S+\.\S+$/.test(v),  
    //   message: (props: any) => `${props.value} is not a valid email!`}},
  },
  password: { type: String, required: true },
  createdDate: { type: Date, default: Date.now },
  modifiedDate: { type: Date, default: Date.now },
});


const User = mongoose.model<IUser>('users', UserSchema);
export default User;
