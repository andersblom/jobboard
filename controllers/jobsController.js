const mongoose = require("mongoose");
const md = require("node-markdown").Markdown;

const JobPosting = mongoose.model("JobPosting");

exports.browseAll = async (req, res) => {
    try {
        let allJobs = await JobPosting.find({
            isActive: true
        }, (err, jobs) => {
            return jobs
        }).sort({
            createdDate: -1
        });
    
        res.render("browseJobs", {
            title: "Browse jobs",
            jobs: allJobs,
        });
    } catch (err) {
        res.render("error", err);
    }
}

exports.createJob = (req, res) => {
    try {
        res.render("createJob", {
            title: "Create job",
        });
    } catch (err) {
        res.render("error", err);
    }
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

exports.viewSingleJob = async (req, res) => {
    try {
        let jobToView = await JobPosting.findById(req.params.jobId, (err, job) => {
            return job;
        });
        
        res.render("singleJob", {
            title: "Single job",
            jobDetails: jobToView,
            md: md
        })
    } catch (err) {
        res.render("error", err);
    }
}