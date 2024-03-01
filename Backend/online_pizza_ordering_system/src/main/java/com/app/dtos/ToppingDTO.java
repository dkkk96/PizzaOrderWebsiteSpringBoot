package com.app.dtos;

public class ToppingDTO {

	private int toppingId;
	private String toppingName;
	private double toppingPrice;
	
	
	public ToppingDTO() {
	}


	public ToppingDTO(int toppingId, String toppingName, double toppingPrice) {
		this.toppingId = toppingId;
		this.toppingName = toppingName;
		this.toppingPrice = toppingPrice;
	}


	public int getToppingId() {
		return toppingId;
	}


	public void setToppingId(int toppingId) {
		this.toppingId = toppingId;
	}


	public String getToppingName() {
		return toppingName;
	}


	public void setToppingName(String toppingName) {
		this.toppingName = toppingName;
	}


	public double getToppingPrice() {
		return toppingPrice;
	}


	public void setToppingPrice(double toppingPrice) {
		this.toppingPrice = toppingPrice;
	}


	@Override
	public String toString() {
		return String.format("ToppingDTO [toppingId=%s, toppingName=%s, toppingPrice=%s]", toppingId, toppingName,
				toppingPrice);
	}
	
	
}
