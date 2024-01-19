package com.photographres.photog.controller;

import org.springframework.beans.factory.annotation.Autowired;


import org.springframework.http.HttpStatus;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.photographres.photog.entity.User;
import com.photographres.photog.service.UserService;

import jakarta.validation.Valid;



@RestController
public class UserController {
	@Autowired
	UserService usp;
	@PostMapping("/registerUserDetail")
	public ResponseEntity<User> saveUser(@Valid @RequestBody User user)
	{
		return new ResponseEntity<User>(usp.regiterUser(user),HttpStatus.CREATED);
	}
	
	
	
	@GetMapping("/fetchUserDetail/{uId}")
	public ResponseEntity<User> fetchUser(@PathVariable("uId") int uId){
		return new ResponseEntity<User>(usp.fetchUserDetai1(uId), HttpStatus.OK);
	}

	@DeleteMapping("/deleteUserDetail/{uId}")
	public ResponseEntity<String> deleteUser(@PathVariable("uId") int uId){
		
	usp.removeUser(uId);
		return new ResponseEntity<String>("Deleted Customer Record", HttpStatus.OK);
}
	@PutMapping("/editUserDetail/{uId}")
	public ResponseEntity<User> editUser(@Valid @PathVariable("uId") int uId,
			@RequestBody User user){
		return new ResponseEntity<User>(usp.editUser(user, uId), HttpStatus.OK);
	}
}
