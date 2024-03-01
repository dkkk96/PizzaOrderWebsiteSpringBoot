package com.app.controllers;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.dtos.AssignOrderDTO;
import com.app.dtos.CartDTO;
import com.app.dtos.Email;
import com.app.dtos.FeedbackDTO;
import com.app.dtos.OrderDTO;
import com.app.dtos.Response;
import com.app.dtos.UserDTO;
import com.app.services.OrderServiceImpl;

@CrossOrigin(origins = "*")
@RestController
public class OrderController {

	@Autowired
	private OrderServiceImpl orderService;
	@Autowired
	private JavaMailSender sender;
	
	//get all orders in admin orders page
	@GetMapping("/order/getall-orders")
	public ResponseEntity<?> getAllOrders()
	{
		List<OrderDTO> orderDtoList = orderService.getAllOrders();
		if(orderDtoList != null)
			return Response.success(orderDtoList);
		return Response.error("no order available...");
	}
	
	//get pending orders in admin page
	@GetMapping("/order/get-pendingorders")
	public ResponseEntity<?> getPendingOrders()
	{
		List<OrderDTO> orderDtoList = orderService.getPendingOrders();
		if(orderDtoList != null)
			return Response.success(orderDtoList);
		return Response.error("no pending order available...");
	}
	
	//get all available delivery boy
	@GetMapping("/order/get-deliveryboy")
	public ResponseEntity<?> getDeliveryBoy()
	{
		List<UserDTO> delBoyList = orderService.getDeliveryBoy();
		if(delBoyList != null)
			return Response.success(delBoyList);
		return Response.error("no delivery boy available...");
	}
	
	
	//assign delivery boy to order
	@PostMapping("/order/assign-deliveryboy")
	public ResponseEntity<?> assignDeliveryBoy(@RequestBody AssignOrderDTO assignOrderDto)
	{
		Map<String, Object> result = orderService.assignDeliveryBoy(assignOrderDto);
		if(result != null)
			return Response.success(result);
		return Response.error("delivery boy already assigned");
	}
	
	
	//update order status (placed/delivered..)
	@PutMapping("/order/update-status/{orderId}")
	public ResponseEntity<?> updateOrderStatus(@PathVariable("orderId") int orderId,@RequestBody OrderDTO orderDto)
	{
		Map<String, Object> result = orderService.updateOrderStatus(orderId,orderDto);
		if(result != null)
			return Response.success(result);
		return Response.error("Delivery boy not assigned");
	}
	
	
	//save order details after order placed
	@PostMapping("/order/save-order")
	public ResponseEntity<?> saveOrder(@RequestBody OrderDTO orderDto)
	{
		Map<String, Object> result = orderService.saveOrder(orderDto);
		return Response.success(result);
	}
	
	
	//add order feedback from customer 
	@PostMapping("/order/add-feedback")
	public ResponseEntity<?> giveFeedback(@RequestBody FeedbackDTO feedbackDto) {
		Map<String, Object> result = orderService.saveFeedback(feedbackDto);
		return Response.success(result);
	}
	
	
	//get all feedback to admin
	@GetMapping("/order/getall-feedback")
	public ResponseEntity<?> getAllFeedback()
	{
		List<FeedbackDTO> feedbackDtoList = orderService.getAllFeedback();
		
		return Response.success(feedbackDtoList);
	}
	
	
	//add product/combo to cart or update quantity if already exist
	@PostMapping("/order/addtocart")
	public ResponseEntity<?> addToCart(@RequestBody CartDTO cartDto)
	{
		Map<String,Object> result = orderService.addToCart(cartDto);
			if(result != null )
				return Response.success(result);
			return Response.error("error in add into cart");
	}
	
	//get all cart items of user
	@GetMapping("/order/getallcartitem/{userId}")
	public ResponseEntity<?> getAllCartItem(@PathVariable("userId") int userId)
	{
		CartDTO cartDto = orderService.getAllCartItem(userId);
		if(cartDto != null)
			return Response.success(cartDto);
		return Response.error("cart is empty");
		
	}
	
