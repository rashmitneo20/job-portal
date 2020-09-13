package com.rashmit.proto.jobportalbe.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rashmit.proto.jobportalbe.model.Job;
import com.rashmit.proto.jobportalbe.repository.JobRepository;
import com.rashmit.proto.jobportalbe.service.JobService;

@RestController
@RequestMapping("jobs")
public class JobController {

	@Autowired
	private JobService jobService;

	@GetMapping("/all")
	private List<Job> getAllBooks() {
		return jobService.getAllJobs();
	}

	// creating a delete mapping that deletes a specified book
	@DeleteMapping("/delete/{jobid}")
	private void deleteBook(@PathVariable("jobid") int jobid) {
		jobService.delete(jobid);
	}

//	public String addJob(@RequestBody Job job) {
//		jobRepository.save(job);
//		return "Job Added";
//	}
	@PostMapping("/addjob")
	private long saveJob(@RequestBody Job job) {
		jobService.saveJob(job);
		return job.getId();
	}

	@PutMapping("/updatejob")
	private Job update(@RequestBody Job job) {
		jobService.saveOrUpdate(job);
		return job;
	}

}
