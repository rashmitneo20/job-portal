package com.rashmit.proto.jobportalbe.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.rashmit.proto.jobportalbe.model.Job;
import com.rashmit.proto.jobportalbe.service.JobService;

@RestController
@RequestMapping("/jobs")
@CrossOrigin(origins = "http://localhost:3000")
public class JobController {
	
	@Autowired
	private JobService jobService;
	
	@GetMapping("/all")
	@ResponseStatus(HttpStatus.OK)
	public List<Job> getAllJobs() {
		System.out.println("calling service");
		return jobService.getAllJobs();
		
	}
	
	@PostMapping("/add")
	@ResponseStatus(HttpStatus.CREATED)
	public String addJob(@RequestBody Job j) {
		long newId = jobService.addJobs(j);
		return ("Added new Job with Id : " + newId);
		
	}
	
	@PutMapping("/update")
	@ResponseStatus(HttpStatus.OK)
	public Job updateJobStatus(@RequestBody Job j) {
		Job updatedJob = jobService.updateJobStatus(j);
		return updatedJob;
		
	}

}
