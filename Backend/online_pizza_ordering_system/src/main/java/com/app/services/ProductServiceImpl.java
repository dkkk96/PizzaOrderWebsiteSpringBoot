package com.app.services;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Map;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.daos.IProductDao;
import com.app.daos.ISubCategoryDao;
import com.app.dtos.DtoEntityConverter;
import com.app.dtos.ProductDTO;
import com.app.dtos.SubCategoryDTO;
import com.app.entities.Product;
import com.app.entities.SubCategory;


@Transactional
@Service
public class ProductServiceImpl {

	
	@Autowired
	private IProductDao productDao;
	
	@Autowired
	private ISubCategoryDao subCategoryDao;
	
	@Autowired
	private DtoEntityConverter converter;
	
	
	public Product saveProduct(ProductDTO productDto) {
		Product product = converter.toProductEntity(productDto);
		
		Product product1 =  productDao.save(product);
		return product1;
	}
	
	
	public Map<String, Object> addSubCategory(SubCategoryDTO subCategoryDto)
	{
		//System.out.println(subCategoryDto);
		boolean flag = true;
		List<SubCategory> list= subCategoryDao.findByProductId(subCategoryDto.getProductId());
		for (SubCategory s : list) {
			if(s.getCrustType().equals(subCategoryDto.getCrustType()) && s.getSize().equals(subCategoryDto.getSize()))
			{
				flag = false;
			}
		}
		if(flag == true)
		{
		SubCategory subCategory = new SubCategory();
		subCategory.setCrustType(subCategoryDto.getCrustType());
		//subCategory.setSubCategoryId(subCategoryDto.getSubCategoryId());		
		subCategory.setPrice(subCategoryDto.getPrice());
		subCategory.setSize(subCategoryDto.getSize());
		subCategory.setProductId(subCategoryDto.getProductId());
		

		subCategoryDao.save(subCategory);
		return Collections.singletonMap("InsertedRows", 1);
		}
		else
			return null;
	}


	
	public List<ProductDTO> getAllVegProducts()
	{
		List<ProductDTO> productDtoList = new ArrayList<>(); 
		List<Product> productList = productDao.findAll();
		for (Product product : productList) {
			if(product.getCategory().equals("Veg"))
			{
				productDtoList.add(converter.toProductDto(product));
			}
		}
		
		return productDtoList;
	}
	
	public List<ProductDTO> getAllNonVegProducts()
	{
		List<ProductDTO> productDtoList = new ArrayList<>(); 
		List<Product> productList = productDao.findAll();
		for (Product product : productList) {
			if(product.getCategory().equals("NonVeg"))
			{
				productDtoList.add(converter.toProductDto(product));
			}
		}
		
		return productDtoList;
	}
	
	
	public SubCategoryDTO getDefaultPrice(int productId)
	{
		List<SubCategory> subCategoryList = subCategoryDao.findByProductId(productId);		
		for (SubCategory sub : subCategoryList) {
			if(sub.getSize().equals("Regular") && sub.getCrustType().equals("New Hand Tossed"))
			{
				return converter.toSubCategoryDto(sub);
			}
		}
		return null;
	
	}
	
	public SubCategoryDTO getProductPrice(SubCategoryDTO subCategoryDto)
	{
		List<SubCategory> subCategoryList = subCategoryDao.findByProductId(subCategoryDto.getProductId());
		
		for (SubCategory sub : subCategoryList) {
			if(sub.getSize().equals(subCategoryDto.getSize()) && sub.getCrustType().equals(subCategoryDto.getCrustType()))
			{
				return converter.toSubCategoryDto(sub);
			}
		}
		
		return null;
		
	}
	
	public Map<String,Object> deleteProduct(int productId)
	{
		productDao.deleteById(productId);
		return Collections.singletonMap("deleted row", 1);
	}
	
	public ProductDTO editProduct(int productId,ProductDTO productDto)
	{
		Product product = productDao.getById(productId);
		if(product != null)
		{
			product.setCategory(productDto.getCategory());
			product.setDescription(productDto.getDescription());
			product.setProductImage(productDto.getProductImage());
			product.setProductName(productDto.getProductName());
			product = productDao.save(product);
			return converter.toProductDto(product);
		}
		
		return null;
	}
	
	
	public Map<String, Object> editSubCategory(int productId,SubCategoryDTO subCategoryDto)
	{
		List<SubCategory> subCategoryList = subCategoryDao.findByProductId(productId);
		if(subCategoryList != null)
		{
			for (SubCategory sub : subCategoryList) {
				if(sub.getCrustType().equals(subCategoryDto.getCrustType()) && sub.getSize().equals(subCategoryDto.getSize()))
				{
					SubCategory subCategory = subCategoryDao.getById(sub.getSubCategoryId());
					subCategory.setPrice(subCategoryDto.getPrice());
					subCategory = subCategoryDao.save(subCategory);
					return Collections.singletonMap("updated Id", subCategory.getSubCategoryId());
				}
			}
		}
		SubCategory subCategory = new SubCategory();
		subCategory.setCrustType(subCategoryDto.getCrustType());	
		subCategory.setPrice(subCategoryDto.getPrice());
		subCategory.setSize(subCategoryDto.getSize());
		subCategory.setProductId(productId);
		

		subCategory = subCategoryDao.save(subCategory);
		return Collections.singletonMap("inserted Id", subCategory.getSubCategoryId());
	}
	
	
	public List<String> getProductPrices(int productId)
	{
		List<String> sizeList = subCategoryDao.getProductSize(productId);
		if(sizeList != null)
			return sizeList;
		return null;
	}
	
	public List<String> getProductCrustBySize(int productId,String size)
	{
		List<String> crustList = subCategoryDao.getProductCrustBySize(productId, size);
		if(crustList != null)
			return crustList;
		return null;
	}
	
}
