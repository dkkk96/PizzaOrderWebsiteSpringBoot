package com.app.dtos;

import org.springframework.stereotype.Component;

import com.app.entities.Cart;
import com.app.entities.CartDetail;
import com.app.entities.Combo;
import com.app.entities.Feedback;
import com.app.entities.Order;
import com.app.entities.Product;
import com.app.entities.SubCategory;
import com.app.entities.Topping;
import com.app.entities.User;

@Component
public class DtoEntityConverter {

	
	public UserDTO toUserDto(User entity) {
		UserDTO dto = new UserDTO();
		dto.setUserId(entity.getUserId());
		dto.setFirstName(entity.getFirstName());
		dto.setLastName(entity.getLastName());
		dto.setEmail(entity.getEmail());
		dto.setPassword("********");
		dto.setMobileNo(entity.getMobileNo());
		dto.setRole(entity.getRole());
		return dto;
	}
	
	public User toUserEntity(UserDTO dto) {
		User entity = new User();
		entity.setUserId(dto.getUserId());
		entity.setFirstName(dto.getFirstName());
		entity.setLastName(dto.getLastName());
		entity.setEmail(dto.getEmail());
		entity.setPassword(dto.getPassword());
		entity.setMobileNo(dto.getMobileNo());
		return entity;		
	}
	
	public Credential toCredDto(User entity) {
		Credential dto = new Credential();
		dto.setEmail(entity.getEmail());
		dto.setMobileNo(entity.getMobileNo());
		dto.setPassword(entity.getPassword());
		
		return dto;
	}
	
	public User toUserEntity(Credential dto) {
		User entity = new User();
		
//		entity.setEmail(dto.getEmail());
//		entity.setMobileNo(dto.getMobileNo());
		entity.setPassword(dto.getPassword());
		
		return entity;		
	}
	
	public UserAddressDTO toUserAddressDto(User entity) {
		UserAddressDTO dto = new UserAddressDTO();
		dto.setUserId(entity.getUserId());
		dto.setRole(entity.getRole());
		dto.setGender(entity.getGender());
		dto.setDateOfBirth(entity.getDateOfBirth());
		dto.setAddress(entity.getAddress());
		return dto;
	}
	
	public User toUserEntity(UserAddressDTO dto) {
		User entity = new User();
		entity.setUserId(dto.getUserId());
		entity.setRole(dto.getRole());
		entity.setGender(dto.getGender());
		entity.setDateOfBirth(dto.getDateOfBirth());
		entity.setAddress(dto.getAddress());
		return entity;		
	}
	

	

//	public Combo toComboEntity(ComboFormDTO comboDto)
//	{
//		
//		Combo entity = new Combo();
//		BeanUtils.copyProperties(comboDto, entity, "comboImage");
//		if(comboDto.getComboImage() != null)
//			entity.setComboImage(comboDto.getComboImage().getOriginalFilename());
//		return entity;
//		
//
//	}
	
	
	public Combo toComboEntity(ComboDTO dto)
	{
		
		Combo entity = new Combo();
		entity.setComboCategory(dto.getComboCategory());
		entity.setComboId(dto.getComboId());
		entity.setComboImage(dto.getComboImage());
		entity.setComboName(dto.getComboName());
		entity.setComboPrice(dto.getComboPrice());
		entity.setDescription(dto.getDescription());
		
		return entity;
		

	}
	
	
	public ComboDTO toComboDto(Combo entity)
	{
		
		ComboDTO dto = new ComboDTO();
		dto.setComboCategory(entity.getComboCategory());
		dto.setComboId(entity.getComboId());
		dto.setComboImage(entity.getComboImage());
		dto.setComboName(entity.getComboName());
		dto.setComboPrice(entity.getComboPrice());
		dto.setDescription(entity.getComboCategory());
		
		return dto;
		

	}
	
	public Topping toToppingEntity(ToppingDTO dto) {
		Topping entity = new Topping();
		
		entity.setToppingName(dto.getToppingName());
		entity.setToppingPrice(dto.getToppingPrice());
		
		return entity;		
	}
	
	public ToppingDTO toToppingDto(Topping entity) {
		ToppingDTO dto = new ToppingDTO();
		
		dto.setToppingName(entity.getToppingName());
		dto.setToppingPrice(entity.getToppingPrice());
		
		return dto;		
	}
	
//	public Product toProductEntity(ProductFormDTO productDto)
//	{
//		
//		Product entity = new Product();
//		BeanUtils.copyProperties(productDto, entity, "productImage");
//		if(productDto.getProductImage() != null)
//			entity.setProductImage(productDto.getProductImage().getOriginalFilename());
//		return entity;
//
//	}
	
	
	
	
	

	
	public SubCategoryDTO toSubCategoryDto(SubCategory entity) {
		SubCategoryDTO dto = new SubCategoryDTO();
		dto.setSubCategoryId(entity.getSubCategoryId());
		dto.setCrustType(entity.getCrustType());
		dto.setPrice(entity.getPrice());
		dto.setSize(entity.getSize());
		dto.setProductId(entity.getProductId());
		
	
		return dto;
	}
	
	
	public SubCategory toSubCategoryEntity(SubCategoryDTO dto) {
		SubCategory entity = new SubCategory();
		entity.setSubCategoryId(dto.getSubCategoryId());
		entity.setCrustType(dto.getCrustType());
		entity.setPrice(dto.getPrice());
		entity.setSize(dto.getSize());
		
		return entity;
	}
	
