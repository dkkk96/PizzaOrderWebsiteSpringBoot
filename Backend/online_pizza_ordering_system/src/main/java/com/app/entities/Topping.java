package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="topping")
public class Topping {

	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	@Column(name = "topping_id")
	private int toppingId;
	@Column(name = "topping_name",length = 50)
	private String toppingName;
	@Column(name = "topping_price")
	private double toppingPrice;
	
	public Topping() {
	}

	public Topping(int toppingId, String toppingName, double toppingPrice) {
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
		return String.format("Topping [toppingId=%s, toppingName=%s, toppingPrice=%s]", toppingId, toppingName,
				toppingPrice);
	}
	
	
	
}

