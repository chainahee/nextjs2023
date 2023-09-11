const mongoose = require("mongoose");

const borrowSchema = new mongoose.Schema(
  {
    employee: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee", // ระบุชื่อโมเดลของพนักงาน
      required: true,
    },
    device: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Device", // ระบุชื่อโมเดลของอุปกรณ์
      required: true,
    },
    // เพิ่มเขตข้อมูลเพิ่มเติมตามต้องการ เช่น วันที่ยืม, วันที่คืน, สถานะ, หมายเหตุ, เป็นต้น
    borrowedDate: {
      type: Date,
      required: true,
    },
    returnedDate: {
      type: Date,
    },
    status: {
      type: String,
      enum: ["Borrowed", "Returned"], // หรือกำหนดสถานะอื่นๆ ตามที่ต้องการ
      default: "Borrowed",
    },
    // อื่นๆที่ต้องการเพิ่มเติม
  },
  { timestamps: true, versionKey: false }
);

const Borrow = mongoose.model("Borrow", borrowSchema);

module.exports = Borrow;
