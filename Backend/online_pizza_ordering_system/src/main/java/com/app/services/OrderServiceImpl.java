package com.app.services;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.app.daos.IAssignOrderDao;
import com.app.daos.ICartDao;
import com.app.daos.ICartDetailDao;
import com.app.daos.IComboDao;
import com.app.daos.IFeedbackDao;
import com.app.daos.IOrderDao;
import com.app.daos.IOrderDetailDao;
import com.app.daos.IProductDao;
import com.app.daos.IToppingDao;
import com.app.daos.IUserDao;
import com.app.dtos.AssignOrderDTO;
import com.app.dtos.CartDTO;
import com.app.dtos.DtoEntityConverter;
import com.app.dtos.FeedbackDTO;
import com.app.dtos.OrderDTO;
import com.app.dtos.UserDTO;
import com.app.entities.AssignOrder;
import com.app.entities.Cart;
import com.app.entities.CartDetail;
import com.app.entities.Combo;
import com.app.entities.Feedback;
import com.app.entities.Order;
import com.app.entities.OrderDetail;
import com.app.entities.Product;
import com.app.entities.Topping;
import com.app.entities.User;

@Transactional
@Service
public class OrderServiceImpl {

	@Autowired
	private IOrderDao orderDao;
	@Autowired
	private IUserDao userDao;
	@Autowired
	private IProductDao productDao;
	@Autowired
	private IComboDao comboDao;
	@Autowired
	private IToppingDao toppingDao;
	@Autowired
	private IAssignOrderDao assignOrderDao;
	@Autowired
	private IOrderDetailDao orderDetailDao;
	@Autowired
	private DtoEntityConverter converter;
	@Autowired
	private IFeedbackDao feedbackDao;
	@Autowired
	private ICartDao cartDao;
	@Autowired
	private ICartDetailDao cartDetailDao;
	@Autowired
	private JavaMailSender sender;
	
	public List<OrderDTO> getAllOrders()
	{
		List<OrderDTO> orderDtoList = new ArrayList<>();
		List<Order> orderList = orderDao.findAll();
		for (Order order: orderList) {
			
				orderDtoList.add(converter.toOrderDto(order));	
		}
		
		return orderDtoList;
	}
	
	public List<OrderDTO> getPendingOrders()
	{
		List<OrderDTO> orderDtoList = new ArrayList<>();
		List<Order> orderList = orderDao.findAll();
		for (Order order: orderList) {
			if(!(order.getStatusType().equals("Delivered")))
			{
				orderDtoList.add(converter.toOrderDto(order));	
			}
		}
		
		return orderDtoList;
		
	}
	
	public List<OrderDTO> getCustomerAllOrder(int userId)
	{
		List<OrderDTO> orderDtoList = new ArrayList<>();
		List<Order> orderList = orderDao.findByUserId(userId);
		for (Order order: orderList) {
			
				orderDtoList.add(converter.toOrderDto(order));	
		}
		
		return orderDtoList;
	}
	
	
	public List<OrderDTO> getCustomerPendingOrders(int userId)
	{
		List<OrderDTO> orderDtoList = new ArrayList<>();
		List<Order> orderList = orderDao.findByUserId(userId);
		for (Order order: orderList) {
			if(!(order.getStatusType().equals("Delivered")))
			{
				orderDtoList.add(converter.toOrderDto(order));	
			}
		}
		
		return orderDtoList;
		
	}
	
	public List<UserDTO> getDeliveryBoy()
	{
		List<User> empList = userDao.findFreeEmp();
		//System.out.println(empList);
		if(empList != null)
		{
			List<UserDTO> empDtoList = new ArrayList<>();
			for (User user : empList) {
				empDtoList.add(converter.toUserDto(user));
			
			}
			return empDtoList;
		}
		return null;
	}
	
