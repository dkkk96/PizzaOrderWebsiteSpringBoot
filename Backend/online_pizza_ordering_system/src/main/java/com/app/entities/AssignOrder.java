package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="assign_order")
public class AssignOrder {

	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	@Column(name = "assign_id")
	private int assignId;
	
	@OneToOne
	@JoinColumn(name = "order_id")
	private Order order;
	
	@OneToOne
	@JoinColumn(name = "user_id")
	private User user;

	public AssignOrder() {
	}

	public AssignOrder(int assignId, Order order, User user) {
		this.assignId = assignId;
		this.order = order;
		this.user = user;
	}

	public int getAssignId() {
		return assignId;
	}

	public void setAssignId(int assignId) {
		this.assignId = assignId;
	}

	public Order getOrder() {
		return order;
	}

	public void setOrder(Order order) {
		this.order = order;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	@Override
	public String toString() {
		return String.format("AssignOrder [assignId=%s, order=%s, user=%s]", assignId, order, user);
	}
	
	
}
