package com.photographres.photog.service;

import java.util.List;



import com.photographres.photog.entity.EventsList;


public interface EventListService {
List<EventsList> fetchEventDetails();
	
	List<EventsList>fetchEventDetails1(long price);


}
