package com.app.entities;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name="orders")
public class Order {
	
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	@Column(name = "order_id")
	private int orderId;
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "order_datetime")
	private Date orderDateTime;
	@Column(name = "total_amount")
	private double totalAmount;
	@Column(name = "payment_mode",length = 20)
	private String paymentMode;
	@Column(name = "status_type",length= 50)
	private String statusType;

	@JsonBackReference
	@ManyToOne
	@JoinColumn(name = "user_id")
	private User user;
	
	@JsonManagedReference
	@OneToMany(mappedBy = "order",cascade = CascadeType.ALL)
	private List<OrderDetail> orderDetailList;


	
	public Order() {
	}




	public Order(int orderId, Date orderDateTime, double totalAmount, String paymentMode, String statusType, User user,
		List<OrderDetail> orderDetailList) {
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
				"Order [orderId=%s, orderDateTime=%s, totalAmount=%s, paymentMode=%s, statusType=%s, user=%s, orderDetailList=%s]",
				orderId, orderDateTime, totalAmount, paymentMode, statusType, user, orderDetailList);
	}


	
}
