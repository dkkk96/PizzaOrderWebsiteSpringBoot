package com.app.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.entities.Address;

public interface IAddressDao extends JpaRepository<Address, Integer>{
	@Query(value = "select * from address s where s.user_id = ?", 
	  nativeQuery = true)
	Address findByUserId(int userId);
}
