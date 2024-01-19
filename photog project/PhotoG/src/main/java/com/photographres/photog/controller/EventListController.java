package com.photographres.photog.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.photographres.photog.entity.EventsList;
import com.photographres.photog.service.EventListService;


@RestController
public class EventListController {
	@Autowired
	EventListService e;
	
	//get mapping to fetch all event
	@GetMapping("/getEventsList")
	public List<EventsList> getEvents(){
		return e.fetchEventDetails();
	}
	
	
	
	@GetMapping("/getEventsListByprice/{price}")
	public List<EventsList> getEventsByPrice(@PathVariable("price") long price){
		return e.fetchEventDetails1(price);
	}

	


}
