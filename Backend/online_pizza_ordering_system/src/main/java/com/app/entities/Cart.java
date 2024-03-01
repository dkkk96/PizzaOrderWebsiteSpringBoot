package com.app.entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="cart")
public class Cart {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	@Column(name = "cart_id")
	private int cartId;
	@Column(name = "total_amount")
	private double totalAmount;
	@Column(name = "total_quantity")
	private int totalQuantity;
	@Column(name = "user_id")
	private int userId;
	
	@OneToMany(mappedBy = "cartId",cascade = CascadeType.ALL)
	private List<CartDetail> cartDetailList;
	
	


	public Cart() {
	}



	public Cart(int cartId, double totalAmount, int totalQuantity, int userId, List<CartDetail> cartDetailList) {
		this.cartId = cartId;
		this.totalAmount = totalAmount;
		this.totalQuantity = totalQuantity;
		this.userId = userId;
		this.cartDetailList = cartDetailList;
	}





	public int getCartId() {
		return cartId;
	}


	public void setCartId(int cartId) {
		this.cartId = cartId;
	}


	public double getTotalAmount() {
		return totalAmount;
	}


	public void setTotalAmount(double totalAmount) {
		this.totalAmount = totalAmount;
	}


	public int getUserId() {
		return userId;
	}


	public void setUserId(int userId) {
		this.userId = userId;
	}

	

	public List<CartDetail> getCartDetailList() {
		return cartDetailList;
	}


	public void setCartDetailList(List<CartDetail> cartDetailList) {
		this.cartDetailList = cartDetailList;
	}

	

	public int getTotalQuantity() {
		return totalQuantity;
	}





	public void setTotalQuantity(int totalQuantity) {
		this.totalQuantity = totalQuantity;
	}





	@Override
	public String toString() {
		return String.format("Cart [cartId=%s, totalAmount=%s, totalQuantity=%s, userId=%s, cartDetailList=%s]", cartId,
				totalAmount, totalQuantity, userId, cartDetailList);
	}





	
	

	
}
