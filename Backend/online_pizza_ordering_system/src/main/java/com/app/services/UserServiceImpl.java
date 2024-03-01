package com.app.services;

import java.util.Collections;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.daos.IAddressDao;
import com.app.daos.IUserDao;
import com.app.dtos.AddressDTO;
import com.app.dtos.Credential;
import com.app.dtos.DtoEntityConverter;
import com.app.dtos.UserAddressDTO;
import com.app.dtos.UserDTO;
import com.app.entities.Address;
import com.app.entities.User;

@Transactional
@Service
public class UserServiceImpl {

	@Autowired
	private IUserDao userDao;
	@Autowired
	private IAddressDao addressDao;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	private DtoEntityConverter converter;

	public Optional<User> signIn(User user) {
		return userDao.findByEmailAndPassword(user.getEmail(),user.getPassword());
	}
	
	
	public UserDTO findUserByEmailAndPassword(Credential cred) {
		User dbUser = userDao.findByEmail(cred.getEmail());
		String rawPassword = cred.getPassword();
		if(dbUser != null && passwordEncoder.matches(rawPassword, dbUser.getPassword())) {
			UserDTO result = converter.toUserDto(dbUser);
			result.setPassword("********");
			return result;
		}
		return null;
		
	}


	
	public UserDTO saveUserDetails(UserDTO userDto) {
		String rawPassword = userDto.getPassword();
		String encPassword = passwordEncoder.encode(rawPassword);
		userDto.setPassword(encPassword);
		User user = converter.toUserEntity(userDto);
		user = userDao.save(user);
		userDto = converter.toUserDto(user);
		userDto.setPassword("*******");
		return userDto;
	}
	
	public Map<String, Object> resetPassword(Credential cred)
	{
		User resetUser = userDao.findByEmail(cred.getEmail());
		if(resetUser != null)
		{
			String rawPassword = cred.getPassword();
			String encPassword = passwordEncoder.encode(rawPassword);
			cred.setPassword(encPassword);
			//User user = converter.toUserEntity(cred);
			resetUser.setPassword(encPassword);
			resetUser = userDao.save(resetUser);
			return Collections.singletonMap("upadated id", resetUser.getUserId());
		}
		return null;
		
	}
	
	
	public UserDTO findUserByEmail(String email)
	{
		
		User user = userDao.findByEmail(email);
		if(user !=null)
		{
			UserDTO userDto = converter.toUserDto(user);
			userDto.setPassword("******************");
			return userDto;
		}
			return null;
	
	}
	
	public Map<String, Object> updateEmployeeDetails(int userId,UserAddressDTO userAddressDto)
	{
			
		User user = userDao.getById(userId);
		if(user != null )
		{
			userAddressDto.setUserId(userId);
					
				if(user.getAddress() == null)
				{
					user.setAddress(userAddressDto.getAddress());
					user.setRole(userAddressDto.getRole());
					user.setDateOfBirth(userAddressDto.getDateOfBirth());
					user.setGender(userAddressDto.getGender());
					
					user.getAddress().setUser(user);
					user.setIsFree(true);
					
					user = userDao.save(user);
					return Collections.singletonMap("InsertedRows", 1);
				}
				else {
						
					int addId=user.getAddress().getAddressId();				
					userAddressDto.getAddress().setAddressId(addId);
					user.setAddress(userAddressDto.getAddress());
					user.setRole(userAddressDto.getRole());
					user.setDateOfBirth(userAddressDto.getDateOfBirth());
					user.setGender(userAddressDto.getGender());
					user.getAddress().setUser(user);
					user.setIsFree(true);
					user = userDao.save(user);
					return Collections.singletonMap("UpdatedRows", 1);
				}
		
		}
		
		
			return Collections.singletonMap("changedRows", 0);

	}
	
	
	public Map<String, Object> addAddress(int userId, AddressDTO addressDto){
		System.out.println("In add address block");
		User user = userDao.getById(userId);
		
		if(user != null ) {
			Address add =addressDao.findByUserId(userId);
			System.out.println("In user if block");
			
			if(add != null) {
				System.out.println("In if block");
				add.setCity(addressDto.getCity());
				add.setDistrict(addressDto.getDistrict());
				add.setLine1(addressDto.getLine1());
				add.setLine2(addressDto.getLine2());
				add.setPinCode(addressDto.getPinCode());
				add.setState(addressDto.getState());
				
				add = addressDao.save(add);
				
				return Collections.singletonMap("Updated rows", 1);
			}
			else {
				
				Address add1 = new Address();
				
				System.out.println("In else block");
				add1.setCity(addressDto.getCity());
				add1.setDistrict(addressDto.getDistrict());
				add1.setLine1(addressDto.getLine1());
				add1.setLine2(addressDto.getLine2());
				add1.setPinCode(addressDto.getPinCode());
				add1.setState(addressDto.getState());
				
				add1.setUser(user);
				add1 = addressDao.save(add1);
				
				
				return Collections.singletonMap("Inserted rows", 1);
			}
		}
		return Collections.singletonMap("Updated rows", 0);
	}
	
	
	public UserDTO getUserDetails(int userId)
	{
		User user = userDao.getById(userId);
		
		if(user != null)
			return converter.toUserDto(user);
		return null;
	}
	
	
	public Map<String,Object> updateUser(int userId,UserDTO userDto)
	{
		User user = userDao.getById(userId);
		if(user != null)
		{
			user.setFirstName(userDto.getFirstName());
			user.setLastName(userDto.getLastName());
			user.setMobileNo(userDto.getMobileNo());
			String rawPassword = userDto.getPassword();
			String encPassword = passwordEncoder.encode(rawPassword);
			user.setPassword(encPassword);
			userDao.save(user);
				return Collections.singletonMap("updated id", user.getUserId());
		}
		return null;
	}
}
