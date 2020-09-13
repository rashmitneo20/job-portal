package com.rashmit.proto.jobportalbe.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rashmit.proto.jobportalbe.model.Job;

public interface JobRepository extends JpaRepository<Job, Long>{

}
