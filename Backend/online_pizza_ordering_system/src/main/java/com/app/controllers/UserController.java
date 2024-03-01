package com.app.controllers;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.dtos.AddressDTO;
import com.app.dtos.Credential;
import com.app.dtos.Response;
import com.app.dtos.UserAddressDTO;
import com.app.dtos.UserDTO;
import com.app.services.UserServiceImpl;

@CrossOrigin(origins = "*")
@RestController
public class UserController {

	@Autowired
	private UserServiceImpl userService;
	
	//user (admin/employee,customer ) signin
	@PostMapping("/user/signin")
	public ResponseEntity<?> signIn(@RequestBody Credential cred) {
		UserDTO userDto = userService.findUserByEmailAndPassword(cred);
		if(userDto == null)
			return Response.error("user not found");
		return Response.success(userDto);
	}
	

	 //register user(customer/employee)
	 @PostMapping("/user/register")
		public ResponseEntity<?> registerUser(@RequestBody UserDTO userDto)
		{
		 	UserDTO result = userService.saveUserDetails(userDto);
		 	return Response.success(result);
		}
	 
	 
	 //user forgot password
	 @PutMapping("/user/forgot-password")
	 public ResponseEntity<?> forgotPassword(@RequestBody Credential cred)
	 {
		 Map<String,Object> result= userService.resetPassword(cred);
		 if(result == null )
			 return Response.error("user not found");
		return Response.success("Password updated");
		 
	 }
	 
	 //search user(employee ) by email
	 @GetMapping("/user/search-employee/{email}")
	 public ResponseEntity<?> searchEmployee(@PathVariable("email") String email)
	 {
		 UserDTO userDto = userService.findUserByEmail(email);
		 if(userDto == null )
			 return Response.error("user not found");
		return Response.success(userDto);
	 }
	 
	 //update employee details(emp role by admin)
	 @PutMapping("/user/update-employee/{userId}")
	 public ResponseEntity<?> updateEmployeeDetails(@PathVariable("userId") int userId,@RequestBody UserAddressDTO userAddressDto)
	 {
		 Map<String, Object> result = userService.updateEmployeeDetails(userId, userAddressDto);
		
		 return Response.success(result);
		 	
	 }

	 //add address of user
	 @PostMapping("/user/add-address/{userId}")
		public ResponseEntity<?> addAddress(@PathVariable("userId") int userId, @RequestBody AddressDTO addressDto) {
			Map<String, Object> result = userService.addAddress(userId, addressDto);
			return Response.success(result);
		}
	
	 
	 @GetMapping("/user/user-details/{userId}")
	 public ResponseEntity<?> getUserDetail(@PathVariable("userId") int userId)
	 {
		 UserDTO userDto = userService.getUserDetails(userId);
		 if(userDto != null)
			 return Response.success(userDto);
		 return Response.error("user not found");
	 }
	 
	 
	 @PutMapping("/user/update-profile/{userId}")
		public ResponseEntity<?> registerUser(@PathVariable("userId") int userId ,@RequestBody UserDTO userDto)
		{
		 	Map<String,Object> result = userService.updateUser(userId,userDto);
		 	if(result != null)
		 		return Response.success(result);
		 	return Response.error("user not found");
		}
	 
	 
	 @ExceptionHandler(Exception.class)
	   public ResponseEntity<?> exceptionHandler(Exception e)
	   {
	       System.out.println("Found Exception ..!!");
	       e.printStackTrace();
	       return Response.error(e.getMessage());
	   }
}