	public ProductDTO toProductDto(Product entity) {
		ProductDTO dto = new ProductDTO();
		
		dto.setCategory(entity.getCategory());
		dto.setDescription(entity.getDescription());
		dto.setProductId(entity.getProductId());
		dto.setProductImage(entity.getProductImage());
		dto.setProductName(entity.getProductName());
		dto.setSubCategoryList(entity.getSubCategory());
		
		return dto;		
	}
	
	public Product toProductEntity(ProductDTO dto) {
		Product entity = new Product();
		entity.setCategory(dto.getCategory());
		entity.setDescription(dto.getDescription());
		entity.setProductId(dto.getProductId());
		entity.setProductImage(dto.getProductImage());
		entity.setProductName(dto.getProductName());
		entity.setSubCategory(dto.getSubCategoryList());
	
		return entity;
	}
	
	
	public Order toOrderEntity(OrderDTO dto)
	{
		Order entity = new Order();
		entity.setOrderId(dto.getOrderId());
		entity.setOrderDateTime(dto.getOrderDateTime());
		entity.setPaymentMode(dto.getPaymentMode());
		entity.setTotalAmount(dto.getTotalAmount());
		entity.setOrderDetailList(dto.getOrderDetailList());
		//entity.setUser(dto.getUserId());
		
		return entity;
	}
	
	public OrderDTO toOrderDto(Order entity)
	{
		OrderDTO dto = new OrderDTO();
		dto.setOrderId(entity.getOrderId());
		dto.setOrderDateTime(entity.getOrderDateTime());
		dto.setPaymentMode(entity.getPaymentMode());
		dto.setTotalAmount(entity.getTotalAmount());
		dto.setOrderDetailList(entity.getOrderDetailList());
		dto.setStatusType(entity.getStatusType());
		dto.setUser(entity.getUser());
		
		return dto;
	}
	
	public Feedback toFeedbackEntity(FeedbackDTO dto)
	{
		
		Feedback entity = new Feedback();
		entity.setFeedbackId(dto.getFeedbackId());
		entity.setComment(dto.getComment());
		entity.setDeliveryService(dto.getDeliveryService());
		entity.setFoodQuality(dto.getFoodQuality());
		entity.setOrderAccuracy(dto.getOrderAccuracy());
		entity.setOverallExperience(dto.getOverallExperience());
		
		return entity;
	}
	
	public FeedbackDTO toFeedbackDto(Feedback entity) {
		FeedbackDTO dto = new FeedbackDTO();
		dto.setFeedbackId(entity.getFeedbackId());
		dto.setComment(entity.getComment());
		dto.setDeliveryService(entity.getDeliveryService());
		dto.setFoodQuality(entity.getFoodQuality());
		dto.setOrderAccuracy(entity.getOrderAccuracy());
		dto.setOverallExperience(entity.getOverallExperience());
		dto.setOrderId(entity.getOrder().getOrderId());
		dto.setUserId(entity.getUser().getUserId());
		
		return dto;
	}
	
	
	public CartDetail toCartDetailEntity(CartDTO dto)
	{
		CartDetail entity = new CartDetail();
		entity.setComboName(dto.getCartDetail().getComboName());
		entity.setCrustType(dto.getCartDetail().getCrustType());
		entity.setPrice(dto.getCartDetail().getPrice());
		entity.setComboId(dto.getCartDetail().getComboId());
		entity.setProductName(dto.getCartDetail().getProductName());
		entity.setQuantity(1);
		entity.setProductId(dto.getCartDetail().getProductId());
		entity.setSubCategoryId(dto.getCartDetail().getSubCategoryId());
		entity.setSize(dto.getCartDetail().getSize());
		entity.setImage(dto.getCartDetail().getImage());
		//entity.setCartId(dto.getCartId());
		
		return entity;
	}
	
	public CartDTO toCartDto(Cart entity)
	{
		CartDTO dto = new CartDTO();
		dto.setCartId(entity.getCartId());
		dto.setTotalAmount(entity.getTotalAmount());
		dto.setUserId(entity.getUserId());
		dto.setTotalQuantity(entity.getTotalQuantity());
		dto.setCartDetailList(entity.getCartDetailList());
		
		
		return dto;
	}
}
