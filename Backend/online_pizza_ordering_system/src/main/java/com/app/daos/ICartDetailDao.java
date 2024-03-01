package com.app.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.entities.CartDetail;

public interface ICartDetailDao extends JpaRepository<CartDetail, Integer>{

	@Query(value = "select * from cart_detail cd where cd.cart_id = ?", 
			  nativeQuery = true)
			List<CartDetail> findByCartId(int cartId);
}
