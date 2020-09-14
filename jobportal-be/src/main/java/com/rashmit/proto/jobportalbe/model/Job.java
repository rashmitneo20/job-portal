package com.rashmit.proto.jobportalbe.model;

public class Job {

	private long id;
	private String company;
	private String jobName;
	private String jobLocation;
	private String jobDesc;
	private String status;

	public Job(long id, String company, String jobName, String jobLocation, String jobDesc, String status) {
		this.id = id;
		this.company = company;
		this.jobName = jobName;
		this.jobLocation = jobLocation;
		this.jobDesc = jobDesc;
		this.status = status;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getCompany() {
		return company;
	}

	public void setCompany(String company) {
		this.company = company;
	}

	public String getJobName() {
		return jobName;
	}

	public void setJobName(String jobName) {
		this.jobName = jobName;
	}

	public String getJobLocation() {
		return jobLocation;
	}

	public void setJobLocation(String jobLocation) {
		this.jobLocation = jobLocation;
	}

	public String getJobDesc() {
		return jobDesc;
	}

	public void setJobDesc(String jobDesc) {
		this.jobDesc = jobDesc;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return "Job [id=" + id + ", company=" + company + ", jobName=" + jobName + ", jobLocation=" + jobLocation
				+ ", jobDesc=" + jobDesc + ", status=" + status + "]";
	}

}
