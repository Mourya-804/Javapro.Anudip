package com.photographres.photog.repository;

import java.util.List;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.photographres.photog.entity.EventsList;

public interface EventsListRepository extends JpaRepository<EventsList,Integer> {
	  @Query("Select el from EventsList el where el.price=?1")
	   List<EventsList> findByPrice(long price);

	
	}
