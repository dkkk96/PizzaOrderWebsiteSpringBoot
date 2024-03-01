package com.app.dtos;



public class Credential {

	private String email;
	private String password;
	private String mobileNo;
	
	public Credential() {
	}
	
	
	
	
	public Credential(String email, String password, String mobileNo) {
		this.email = email;
		this.password = password;
		this.mobileNo = mobileNo;
	}




	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}




	public String getMobileNo() {
		return mobileNo;
	}




	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
	}




	@Override
	public String toString() {
		return String.format("Credential [email=%s, password=%s, mobileNo=%s]", email, password, mobileNo);
	}
	
	

}
