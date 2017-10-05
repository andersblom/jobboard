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

exports.createJobEntry = async (req, res) => {
    try {  
        const jobEntry = await (new JobPosting(req.body)).save();
        req.flash("success", "Created job posting!");
        res.redirect(`/job/${jobEntry._id}`);
    } catch (err) {
        res.render("error", err);
    }
}

exports.viewSingleJob = (req, res) => {
    console.log(res.locals.flashes);
    res.render("singleJob", {
        title: "Single job"
    })
}