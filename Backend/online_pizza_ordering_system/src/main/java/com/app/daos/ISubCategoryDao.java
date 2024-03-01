package com.app.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.entities.SubCategory;

public interface ISubCategoryDao extends JpaRepository<SubCategory, Integer>{

	
	@Query(value = "select * from sub_category s where s.product_id = ?", 
	  nativeQuery = true)
	List<SubCategory> findByProductId(int productId);
	
	@Query(value = "select distinct s.size from sub_category s where s.product_id = ?", 
			  nativeQuery = true)
			List<String> getProductSize(int productId);
	
	@Query(value = "select s.crust_type from sub_category s where s.product_id = ? and s.size = ?", 
			  nativeQuery = true)
			List<String> getProductCrustBySize(int productId,String size);
	
	
}