	public Map<String,Object> assignDeliveryBoy(AssignOrderDTO assignOrderDto)
	{
		Order order = orderDao.getById(assignOrderDto.getOrderId());
		if(assignOrderDao.findByOrderId(assignOrderDto.getOrderId()) == null)
		{
			AssignOrder assign = new AssignOrder();
			assign.setOrder(order);
			User emp =  userDao.getById(assignOrderDto.getUserId());
			emp.setIsFree(false);
			assign.setUser(emp);
			assign = assignOrderDao.save(assign);
				return Collections.singletonMap("Assigned id", assign.getAssignId());
		}
		return null;
	}
	

	
//	public Map<String, Object> saveOrder(OrderDTO orderDto)
//	{
//		User user = userDao.getById(orderDto.getUser().getUserId());
//		Order order = new Order();
//		order.setPaymentMode(orderDto.getPaymentMode());
//		order.setStatusType("Placed");
//		order.setTotalAmount(orderDto.getTotalAmount());
//		order.setOrderDateTime(new Date());
//		order.setUser(user);
//		
//		order = orderDao.save(order);
//		
//		
//		if(orderDto.getOrderDetailList() != null)
//		{
//			for (OrderDetail od : orderDto.getOrderDetailList()) {
//				OrderDetail orderDetail = new OrderDetail();
//				if(od.getProduct() != null)
//				{
//					Product product = productDao.getById(od.getProduct().getProductId());
//					orderDetail.setProduct(product);
//				}
//				if(od.getCombo() != null)
//				{
//					Combo combo = comboDao.getById(od.getCombo().getComboId());
//					orderDetail.setCombo(combo);
//				}
//				if(od.getTopping() != null)
//				{
//					Topping topping = toppingDao.getById(od.getCombo().getComboId());
//					orderDetail.setTopping(topping);
//				}
//				orderDetail.setOrder(order);
//				orderDetail.setAmount(od.getAmount());
//				orderDetail.setQuantity(od.getQuantity());
//				orderDetail = orderDetailDao.save(orderDetail);
//			}
//		}
//		return Collections.singletonMap("inserted id", order.getOrderId());
//		
//	}
	

	public Map<String, Object> saveOrder(OrderDTO orderDto)
	{
		User user = userDao.getById(orderDto.getUser().getUserId());
		Order order = new Order();
		order.setPaymentMode(orderDto.getPaymentMode());
		order.setStatusType("Placed");
		order.setTotalAmount(orderDto.getTotalAmount());
		order.setOrderDateTime(new Date());
		order.setUser(user);
		
		order = orderDao.save(order);
		System.out.println("after order saved");
		Cart cart = cartDao.findByUserId(user.getUserId());
		List<CartDetail> CartDetailList = cartDetailDao.findByCartId(cart.getCartId());
		
		
		StringBuilder sb = new StringBuilder();
		sb.append("Hello "+order.getUser().getFirstName()+", \n");
		sb.append("Your order details are : \n");
		
		if(CartDetailList != null)
		{
			for (CartDetail cd : CartDetailList) {
				OrderDetail orderDetail = new OrderDetail();
				if(cd.getProductId() != 0)
				{
					Product product = productDao.getById(cd.getProductId());
					orderDetail.setProduct(product);
					
					sb.append("\n"+product.getProductName()+" = " + "Rs. "+cd.getPrice() + "( Qty. "+cd.getQuantity()+")");
				}
				if(cd.getComboId() != 0)
				{
					Combo combo = comboDao.getById(cd.getComboId());
					orderDetail.setCombo(combo);
					
					sb.append("\n"+combo.getComboName()+" = " + "Rs. " +cd.getPrice() + "( Qty. "+cd.getQuantity()+")");
				}
				if(cd.getToppingId() != 0)
				{
					Topping topping = toppingDao.getById(cd.getComboId());
					orderDetail.setTopping(topping);
				}
				orderDetail.setOrder(order);
				orderDetail.setAmount(cd.getPrice() * cd.getQuantity());
				orderDetail.setQuantity(cd.getQuantity());
				//System.out.println(orderDetail);
				orderDetail = orderDetailDao.save(orderDetail);
			}
		}
		
			cartDao.delete(cart);
			
			sb.append("\n\n"+ "Amount = Rs. "+order.getTotalAmount()+" ("+order.getOrderDateTime()+") ");
			String message = sb.toString();
			//send mail to customer
//			message.concat(order.getTotalAmount()+" ("+order.getOrderDateTime()+") ");
			System.out.println("Message sent to mail = "+message);
			SimpleMailMessage mesg = new SimpleMailMessage();
			mesg.setTo(user.getEmail());
			mesg.setSubject("Your order is placed");
			mesg.setText(message);
			mesg.setFrom("Pizzeria_pizza_ordering");
			mesg.setSentDate(new Date());
			sender.send(mesg);
			
			
		return Collections.singletonMap("inserted id", order.getOrderId());
		
	}
	
	
	
