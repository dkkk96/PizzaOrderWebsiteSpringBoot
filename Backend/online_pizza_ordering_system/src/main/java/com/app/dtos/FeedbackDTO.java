package com.app.dtos;

public class FeedbackDTO {
	private int feedbackId;
	private String foodQuality;
	private String deliveryService;
	private String orderAccuracy;
	private String overallExperience;
	private String comment;
	private int orderId;
	private int userId;
	
	public FeedbackDTO() {
		
	}
	

	public FeedbackDTO(int feedbackId, String foodQuality, String deliveryService, String orderAccuracy,
			String overallExperience, String comment, int orderId, int userId) {
		super();
		this.feedbackId = feedbackId;
		this.foodQuality = foodQuality;
		this.deliveryService = deliveryService;
		this.orderAccuracy = orderAccuracy;
		this.overallExperience = overallExperience;
		this.comment = comment;
		this.orderId = orderId;
		this.userId = userId;
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
		return String.format(
				"FeedbackDTO [feedbackId=%s, foodQuality=%s, deliveryService=%s, orderAccuracy=%s, overallExperience=%s, comment=%s, orderId=%s, userId=%s]",
				feedbackId, foodQuality, deliveryService, orderAccuracy, overallExperience, comment, orderId, userId);
	}

	
	
	
}
