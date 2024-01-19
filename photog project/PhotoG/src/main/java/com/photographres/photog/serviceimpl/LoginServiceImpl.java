package com.photographres.photog.serviceimpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.photographres.photog.entity.Login;
import com.photographres.photog.repository.LoginRepository;
import com.photographres.photog.service.LoginService;

@Service
public class LoginServiceImpl  implements LoginService{

	@Autowired
	LoginRepository lrepo;
	
	@Override
	public Login loginCustomer(String username, String password) {
		Login login = lrepo.findByUserNameAndPassword(username, password);
		return login;
	}

}

