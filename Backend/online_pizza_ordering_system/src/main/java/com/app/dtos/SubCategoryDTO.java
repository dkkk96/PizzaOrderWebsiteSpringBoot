package com.app.dtos;

public class SubCategoryDTO {
	
	private int productId;
	private int subCategoryId;	
	private String size;
	private String crustType;
	private double price;
	//private Product product;
	
	public SubCategoryDTO() {
	}


	


	public int getProductId() {
		return productId;
	}





	public void setProductId(int productId) {
		this.productId = productId;
	}





	public int getSubCategoryId() {
		return subCategoryId;
	}


	public void setSubCategoryId(int subCategoryId) {
		this.subCategoryId = subCategoryId;
	}


	public String getSize() {
		return size;
	}


	public void setSize(String size) {
		this.size = size;
	}


	public String getCrustType() {
		return crustType;
	}


	public void setCrustType(String crustType) {
		this.crustType = crustType;
	}


	public double getPrice() {
		return price;
	}


	public void setPrice(double price) {
		this.price = price;
	}





	@Override
	public String toString() {
		return String.format("SubCategoryDTO [productId=%s, subCategoryId=%s, size=%s, crustType=%s, price=%s]",
				productId, subCategoryId, size, crustType, price);
	}







	


	
	
	
	
}
