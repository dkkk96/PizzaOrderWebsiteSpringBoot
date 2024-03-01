package com.app.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Combo;

public interface IComboDao extends JpaRepository<Combo, Integer> {

}
