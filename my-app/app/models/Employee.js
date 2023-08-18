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

employeeSchema.pre("save", function (next) {
  if (this.isModified("employeeid")) {
    this.employeeid = this.employeeid.padStart(4, '0');
  }
  next();
});

const Employee = mongoose.models.Employee || mongoose.model("Employee", employeeSchema);

export default Employee;
