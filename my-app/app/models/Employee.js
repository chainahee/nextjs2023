import mongoose, { Schema } from "mongoose";

const employeeSchema = new Schema(
  {
    employeeid: { type: String },
    fullname: { type: String },
    department: { type: String },
    branch: { type: String },
    status: { type: String },
  },
  { timestamps: true, versionKey: false }
);

const Employee = mongoose.models.Employee || mongoose.model("Employee", employeeSchema);

export default Employee;
