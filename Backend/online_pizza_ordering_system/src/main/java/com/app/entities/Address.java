package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name="address")
public class Address {

	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	@Column(name = "address_id")
	private int addressId;
	@Column(name = "line_1",length = 200)
	private String line1;
	@Column(name = "line_2",length = 200)
	private String line2;
	@Column(length = 50)
	private String city;
	@Column(length = 50)
	private String district;
	@Column(length = 50)
	private String state;
	@Column(name = "pin_code")
	private int pinCode;
	
	@JsonBackReference
	@OneToOne
	@JoinColumn(name = "user_id")
	private User user;
	
	
	public Address() {
	}


	public Address(int addressId, String line1, String line2, String city, String district, String state, int pinCode,
			User user) {
		this.addressId = addressId;
		this.line1 = line1;
		this.line2 = line2;
		this.city = city;
		this.district = district;
		this.state = state;
		this.pinCode = pinCode;
		this.user = user;
	}


	public Address(int addressId, String line1, String line2, String city, String district, String state, int pinCode) {
		this.addressId = addressId;
		this.line1 = line1;
		this.line2 = line2;
		this.city = city;
		this.district = district;
		this.state = state;
		this.pinCode = pinCode;
	}


	public int getAddressId() {
		return addressId;
	}


	public void setAddressId(int addressId) {
		this.addressId = addressId;
	}


	public String getLine1() {
		return line1;
	}


	public void setLine1(String line1) {
		this.line1 = line1;
	}


	public String getLine2() {
		return line2;
	}


	public void setLine2(String line2) {
		this.line2 = line2;
	}


	public String getCity() {
		return city;
	}


	public void setCity(String city) {
		this.city = city;
	}


	public String getDistrict() {
		return district;
	}


	public void setDistrict(String district) {
		this.district = district;
	}


	public String getState() {
		return state;
	}


	public void setState(String state) {
		this.state = state;
	}


	public int getPinCode() {
		return pinCode;
	}


	public void setPinCode(int pinCode) {
		this.pinCode = pinCode;
	}


	public User getUser() {
		return user;
	}


	public void setUser(User user) {
		this.user = user;
	}


	@Override
	public String toString() {
		return String.format(
				"Address [addressId=%s, line1=%s, line2=%s, city=%s, district=%s, state=%s, pinCode=%s, user=%s]",
				addressId, line1, line2, city, district, state, pinCode, user);
	}


	
	
	
	
	
	
	
}
