package com.photographres.photog.service;

import com.photographres.photog.entity.User;

public interface UserService {
	//register a new customer in database table
	User regiterUser(User user);
	//edit existing customer detail bases on id from database table
	User editUser(User user,int uId);
	//removing existing customer record based on id  from database table
	void removeUser(int uId);
	//fetch customer detail bases on id from database table
	User fetchUserDetai1(int uId);
	

}