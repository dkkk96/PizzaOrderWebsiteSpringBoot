package com.app.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.entities.Cart;

public interface ICartDao extends JpaRepository<Cart, Integer>{

	
	@Query(value = "select * from cart c where c.user_id = ?", 
			  nativeQuery = true)
			Cart findByUserId(int userId);
}