	//increment quantity of item in cart
	@PutMapping("/order/increment-quantity/{cartDetailId}")
	public ResponseEntity<?> incrementQuantity(@PathVariable("cartDetailId") int cartDetailId)
	{
		Map<String,Object> result = orderService.incrementQuantity(cartDetailId);
		return Response.success(result);
	}
	
	
	//decrement quantity of item in cart
	@PutMapping("/order/decrement-quantity/{cartDetailId}")
	public ResponseEntity<?> decrementQuantity(@PathVariable("cartDetailId") int cartDetailId)
	{
		Map<String,Object> result = orderService.decrementQuantity(cartDetailId);
		if(result != null)
			return Response.success(result);
		return Response.error("can't decrement");
	}
	
	
	@PutMapping("/order/update-quantity/{cartDetailId}/{quantity}")
	public ResponseEntity<?> updateQuantity(@PathVariable("cartDetailId") int cartDetailId,@PathVariable("quantity") int quantity)
	{
		Map<String,Object> result = orderService.updateQuantity(cartDetailId,quantity);
		if(result != null)
			return Response.success(result);
		return Response.error("can't decrement");
	}
	
	
	
	//remove item from cart
	@DeleteMapping("/order/delete-item/{cartDetailId}")
	public ResponseEntity<?> deleteFromCart(@PathVariable("cartDetailId") int cartDetailId)
	{
			orderService.deleteFromCart(cartDetailId);
				return Response.success("deleted...");
	}
	
	
	//get all orders by userId
	@GetMapping("/order/getall-custorders/{userId}")
	public ResponseEntity<?> getCustomerAllOrder(@PathVariable("userId") int userId)
	{
		List<OrderDTO> orderDtoList = orderService.getCustomerAllOrder(userId);
		if(orderDtoList != null)
			return Response.success(orderDtoList);
		return Response.error("no order available...");
	}
	
	//get pending orders in customer page
		@GetMapping("/order/getcustomer-pendingorders/{userId}")
		public ResponseEntity<?> getCustomerPendingOrders(@PathVariable("userId") int userId)
		{
			List<OrderDTO> orderDtoList = orderService.getCustomerPendingOrders(userId);
			if(orderDtoList.size() != 0)
				return Response.success(orderDtoList);
			return Response.error("no pending order available...");
		}
		
		
		@GetMapping("/order/get-assignedorder/{userId}")
		public ResponseEntity<?> getAssignedOrder(@PathVariable("userId") int userId)
		{
			OrderDTO orderDto = orderService.getAssignedOrder(userId);
			
			if(orderDto != null)
				return Response.success(orderDto);
			return Response.error("no order assigned");
			
		}
		
		@GetMapping("/order/get-orderstatus/{orderId}")
		public ResponseEntity<?> getOrderDetails(@PathVariable("orderId") int orderId)
		{
			String orderStatus = orderService.getOrderDetails(orderId);
				return Response.success(orderStatus);
		}
	
		
		// this method is used to send the mail after ticket booking
		@PostMapping("/sendMail")
		public ResponseEntity<?> processForm(@RequestBody Email em)
		{
			System.out.println(em.getEmail() + "  " + em.getMessage());
			SimpleMailMessage mesg = new SimpleMailMessage();
			mesg.setTo(em.getEmail());
			mesg.setSubject(em.getSubject());
			mesg.setText(em.getMessage());
			sender.send(mesg);
			return Response.success(em);
		}
		
		
		
		@ExceptionHandler(Exception.class)
		   public ResponseEntity<?> exceptionHandler(Exception e)
		   {
		       System.out.println("Found Exception ..!!");
		       e.printStackTrace();
		       return Response.error(e.getMessage());
		   }
		
		
		
	

		
		
		
	
}
