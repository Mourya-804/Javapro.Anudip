package com.photographres.photog.serviceimpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.photographres.photog.entity.User;
import com.photographres.photog.exception.UserIdNotFoundException;
import com.photographres.photog.repository.UserPRepository;
import com.photographres.photog.service.UserService;

@Service
public  class UserServiceImpl implements UserService
{   @Autowired
	 UserPRepository userrepo;

	@Override
	public User regiterUser(User user) {
		return userrepo.save(user);
	}

	@Override
	public User editUser(User user, int uId) {
		User updatedUserdetails = userrepo.findById(uId).orElseThrow(() -> new UserIdNotFoundException("Entered Customer id is not proper / Invalid"));
		updatedUserdetails.setUPhone(user.getUPhone());
		updatedUserdetails.setAddr(user.getAddr());
		
		userrepo.save(updatedUserdetails); //saving updated info in Customer Entity
		return updatedUserdetails;
	}

	

	@Override
	public User fetchUserDetai1(int uId) {
		// TODO Auto-generated method stub
		return userrepo.findById(uId).orElseThrow(() -> new UserIdNotFoundException("Entered Customer id is not proper / Invalid"));
	}
	



	@Override
	public void removeUser(int uId) {
		// TODO Auto-generated method stub
		userrepo.findById(uId).orElseThrow(() -> new UserIdNotFoundException("Entered Customer id is not proper/Invalid"));
		//if id found then delete data of customer 
		userrepo.deleteById(uId);



		
	}
	

	
	

	}