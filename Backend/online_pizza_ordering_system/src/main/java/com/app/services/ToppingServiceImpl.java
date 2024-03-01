package com.app.services;

import java.util.Collections;
import java.util.Map;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.daos.IToppingDao;
import com.app.dtos.DtoEntityConverter;
import com.app.dtos.ToppingDTO;
import com.app.entities.Topping;

@Transactional
@Service
public class ToppingServiceImpl {

	@Autowired
	private IToppingDao toppingDao;
	
	@Autowired
	private DtoEntityConverter converter;
	
	
	public Map<String, Object> addTopping(ToppingDTO toppingDto)
	{
		Topping topping = converter.toToppingEntity(toppingDto);
		
		toppingDao.save(topping);
		
		return Collections.singletonMap("inserted rows count ", 1);
	}
}
