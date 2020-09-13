package com.rashmit.proto.jobportalbe.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rashmit.proto.jobportalbe.model.Job;
import com.rashmit.proto.jobportalbe.repository.JobRepository;

@Service
public class JobService {

	@Autowired
	private JobRepository jobRepository;

	

	public List<Job> getAllJobs() {
		List<Job> jobs = new ArrayList<Job>();
		jobRepository.findAll().forEach(job1 -> jobs.add(job1));
		return jobs;
	}
	
	public void saveOrUpdate(Job job) {
		
		jobRepository.save(job);

	}

	public void delete(long jobid) {
		jobRepository.deleteById(jobid);
	}

	public void saveJob(Job job) {
		// TODO Auto-generated method stub
		
	}
	

}
