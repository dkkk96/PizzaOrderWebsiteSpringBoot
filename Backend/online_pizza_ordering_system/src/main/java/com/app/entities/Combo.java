package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="combo")
public class Combo {

	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	@Column(name = "combo_id")
	private int comboId;
	@Column(name = "combo_name",length=100)
	private String comboName;
	@Column(name = "combo_image")
	private String comboImage;
	@Column(name = "combo_price")
	private double comboPrice;
	@Column(length=250)
	private String description;
	@Column(name = "combo_category",length=20)
	private String comboCategory;
	
	


	public Combo() {
	}




	public Combo(int comboId, String comboName, String comboImage, double comboPrice, String description,
			String comboCategory) {
		this.comboId = comboId;
		this.comboName = comboName;
		this.comboImage = comboImage;
		this.comboPrice = comboPrice;
		this.description = description;
		this.comboCategory = comboCategory;
	}




	public int getComboId() {
		return comboId;
	}




	public void setComboId(int comboId) {
		this.comboId = comboId;
	}




	public String getComboName() {
		return comboName;
	}




	public void setComboName(String comboName) {
		this.comboName = comboName;
	}




	public String getComboImage() {
		return comboImage;
	}




	public void setComboImage(String comboImage) {
		this.comboImage = comboImage;
	}




	public double getComboPrice() {
		return comboPrice;
	}




	public void setComboPrice(double comboPrice) {
		this.comboPrice = comboPrice;
	}




	public String getDescription() {
		return description;
	}




	public void setDescription(String description) {
		this.description = description;
	}




	public String getComboCategory() {
		return comboCategory;
	}




	public void setComboCategory(String comboCategory) {
		this.comboCategory = comboCategory;
	}




	




	
	
	
	
	
	
}
