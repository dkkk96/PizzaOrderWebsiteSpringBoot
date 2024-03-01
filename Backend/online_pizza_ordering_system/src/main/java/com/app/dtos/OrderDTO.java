package com.app.dtos;

import java.util.Date;
import java.util.List;

import com.app.entities.OrderDetail;
import com.app.entities.User;

public class OrderDTO {

	
	private int orderId;
	private Date orderDateTime;
	private double totalAmount;
	private String paymentMode;
	private String statusType;
	private User user;
	private List<OrderDetail> orderDetailList;
	
	
	public OrderDTO() {
		
	}
	


	public OrderDTO(int orderId, Date orderDateTime, double totalAmount, String paymentMode, String statusType,
			User user, List<OrderDetail> orderDetailList) {
		this.orderId = orderId;
		this.orderDateTime = orderDateTime;
		this.totalAmount = totalAmount;
		this.paymentMode = paymentMode;
		this.statusType = statusType;
		this.user = user;
		this.orderDetailList = orderDetailList;
	}






	public int getOrderId() {
		return orderId;
	}


	public void setOrderId(int orderId) {
		this.orderId = orderId;
	}


	public Date getOrderDateTime() {
		return orderDateTime;
	}


	public void setOrderDateTime(Date orderDateTime) {
		this.orderDateTime = orderDateTime;
	}


	public double getTotalAmount() {
		return totalAmount;
	}


	public void setTotalAmount(double totalAmount) {
		this.totalAmount = totalAmount;
	}


	public String getPaymentMode() {
		return paymentMode;
	}


	public void setPaymentMode(String paymentMode) {
		this.paymentMode = paymentMode;
	}


	

	
	public User getUser() {
		return user;
	}



	public void setUser(User user) {
		this.user = user;
	}



	public List<OrderDetail> getOrderDetailList() {
		return orderDetailList;
	}


	public void setOrderDetailList(List<OrderDetail> orderDetailList) {
		this.orderDetailList = orderDetailList;
	}

	
	public String getStatusType() {
		return statusType;
	}



	public void setStatusType(String statusType) {
		this.statusType = statusType;
	}



	@Override
	public String toString() {
		return String.format(
				"OrderDTO [orderId=%s, orderDateTime=%s, totalAmount=%s, paymentMode=%s, statusType=%s, user=%s, orderDetailList=%s]",
				orderId, orderDateTime, totalAmount, paymentMode, statusType, user, orderDetailList);
	}



	


}
