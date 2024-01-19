package com.photographres.photog.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.photographres.photog.entity.Login;

public interface LoginRepository extends JpaRepository<Login, Integer>{
	
	public Login findByUserNameAndPassword(String username, String password);

}
