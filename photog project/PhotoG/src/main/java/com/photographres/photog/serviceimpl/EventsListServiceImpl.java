package com.photographres.photog.serviceimpl;

import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.photographres.photog.entity.EventsList;
import com.photographres.photog.repository.EventsListRepository;
import com.photographres.photog.service.EventListService;


@Service
public class EventsListServiceImpl implements EventListService {
	  @Autowired
	  EventsListRepository elrepo;
	  @Override
		public List<EventsList> fetchEventDetails() {
			
			return elrepo.findAll();
		}
	  @Override
		public List<EventsList> fetchEventDetails1(long price) {
			
			return elrepo.findByPrice(price);
		}
		   
			



}
