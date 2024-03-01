package com.app.controllers;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.dtos.ComboDTO;
import com.app.dtos.ProductDTO;
import com.app.dtos.Response;
import com.app.dtos.SubCategoryDTO;
import com.app.dtos.ToppingDTO;
import com.app.entities.Combo;
import com.app.entities.Product;
import com.app.services.ComboServiceImpl;
import com.app.services.ProductServiceImpl;
import com.app.services.ToppingServiceImpl;

@CrossOrigin(origins = "*")
@RestController
public class ProductController {

	@Autowired
	private ComboServiceImpl comboService;
	@Autowired
	private ToppingServiceImpl toppingService;
	
	
	
	@Autowired
	private ProductServiceImpl productService;
	



	
	
	//get all combo details 
	@GetMapping("/product/getall-combo")
	public ResponseEntity<?> getAllCombo()
	{
		List<Combo> productDtoList = comboService.getAllCombo();
		
		return Response.success(productDtoList);
	}
	
	//add combo details 
		@PostMapping("/product/add-combo")
		public ResponseEntity<?> addCombo(@RequestBody ComboDTO comboDto) {
			Map<String, Object> result = comboService.saveCombo(comboDto);
			return Response.success(result);
		}
	
	//edit combo details 
	@PutMapping("/product/edit-combo/{comboId}")
	public ResponseEntity<?> editCombo(@PathVariable("comboId") int comboId,@RequestBody ComboDTO comboDto) {
		Map<String, Object> result = comboService.editCombo(comboId,comboDto);
		if(result != null)
			return Response.success(result);
		return Response.error("combo does not exist");
	}
	
	
	//delete combo
	@DeleteMapping("/product/delete-combo/{comboId}")
	public ResponseEntity<?> deleteCombo(@PathVariable("comboId") int comboId) {
		Map<String, Object> result = comboService.deleteCombo(comboId);
		return Response.success(result);
	}
	
	
	//add topping
	@PostMapping("/product/add-topping")
	public ResponseEntity<?> addTopping(@RequestBody ToppingDTO toppingDto)
	{
		Map<String, Object> result = toppingService.addTopping(toppingDto);
		return Response.success(result);
	}
	
	
	//add product details 
	@PostMapping("/product/add-product")
	public ResponseEntity<?> addProduct(@RequestBody ProductDTO productDto) {
		Product result = productService.saveProduct(productDto);
		return Response.success(result);
	}
	
	
	//esit product details 
	@PutMapping("/product/edit-product/{productId}")
	public ResponseEntity<?> editProduct(@PathVariable("productId") int productId,@RequestBody ProductDTO productDto) {
		ProductDTO result = productService.editProduct(productId,productDto);
		if(result != null)
			return Response.success(result);
		return Response.error("product does not exist");
	}
	
	
	//delete product
	@DeleteMapping("/product/delete-product/{productId}")
	public ResponseEntity<?> deleteProduct(@PathVariable("productId") int productId) {
		Map<String, Object> result = productService.deleteProduct(productId);
		return Response.success(result);
	}
	
	//add subcategory to product
	@PostMapping("/product/add-subcategory")
	public ResponseEntity<?> addSubCategory(@RequestBody SubCategoryDTO subCategoryDto)
	{
		Map<String, Object> result = productService.addSubCategory(subCategoryDto);
		if(result == null)
			return Response.error("sub-category already exist");
		return Response.success(result);
	}
	
	//edit subcategory
	@PutMapping("/product/edit-subcategory/{productId}")
	public ResponseEntity<?> editSubCategory(@PathVariable("productId") int productId,@RequestBody SubCategoryDTO subCategoryDto) {
		Map<String, Object> result = productService.editSubCategory(productId,subCategoryDto);
		if(result != null)
			return Response.success(result);
		return Response.error("product does not exist");
	}

	//get all products have veg category
	@GetMapping("/product/getall-vegproducts")
	public ResponseEntity<?> getAllVegProducts()
	{
		List<ProductDTO> productDtoList = productService.getAllVegProducts();
		
		return Response.success(productDtoList);
	}
	
	//get all product which have non-veg category
	@GetMapping("/product/getall-nonvegproducts")
	public ResponseEntity<?> getAllNonVegProducts()
	{
		List<ProductDTO> productDtoList = productService.getAllNonVegProducts();
		
		return Response.success(productDtoList);
	}
	
	
//	@GetMapping("/product/get-subcategory/{productId}")
//	public ResponseEntity<?> getSubCategory(@PathVariable("productId") int productId)
//	{
//		List<SubCategoryDTO> subCategoryList = productService.getSubCategory(productId);
//		if(subCategoryList == null)
//			return Response.error("subCategory not found");
//		return Response.success(subCategoryList);
//	}
	
	//get default price of product(i.e.price of Regular and New Hand Tossed pizza)
	@GetMapping("/product/get-defaultPrice/{productId}")
	public ResponseEntity<?> getDefaultPrice(@PathVariable("productId") int productId)
	{
		SubCategoryDTO subCategoryDto = productService.getDefaultPrice(productId);
		if(subCategoryDto == null)
			return Response.error("subCategory not found");
		return Response.success(subCategoryDto);
	}
	
	//get product price after changing size or crust type
	@PostMapping("/product/get-ProductPrice")
	public ResponseEntity<?> getProductPrice(@RequestBody SubCategoryDTO subCategoryDto)
	{
		SubCategoryDTO result = productService.getProductPrice(subCategoryDto);
		System.out.println(result);
		if(result == null)
			return Response.error("subCategory not found");
		return Response.success(result);
	}
	
	
	@GetMapping("/product/get-productsizes/{productId}")
	public ResponseEntity<?> getProductSizes(@PathVariable("productId") int productId)
	{
		List<String> sizeList = productService.getProductPrices(productId);
		if(sizeList != null)
			return Response.success(sizeList);
		return Response.error("size list is empty");
	}
	
	@GetMapping("/product/get-productcrust/{productId}/{size}")
	public ResponseEntity<?> getProductCrust(@PathVariable("productId") int productId,@PathVariable("size") String size)
	{
		List<String> crustList = productService.getProductCrustBySize(productId,size);
		if(crustList != null)
			return Response.success(crustList);
		return Response.error("size list is empty");
	}
	
	
	
	@ExceptionHandler(Exception.class)
	   public ResponseEntity<?> exceptionHandler(Exception e)
	   {
	       System.out.println("Found Exception ..!!");
	       e.printStackTrace();
	       return Response.error(e.getMessage());
	   }
	
}
