const mongoose = require("mongoose");

const jobPostingSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: "Please provide a title"
    },
    body: String,
    company: {
        type: String,
        trim: true,
        required: "Please enter a company"
    },
    jobField: {
        type: String,
        trim: true,
        required: "Please select a field for this job"
    },
    city: String,
    country: String,
    createdDate: {
        type: Date,
        default: Date.now,
    },
    expiryDate: Date,
    isActive: {
        type: Boolean,
        default: true,
    }
});

module.exports = mongoose.model("JobPosting", jobPostingSchema);