const mongoose = require("mongoose");

const JobPosting = mongoose.model("JobPosting");

exports.browseAll = (req, res) => {
    res.render("index", {
        title: "Browse jobs",
    });
}