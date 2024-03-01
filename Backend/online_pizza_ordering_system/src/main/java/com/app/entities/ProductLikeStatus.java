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
@Table(name="product_like_status")
public class ProductLikeStatus {

	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	@Column(name = "like_id")
	private int likeId;
	@Column(name = "like_status")
	private Boolean likeStatus;
	
	@JsonBackReference
	@ManyToOne
	@JoinColumn(name="user_id")
	private User user;
	
	@OneToOne
	@JoinColumn(name = "product_id")
	private Product product;
	
	
	public ProductLikeStatus() {
	}
	
	
	public ProductLikeStatus(int likeId, Boolean likeStatus) {
		this.likeId = likeId;
		this.likeStatus = likeStatus;
	}


	public ProductLikeStatus(int likeId, Boolean likeStatus, User user, Product product) {
		this.likeId = likeId;
		this.likeStatus = likeStatus;
		this.user = user;
		this.product = product;
	}


	public int getLikeId() {
		return likeId;
	}


	public void setLikeId(int likeId) {
		this.likeId = likeId;
	}


	public Boolean getLikeStatus() {
		return likeStatus;
	}


	public void setLikeStatus(Boolean likeStatus) {
		this.likeStatus = likeStatus;
	}


	public User getUser() {
		return user;
	}


	public void setUser(User user) {
		this.user = user;
	}


	public Product getProduct() {
		return product;
	}


	public void setProduct(Product product) {
		this.product = product;
	}


	@Override
	public String toString() {
		return String.format("ProductLikeStatus [likeId=%s, likeStatus=%s, user=%s, product=%s]", likeId, likeStatus,
				user, product);
	}


	
	
}
