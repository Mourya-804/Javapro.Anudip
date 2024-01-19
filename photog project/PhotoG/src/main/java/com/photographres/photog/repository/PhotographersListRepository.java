package com.photographres.photog.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.photographres.photog.entity.PhotographersList;

public interface PhotographersListRepository  extends JpaRepository<PhotographersList, Integer>{
	
	@Query("Select pgl from PhotographersList pgl where pgl.city=?1")
	List<PhotographersList> findByCitty(String city);
}
