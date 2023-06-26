import { Schema, model, models } from "mongoose";

const DepartmentSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      minLength: [2, "Name should be atleast 4 characters long"],
      maxLength: [30, "Name should be less than 30 characters"],
    },
  },
  {
    timestamps: true,
  }
);

const Department = models.Department || model("Department", DepartmentSchema);

export default Department;
