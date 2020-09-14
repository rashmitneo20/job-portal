package com.rashmit.proto.jobportalbe.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
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

}
