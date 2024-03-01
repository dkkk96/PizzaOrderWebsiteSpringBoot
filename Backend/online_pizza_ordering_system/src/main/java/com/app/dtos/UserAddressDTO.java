package com.app.dtos;

import java.util.Date;

import com.app.entities.Address;

public class UserAddressDTO {
	private int userId;	
	private String role;
	private String gender;
	private Date dateOfBirth;
	private Address address;
	
	
	
	public UserAddressDTO() {
	}



	public int getUserId() {
		return userId;
	}



	public void setUserId(int userId) {
		this.userId = userId;
	}



	public String getRole() {
		return role;
	}



	public void setRole(String role) {
		this.role = role;
	}



	public String getGender() {
		return gender;
	}



	public void setGender(String gender) {
		this.gender = gender;
	}



	public Date getDateOfBirth() {
		return dateOfBirth;
	}



	public void setDateOfBirth(Date dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}



	public Address getAddress() {
		return address;
	}



	public void setAddress(Address address) {
		this.address = address;
	}

	

	
	
	

}
