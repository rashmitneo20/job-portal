package com.rashmit.proto.jobportalbe.model;

import javax.persistence.Entity;
import javax.persistence.Table;

import org.springframework.data.annotation.Id;

@Entity
@Table
public class Job {

	@Id
	private long id;
	private String name;
	private String jobLocation;
	private String description;

	public Job() {
	}

	public Job(long id, String name, String jobLocation, String description) {
		this.id = id;
		this.name = name;
		this.jobLocation = jobLocation;
		this.description = description;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getJobLocation() {
		return jobLocation;
	}

	public void setJobLocation(String jobLocation) {
		this.jobLocation = jobLocation;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

}
