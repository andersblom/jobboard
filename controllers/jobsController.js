const mongoose = require("mongoose");

const JobPosting = mongoose.model("JobPosting");

exports.browseAll = (req, res) => {
    
    JobPosting.find({
        isActive: true
    }, (err, jobs) => {
        res.render("browseJobs", {
            title: "Browse jobs",
            jobs: jobs,
        });
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
    JobPosting.findById(req.params.jobId, (err, job) => {
        res.render("singleJob", {
            title: "Single job",
            jobDetails: job
        })
    })
}