	public Map<String, Object> saveFeedback(FeedbackDTO feedbackDto){
		Feedback feedback = converter.toFeedbackEntity(feedbackDto);
		//Feedback feedback = new Feedback();
		//feedbackDto.getOrderId();
		User user = userDao.getById(feedbackDto.getUserId());
		Order order = orderDao.getById(feedbackDto.getOrderId());
		
		feedback.setOrder(order);
		feedback.setUser(user);
		
		feedback = feedbackDao.save(feedback);
		
		return Collections.singletonMap("Inserted id", feedback.getFeedbackId());
	}
	
	
	public List<FeedbackDTO> getAllFeedback()
	{
		List<Feedback> feedbackList = feedbackDao.findAll();
		List<FeedbackDTO> feedbackDtoList = new ArrayList<>();
		
		for (Feedback feedback : feedbackList) {
			feedbackDtoList.add(converter.toFeedbackDto(feedback));
		}
		return feedbackDtoList;
	}
	
	

	
	public Cart createNewCart(int userId)
	{
		Cart newCart = new Cart();
		newCart.setUserId(userId);
		return cartDao.save(newCart);
	}
	

	
	public Map<String,Object> addToCart(CartDTO cartDto)
	{
		
		//checking cart is exist or not
		Cart cart = cartDao.findByUserId(cartDto.getUserId());
		//if cart doesn't exist create new cart for user
		if(cart == null)
			cart = createNewCart(cartDto.getUserId());
		List<CartDetail> cartList = cartDetailDao.findByCartId(cart.getCartId());
		//if cart is empty then add new object in cart
		if(cartList.size() == 0 )
		{
			
			CartDetail cartDetail = converter.toCartDetailEntity(cartDto);
			cartDetail.setCartId(cart.getCartId());
			cartDetail = cartDetailDao.save(cartDetail);
			
		}
		else
		{
			//if cart is not empty then check if same product already exist 
			//if product already exist then update qty in cart
			for (CartDetail cd : cartList) {
			
			
				if((cd.getSubCategoryId() == cartDto.getCartDetail().getSubCategoryId() && 
						cartDto.getCartDetail().getSubCategoryId() != 0) ||
						(cd.getComboId() == cartDto.getCartDetail().getComboId() && 
						cartDto.getCartDetail().getComboId() != 0))
				{
					
					//update qty of product
					cd.setQuantity(cd.getQuantity() + 1);
					cd = cartDetailDao.save(cd);
					
					 //cartList = cartDetailDao.findByCartId(cart.getCartId());
					 //update total cart amount 
					int cartId = updateQuantityAndAmount(cart.getCartId());
					return Collections.singletonMap("updated id",cartId);
					
				}			
			}
			
			//if product already not exist in cart then insert new
			CartDetail cartDetail = converter.toCartDetailEntity(cartDto);
			cartDetail.setCartId(cart.getCartId());
			cartDetail = cartDetailDao.save(cartDetail);
		}
		
		//update total amount of cart
		 //cartList = cartDetailDao.findByCartId(cart.getCartId());
		 //System.out.println(cartList);
		int cartId = updateQuantityAndAmount(cart.getCartId());
		return Collections.singletonMap("inserted id",cartId);

}
	
