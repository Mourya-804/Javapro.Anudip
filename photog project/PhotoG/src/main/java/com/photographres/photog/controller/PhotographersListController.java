package com.photographres.photog.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;


import com.photographres.photog.entity.PhotographersList;
import com.photographres.photog.service.PhotographersListService;


@RestController
public class PhotographersListController {
	
	@Autowired
	PhotographersListService phh;
	
	
	//get mapping to fetch all photographers
		@GetMapping("/getPhotographersList")
		public List<PhotographersList> getPhotographersList(){
			return phh.fetchPhotographersListDetails()	;
			
			
					}
		
		//get mapping with parameter for Photographers list as per city
		@GetMapping("/getPhotographersListt/{city}")
		public List<PhotographersList> getPhotographersListByCity(@PathVariable("city") String city){
			return phh.fetchPhotographersListDetails1(city);
		}
}


	


