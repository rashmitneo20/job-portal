package com.rashmit.proto.jobportalbe.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class JobPortalAdviceController {
	
	@ExceptionHandler(value = RuntimeException.class)
	   public ResponseEntity<Object> exception(RuntimeException exception) {
	      return new ResponseEntity<>("Exception occured ", HttpStatus.NOT_FOUND);
	   }

}
