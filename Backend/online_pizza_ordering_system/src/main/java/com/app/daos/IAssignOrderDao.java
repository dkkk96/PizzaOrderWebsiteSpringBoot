package com.app.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.entities.AssignOrder;

public interface IAssignOrderDao extends JpaRepository<AssignOrder, Integer>{

	@Query(value = "select * from assign_order ao where ao.order_id = ?", 
			  nativeQuery = true)
			AssignOrder findByOrderId(int orderId);
	
	@Query(value = "select * from assign_order ao where ao.user_id = ?", 
			  nativeQuery = true)
			AssignOrder findByUserId(int userId);

}
