package com.photographres.photog.serviceimpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.photographres.photog.entity.PaymentDetails;
import com.photographres.photog.repository.PaymentRepository;
import com.photographres.photog.service.PaymentService;

@Service
public class PaymentServiceImpl implements PaymentService{
	
	@Autowired
	PaymentRepository pprepo;

	@Override
	public PaymentDetails addPayment(PaymentDetails paymentdetails) {
		return pprepo.save(paymentdetails);
	}

	
}
