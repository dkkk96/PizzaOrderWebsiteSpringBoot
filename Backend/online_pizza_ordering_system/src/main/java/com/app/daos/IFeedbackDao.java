package com.app.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Feedback;

public interface IFeedbackDao extends JpaRepository<Feedback, Integer>{
	
}
