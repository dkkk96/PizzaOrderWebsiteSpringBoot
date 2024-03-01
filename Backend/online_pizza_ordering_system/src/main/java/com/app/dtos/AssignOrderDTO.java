package com.app.dtos;

public class AssignOrderDTO {

	
	private int orderId;
	private int userId;
	
	
	public AssignOrderDTO(int orderId, int userId) {
		this.orderId = orderId;
		this.userId = userId;
	}


	public int getOrderId() {
		return orderId;
	}


	public void setOrderId(int orderId) {
		this.orderId = orderId;
	}


	public int getUserId() {
		return userId;
	}


	public void setUserId(int userId) {
		this.userId = userId;
	}


	@Override
	public String toString() {
		return String.format("AssignOrderDTO [orderId=%s, userId=%s]", orderId, userId);
	}
	
	

}
