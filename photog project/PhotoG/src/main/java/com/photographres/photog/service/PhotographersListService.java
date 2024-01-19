package com.photographres.photog.service;

import java.util.List;


import com.photographres.photog.entity.PhotographersList;



public interface PhotographersListService {
	//fetch photographers list from db table 
		List<PhotographersList>   fetchPhotographersListDetails();
		
		//fetch packages list from db table  as per city
		List<PhotographersList>   fetchPhotographersListDetails1(String city);


}
