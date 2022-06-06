const { Schema, model } = require('mongoose');
const User = new Schema(
    {
        Address: { type: String, required: true },
        AvailableTravel: { type: Boolean, required: true },
        BloodType: { type: String, required: true },
        ContactPhoneNumber: { type: String, required: true },
        CountryCode: { type: Number, required: true },
        CountryName: { type: String, required: true },
        PassportExpirationDate: { type: String, required: true },
        VisaExpirationDate: { type: String, required: true },
        EmergencyNamePerson: { type: String, required: true },
        EmergencyPhoneNumber: { type: String, required: true },
        EmployeeDetailID: { type: Number, required: true },
        EmployeeID: { type: Number, required: true },
        EmployeeName: { type: String, required: true },
        EmployeeTypeName: { type: String, required: true },
        GNPPolicyNumber: { type: String, required: true },
        GenderID: { type: Number, required: true },
        GenderName: { type: String, required: true },
        HasPassport: { type: Boolean, required: true },
        HasVisa: { type: Boolean, required: true },
        IsMarried: { type: Boolean, required: true },
        LastName: { type: String, required: true },
        LocationName: { type: String, required: true },
        NumberChildren: { type: Number, required: true },
        OfficeLocationID: { type: Number, required: true },
        PassportNumber: { type: String, required: true },
        ReasonNoTravel: { type: String, required: true },
        RoutePhoto: { type: String, required: true },
        SisNovaPolicyNumber: { type: String, required: true },
        SkypeForBussinessUser: { type: String, required: true },
        SkypeUser: { type: String, required: true },
        StartDate: { type: String, required: true },
        VisaNumber: { type: String, required: true },
        VisaType: { type: String, required: true }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);
module.exports = model('User', User);