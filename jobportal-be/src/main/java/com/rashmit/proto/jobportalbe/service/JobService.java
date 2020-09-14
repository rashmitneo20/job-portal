package com.rashmit.proto.jobportalbe.service;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.stereotype.Service;

import com.rashmit.proto.jobportalbe.model.Job;

@Service
public class JobService {
	
	List<Job> jobs = new ArrayList<Job>();
	
	@PostConstruct
	public void createJobs() {
		jobs.add(new Job(1, "A1", "Software Engieerr 1", "Pune", "Description 1"));
		jobs.add(new Job(2,"A2", "Software Engieerr 2", "Mumbai", "Description 2"));
		jobs.add(new Job(3,"A3", "Software Engieerr 3", "Bangalore", "Description 3"));
		jobs.add(new Job(4,"A4", "Software Engieerr 4", "NY", "Description 4"));
		jobs.add(new Job(5,"A5", "Software Engieerr 5", "Milan", "Description 5"));
	}

	public List<Job> getAllJobs() {
		// TODO Auto-generated method stub
		return jobs;
	}

}
