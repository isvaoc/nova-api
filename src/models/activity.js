const { Schema, model } = require('mongoose');
const Activity = new Schema(
    { 
        AccountName: { type: String, required: true },
        ActivityDate: { type: String, required: true }, 
        ActivityID:{ type: Number, required: true }, 
        CategoryName:{ type: String, required: true }, 
        Comments: { type: String, required: true }, 
        EmployeeID: { type: Number, required: true }, 
        ProjectColor: { type: String, required: true }, 
        ProjectID: { type: Number, required: true }, 
        ProjectName: { type: String, required: true }, 
        StepID: { type: Number, required: true }, 
        Task: { type: String, required: true }, 
        TypeID: { type: Number, required: true }, 
        value: { type: Number, required: true }, 
        activeInProject: { type: Boolean, required: true }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);
module.exports = model('Activity', Activity);