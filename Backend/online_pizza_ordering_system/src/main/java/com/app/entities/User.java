package com.app.entities;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name="user")
public class User {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	@Column(name = "user_id")
	private int userId;
	@Column(name = "first_name",length = 50)
	private String firstName;
	@Column(name = "last_name",length = 50)
	private String lastName;
	@Column(length = 20)
	private String gender;
	@Column(unique=true,length = 50)
	private String email;
	@Column(length = 600)
	private String password;
	@Column(unique=true,name = "mobile_no",length = 50)
	private String mobileNo;
	@Temporal(TemporalType.DATE)
	@Column(name = "dob")
	private Date dateOfBirth;
	@Column(length = 20)
	private String role;
	@Column(name = "is_free")
	private Boolean isFree;
	
	@JsonManagedReference
	@OneToMany(mappedBy = "user",cascade = CascadeType.ALL)
	private List<Order> orderList;
	
	@JsonManagedReference
	@OneToMany(mappedBy = "user",cascade = CascadeType.ALL)
	private List<Feedback> feedbackList;
	
	@JsonManagedReference
	@OneToMany(mappedBy = "user",cascade = CascadeType.ALL)
	private List<ProductLikeStatus> productLikeStatus;
	
	@JsonManagedReference
	@OneToOne(mappedBy= "user" ,cascade = CascadeType.ALL)
	@PrimaryKeyJoinColumn
	private Address address;
	

	public User() {
		
	}





	public User(int userId, String firstName, String lastName, String gender, String email, String password,
			String mobileNo, Date dateOfBirth, String role, Boolean isFree) {
		this.userId = userId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.gender = gender;
		this.email = email;
		this.password = password;
		this.mobileNo = mobileNo;
		this.dateOfBirth = dateOfBirth;
		this.role = role;
		this.isFree = isFree;
	}






	public User(int userId, String firstName, String lastName, String gender, String email, String password,
			String mobileNo, Date dateOfBirth, String role, Boolean isFree, List<Order> orderList,
			List<Feedback> feedbackList, List<ProductLikeStatus> productLikeStatus, Address address) {
		this.userId = userId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.gender = gender;
		this.email = email;
		this.password = password;
		this.mobileNo = mobileNo;
		this.dateOfBirth = dateOfBirth;
		this.role = role;
		this.isFree = isFree;
		this.orderList = orderList;
		this.feedbackList = feedbackList;
		this.productLikeStatus = productLikeStatus;
		this.address = address;
	}






	public int getUserId() {
		return userId;
	}



	public void setUserId(int userId) {
		this.userId = userId;
	}



	public String getFirstName() {
		return firstName;
	}



	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}



	public String getLastName() {
		return lastName;
	}



	public void setLastName(String lastName) {
		this.lastName = lastName;
	}



	public String getGender() {
		return gender;
	}



	public void setGender(String gender) {
		this.gender = gender;
	}



	public String getEmail() {
		return email;
	}



	public void setEmail(String email) {
		this.email = email;
	}



	public String getPassword() {
		return password;
	}



	public void setPassword(String password) {
		this.password = password;
	}



	public String getMobileNo() {
		return mobileNo;
	}



	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
	}



	public Date getDateOfBirth() {
		return dateOfBirth;
	}



	public void setDateOfBirth(Date dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}



	public String getRole() {
		return role;
	}



	public void setRole(String role) {
		this.role = role;
	}



	public Boolean getIsFree() {
		return isFree;
	}



	public void setIsFree(Boolean isFree) {
		this.isFree = isFree;
	}



	public List<Order> getOrderList() {
		return orderList;
	}



	public void setOrderList(List<Order> orderList) {
		this.orderList = orderList;
	}



	public List<Feedback> getFeedbackList() {
		return feedbackList;
	}



	public void setFeedbackList(List<Feedback> feedbackList) {
		this.feedbackList = feedbackList;
	}



	public List<ProductLikeStatus> getProductLikeStatus() {
		return productLikeStatus;
	}



	public void setProductLikeStatus(List<ProductLikeStatus> productLikeStatus) {
		this.productLikeStatus = productLikeStatus;
	}

	

	public Address getAddress() {
		return address;
	}






	public void setAddress(Address address) {
		this.address = address;
	}






	@Override
	public String toString() {
		return String.format(
				"User [userId=%s, firstName=%s, lastName=%s, gender=%s, email=%s, password=%s, mobileNo=%s, dateOfBirth=%s, role=%s, isFree=%s, orderList=%s, feedbackList=%s, productLikeStatus=%s]",
				userId, firstName, lastName, gender, email, password, mobileNo, dateOfBirth, role, isFree, orderList,
				feedbackList, productLikeStatus);
	}


	
	

}
