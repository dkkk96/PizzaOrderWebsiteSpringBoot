package com.app.dtos;

public class ComboDTO {

	private int comboId;
	private String comboName;
	private String comboImage;
	private double comboPrice;
	private String description;
	private String comboCategory;
	
	
	public ComboDTO() {
		
	}


	


	public ComboDTO(int comboId, String comboName, String comboImage, double comboPrice, String description,
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





	@Override
	public String toString() {
		return String.format(
				"ComboDTO [comboId=%s, comboName=%s, comboImage=%s, comboPrice=%s, description=%s, comboCategory=%s]",
				comboId, comboName, comboImage, comboPrice, description, comboCategory);
	}




	
}
