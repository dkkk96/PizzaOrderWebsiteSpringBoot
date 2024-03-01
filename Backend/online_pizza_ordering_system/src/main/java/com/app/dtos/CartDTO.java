package com.app.dtos;

import java.util.List;

import com.app.entities.CartDetail;

public class CartDTO {

	private int cartId;
	private double totalAmount;
	private int userId;
	private int totalQuantity;
	private CartDetail cartDetail;
	private List<CartDetail> cartDetailList;
	
	
	

	public CartDTO() {
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



	public CartDetail getCartDetail() {
		return cartDetail;
	}



	public void setCartDetail(CartDetail cartDetail) {
		this.cartDetail = cartDetail;
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
		return String.format(
				"CartDTO [cartId=%s, totalAmount=%s, userId=%s, totalQuantity=%s, cartDetail=%s, cartDetailList=%s]",
				cartId, totalAmount, userId, totalQuantity, cartDetail, cartDetailList);
	}




}
