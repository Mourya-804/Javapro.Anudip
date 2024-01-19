package com.photographres.photog.serviceimpl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.photographres.photog.entity.PhotographersList;
import com.photographres.photog.repository.PhotographersListRepository;
import com.photographres.photog.service.PhotographersListService;

@Service
public class PhotographersListServiceImpl implements PhotographersListService{
	
	@Autowired
	PhotographersListRepository photorepo;
	
	public List<PhotographersList> fetchPhotographersListDetails() {
		return photorepo.findAll();
	}

	@Override
	public List<PhotographersList> fetchPhotographersListDetails1(String city) {
		return photorepo.findByCitty(city);

	}

}
