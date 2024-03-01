package com.app.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.entities.Order;

public interface IOrderDao extends JpaRepository<Order, Integer>{

	
	@Query(value = "select * from orders o where o.user_id = ?", 
			  nativeQuery = true)
			List<Order> findByUserId(int userId);
}
