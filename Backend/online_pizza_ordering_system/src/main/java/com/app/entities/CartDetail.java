package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="cart_detail")
public class CartDetail {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	@Column(name = "cart_detail_id")
	private int cartDetailId;
	@Column(name = "product_id")
	private int productId;
	@Column(name = "topping_id")
	private int toppingId;
	@Column(name = "combo_id")
	private int comboId;
	@Column(name = "sub_category_id")
	private int subCategoryId;
	private int quantity;
	private double price;
	@Column(name = "product_name",length = 50)
	private String productName;
	private String size;
	@Column(name = "crust_type")
	private String crustType;
	@Column(name = "combo_name",length = 50)
	private String comboName;
	private String image;
	@Column(name = "cart_id")
	private int cartId;
	
	
	
	public CartDetail() {
	}
	
	
	
	
	
	public CartDetail(int cartDetailId, int productId, int toppingId, int comboId, int subCategoryId, int quantity,
			double price, String productName, String size, String crustType, String comboName, String image,
			int cartId) {
		this.cartDetailId = cartDetailId;
		this.productId = productId;
		this.toppingId = toppingId;
		this.comboId = comboId;
		this.subCategoryId = subCategoryId;
		this.quantity = quantity;
		this.price = price;
		this.productName = productName;
		this.size = size;
		this.crustType = crustType;
		this.comboName = comboName;
		this.image = image;
		this.cartId = cartId;
	}





	public int getCartDetailId() {
		return cartDetailId;
	}
	public void setCartDetailId(int cartDetailId) {
		this.cartDetailId = cartDetailId;
	}
	public int getProductId() {
		return productId;
	}
	public void setProductId(int productId) {
		this.productId = productId;
	}
	public int getToppingId() {
		return toppingId;
	}
	public void setToppingId(int toppingId) {
		this.toppingId = toppingId;
	}
	public int getComboId() {
		return comboId;
	}
	public void setComboId(int comboId) {
		this.comboId = comboId;
	}
	public int getSubCategoryId() {
		return subCategoryId;
	}
	public void setSubCategoryId(int subCategoryId) {
		this.subCategoryId = subCategoryId;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	
	
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
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
	public String getComboName() {
		return comboName;
	}
	public void setComboName(String comboName) {
		this.comboName = comboName;
	}
	public int getCartId() {
		return cartId;
	}
	public void setCartId(int cartId) {
		this.cartId = cartId;
	}
	
	

	public String getImage() {
		return image;
	}





	public void setImage(String image) {
		this.image = image;
	}





	@Override
	public String toString() {
		return String.format(
				"CartDetail [cartDetailId=%s, productId=%s, toppingId=%s, comboId=%s, subCategoryId=%s, quantity=%s, price=%s, productName=%s, size=%s, crustType=%s, comboName=%s, image=%s, cartId=%s]",
				cartDetailId, productId, toppingId, comboId, subCategoryId, quantity, price, productName, size,
				crustType, comboName, image, cartId);
	}




	
}
