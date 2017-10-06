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

jobPostingSchema.pre("save", function(next) {
    // String replacement: line breaks getting swapped out to <br />'s 
     let newBody = (this.body + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + "<br />" + '$2');
    
     // TODO: Look into creating a cronjob/node-schedule that sets the "active" to false whenever expirty date is reached: https://github.com/node-schedule/node-schedule

     // Sending the new string with <br />'s back 
     this.body = newBody;
     next();
});

module.exports = mongoose.model("JobPosting", jobPostingSchema);