package com.app.entities;

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
@Table(name="feedback")
public class Feedback {

	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	@Column(name = "feedback_id")
	private int feedbackId;
	@Column(name = "food_quality",length=20)
	private String foodQuality;
	@Column(name = "delivery_service",length=20)
	private String deliveryService;
	@Column(name = "order_accuracy",length=20)
	private String orderAccuracy;
	@Column(name = "overall_experience",length=20)
	private String overallExperience;
	@Column(length=500)
	private String comment; 
	
	@JsonBackReference
	@ManyToOne
	@JoinColumn(name="user_id")
	private User user;
	
	@OneToOne
	@JoinColumn(name = "order_id")
	private Order order;
	

	
	

	public Feedback() {
	}





	public Feedback(int feedbackId, String foodQuality, String deliveryService, String orderAccuracy,
			String overallExperience, String comment, User user, Order order) {
		this.feedbackId = feedbackId;
		this.foodQuality = foodQuality;
		this.deliveryService = deliveryService;
		this.orderAccuracy = orderAccuracy;
		this.overallExperience = overallExperience;
		this.comment = comment;
		this.user = user;
		this.order = order;
	}





	public Feedback(int feedbackId, String foodQuality, String deliveryService, String orderAccuracy,
			String overallExperience, String comment) {
		this.feedbackId = feedbackId;
		this.foodQuality = foodQuality;
		this.deliveryService = deliveryService;
		this.orderAccuracy = orderAccuracy;
		this.overallExperience = overallExperience;
		this.comment = comment;
	}





	public int getFeedbackId() {
		return feedbackId;
	}





	public void setFeedbackId(int feedbackId) {
		this.feedbackId = feedbackId;
	}





	public String getFoodQuality() {
		return foodQuality;
	}





	public void setFoodQuality(String foodQuality) {
		this.foodQuality = foodQuality;
	}





	public String getDeliveryService() {
		return deliveryService;
	}





	public void setDeliveryService(String deliveryService) {
		this.deliveryService = deliveryService;
	}





	public String getOrderAccuracy() {
		return orderAccuracy;
	}





	public void setOrderAccuracy(String orderAccuracy) {
		this.orderAccuracy = orderAccuracy;
	}





	public String getOverallExperience() {
		return overallExperience;
	}





	public void setOverallExperience(String overallExperience) {
		this.overallExperience = overallExperience;
	}





	public String getComment() {
		return comment;
	}





	public void setComment(String comment) {
		this.comment = comment;
	}





	public User getUser() {
		return user;
	}





	public void setUser(User user) {
		this.user = user;
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
				"Feedback [feedbackId=%s, foodQuality=%s, deliveryService=%s, orderAccuracy=%s, overallExperience=%s, comment=%s, user=%s, order=%s]",
				feedbackId, foodQuality, deliveryService, orderAccuracy, overallExperience, comment, user, order);
	}

	
	
	
	
	
	
}
