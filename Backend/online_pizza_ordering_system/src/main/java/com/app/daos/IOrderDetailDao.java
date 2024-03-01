package com.app.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.OrderDetail;

public interface IOrderDetailDao extends JpaRepository<OrderDetail, Integer>{

}
