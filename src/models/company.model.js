const mongoose = require("mongoose");

const companySchema = mongoose.Schema({
  companyName: {
    type: String,
    required: true,
  },
  cnpj: {
    type: String,
    required: true,
    minlenght: 14,
    maxlenght: 14,
  },
  fantasyName: {
    type: String,
    required: true,
    minlenght: 3,
  },
  description: {
    type: String,
    required: true,
    minlenght: 3,
  },
  adress: {
    type: String,
    required: true,
  },
  primaryPhone: {
    type: String,
    required: true,
    minlenght: 8,
  },
});

const CompanyModel = mongoose.model("Company", companySchema);

module.exports = CompanyModel;
