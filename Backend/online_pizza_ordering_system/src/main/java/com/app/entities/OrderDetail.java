package com.app.entities;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name="order_detail")
public class OrderDetail {

	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	@Column(name = "order_detail_id")
	private int orderDetailId;
	private int quantity;
	private double amount;
		
	//@JsonManagedReference
	@OneToOne
	@JoinColumn(name = "product_id")
	private Product product;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "combo_id")
	private Combo combo;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "topping_id")
	private Topping topping;
	
	@JsonBackReference
	@ManyToOne
	@JoinColumn(name = "order_id")
	private Order order;
	
	public OrderDetail() {
	}

	public OrderDetail(int orderDetailId, int quantity, double amount, Product product, Combo combo, Topping topping,
			Order order) {
		this.orderDetailId = orderDetailId;
		this.quantity = quantity;
		this.amount = amount;
		this.product = product;
		this.combo = combo;
		this.topping = topping;
		this.order = order;
	}

	public OrderDetail(int orderDetailId, int quantity, double amount) {
		this.orderDetailId = orderDetailId;
		this.quantity = quantity;
		this.amount = amount;
	}

	public int getOrderDetailId() {
		return orderDetailId;
	}

	public void setOrderDetailId(int orderDetailId) {
		this.orderDetailId = orderDetailId;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}

	public Combo getCombo() {
		return combo;
	}

	public void setCombo(Combo combo) {
		this.combo = combo;
	}

	public Topping getTopping() {
		return topping;
	}

	public void setTopping(Topping topping) {
		this.topping = topping;
	}

	public Order getOrder() {
		return order;
	}

	public void setOrder(Order order) {
		this.order = order;
	}

	@Override
	public String toString() {
		return String.format(
				"OrderDetail [orderDetailId=%s, quantity=%s, amount=%s, product=%s, combo=%s, topping=%s, order=%s]",
				orderDetailId, quantity, amount, product, combo, topping, order);
	}
	
	

	
	
}
