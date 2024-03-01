package com.app.dtos;

public class AddressDTO {
	
	private int addressId;
	private String line1;
	private String line2;
	private String city;
	private String district;
	private String state;
	private int pinCode;
	
	public AddressDTO() {
		
	}
	
	

	public AddressDTO(int addressId, String line1, String line2, String city, String district, String state,
			int pinCode) {
		super();
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

	@Override
	public String toString() {
		return String.format(
				"AddressDTO [userId=%s, addressId=%s, line1=%s, line2=%s, city=%s, district=%s, state=%s, pinCode=%s]",
				addressId, line1, line2, city, district, state, pinCode);
	}

	
	
	
	
}
