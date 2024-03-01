package com.app.dtos;

public class Email {

	
	private String email;
	private String message;
	private String subject;
	
	
	
	public Email() {
	}



	public Email(String email, String message, String subject) {
		this.email = email;
		this.message = message;
		this.subject = subject;
	}



	public String getEmail() {
		return email;
	}



	public void setEmail(String email) {
		this.email = email;
	}



	public String getMessage() {
		return message;
	}



	public void setMessage(String message) {
		this.message = message;
	}



	public String getSubject() {
		return subject;
	}



	public void setSubject(String subject) {
		this.subject = subject;
	}
	
	
	
}