	public CartDTO getAllCartItem(int userId)
	{
		Cart cart = cartDao.findByUserId(userId);
		if(cart != null)
		{
		List<CartDetail> cartDetailList = cartDetailDao.findByCartId(cart.getCartId());
		
		CartDTO cartDto =  converter.toCartDto(cart);
		cartDto.setCartDetailList(cartDetailList);
		return cartDto;
		}
		
		return null;
	}
	
	public int updateQuantityAndAmount(int cartId)
	{
		double totalAmount = 0;
		int totalQuantity = 0;
		Cart cart = cartDao.getById(cartId);
		List<CartDetail> cartList = cartDetailDao.findByCartId(cartId);
		for (CartDetail cd1 : cartList) {
			totalAmount = totalAmount + (cd1.getPrice() * cd1.getQuantity());	
			totalQuantity = totalQuantity + cd1.getQuantity();
		}
		cart.setTotalAmount(totalAmount);
		cart.setTotalQuantity(totalQuantity);
		cart.setCartDetailList(cartList);
		cart = cartDao.save(cart);
		return cart.getCartId();
	}
	
	public Map<String,Object> incrementQuantity(int cartDetailId)
	{
		
		
		CartDetail cartDetail = cartDetailDao.getById(cartDetailId);
		cartDetail.setQuantity(cartDetail.getQuantity() + 1);
		
		int cartId = updateQuantityAndAmount(cartDetail.getCartId());

		return Collections.singletonMap("updated id",cartId);
	}
	
	
	public Map<String,Object> decrementQuantity(int cartDetailId)
	{
		
		
		CartDetail cartDetail = cartDetailDao.getById(cartDetailId);
		if(cartDetail.getQuantity() > 1)
		{
			cartDetail.setQuantity(cartDetail.getQuantity() - 1);
		
			int cartId = updateQuantityAndAmount(cartDetail.getCartId());

			return Collections.singletonMap("updated id",cartId);
		}
		return null;
	}
	
	public void deleteFromCart(int cartDetailId)
	{
		CartDetail cartDetail = cartDetailDao.getById(cartDetailId);
		cartDetailDao.delete(cartDetail);
		updateQuantityAndAmount(cartDetail.getCartId());
		
		
	}
	
	public Map<String,Object> updateQuantity(int cartDetailId,int quantity)
	{
		
		
		CartDetail cartDetail = cartDetailDao.getById(cartDetailId);
		cartDetail.setQuantity(quantity);
		
		int cartId = updateQuantityAndAmount(cartDetail.getCartId());

		return Collections.singletonMap("updated id",cartId);
	}
	
	
	public Map<String,Object> updateOrderStatus(int orderId,OrderDTO orderDto)
	{
		Order order = orderDao.getById(orderId);
		order.setStatusType(orderDto.getStatusType());
		order = orderDao.save(order);
		if(orderDto.getStatusType().equals("Delivered"))
		{
			AssignOrder assignOrder = assignOrderDao.findByOrderId(orderId);
			if(assignOrder !=null) 
			{
				User user = userDao.getById(assignOrder.getUser().getUserId());
//				if(user!=null)
//				{
					System.out.println(user);
					user.setIsFree(true);
					userDao.save(user);
					assignOrderDao.delete(assignOrder);
				//}
			}
			else
				return null;
		}
		return Collections.singletonMap("updated id", order.getOrderId());
	}
	
	
	
	public OrderDTO getAssignedOrder(int userId)
	{
		AssignOrder assignOrder = assignOrderDao.findByUserId(userId);
		if(assignOrder != null)
			return converter.toOrderDto(assignOrder.getOrder());
		
		return null;
	}
	
	
	public String getOrderDetails(int orderId)
	{
		Order order = orderDao.getById(orderId);
			return order.getStatusType();
	}
	
	
	
}
