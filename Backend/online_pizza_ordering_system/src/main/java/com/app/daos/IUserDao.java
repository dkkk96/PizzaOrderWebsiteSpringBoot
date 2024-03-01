package com.app.daos;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.entities.User;

public interface IUserDao extends JpaRepository<User, Integer>{

	User findByEmail(String email);
	Optional<User> findByEmailAndPassword(String email, String password);
	
	
	User findByEmailAndMobileNo(String email, String mobileNo);
	
	@Query(value = "select * from user u where u.role = 'employee' and u.is_free = 1 ",nativeQuery = true)
			List<User> findFreeEmp();
	
}
