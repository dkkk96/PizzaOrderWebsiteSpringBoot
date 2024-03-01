package com.app.dtos;

import java.util.List;

import com.app.entities.SubCategory;

public class ProductDTO {

	private int productId;
	private String productName;
	private String productImage;
	private String category;
	private String description;
	
	
	List<SubCategory> subCategoryList;


	public ProductDTO() {
	}


	public ProductDTO(int productId, String productName, String productImage, String category, String description,
			List<SubCategory> subCategoryList) {
		this.productId = productId;
		this.productName = productName;
		this.productImage = productImage;
		this.category = category;
		this.description = description;
		this.subCategoryList = subCategoryList;
	}


	public int getProductId() {
		return productId;
	}


	public void setProductId(int productId) {
		this.productId = productId;
	}


	public String getProductName() {
		return productName;
	}


	public void setProductName(String productName) {
		this.productName = productName;
	}


	public String getProductImage() {
		return productImage;
	}


	public void setProductImage(String productImage) {
		this.productImage = productImage;
	}


	public String getCategory() {
		return category;
	}


	public void setCategory(String category) {
		this.category = category;
	}


	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}


	public List<SubCategory> getSubCategoryList() {
		return subCategoryList;
	}


	public void setSubCategoryList(List<SubCategory> subCategoryList) {
		this.subCategoryList = subCategoryList;
	}


	@Override
	public String toString() {
		return String.format(
				"ProductDTO [productId=%s, productName=%s, productImage=%s, category=%s, description=%s, subCategoryList=%s]",
				productId, productName, productImage, category, description, subCategoryList);
	}
	
	

}
