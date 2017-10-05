const mongoose = require("mongoose");

const JobPosting = mongoose.model("JobPosting");

exports.browseAll = (req, res) => {
    res.render("browseJobs", {
        title: "Browse jobs",
    });
}

exports.createJob = (req, res) => {
    res.render("createJob", {
        title: "Create job",
    });
}