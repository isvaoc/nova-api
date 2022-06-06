const { Schema, model } = require('mongoose');
const Project = new Schema(
    {
        AccountName: { type: String, required: true },
        ProjectAccountID: { type: Number, required: true },
        ProjectID: { type: Number, required: true },
        ProjectName: { type: String, required: true },
        ProjectCategories: { type: Array, required: true },
        ProjectColor: { type: String, required: true },
        ProjectStartDate: { type: String, required: true },
        ProjectEndDate: { type: String, required: true },
        ProjectIsActive: { type: Boolean, required: true },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);
module.exports = model('Project', Project);