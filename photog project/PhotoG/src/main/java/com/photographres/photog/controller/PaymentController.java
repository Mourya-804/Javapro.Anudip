package com.photographres.photog.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.photographres.photog.entity.PaymentDetails;
import com.photographres.photog.service.PaymentService;

import jakarta.validation.Valid;

@RestController
public class PaymentController {
	
	@Autowired
	PaymentService pps;
	
	@PostMapping("/savePayment")
	public ResponseEntity<PaymentDetails> saveBookings(@Valid @RequestBody PaymentDetails paymentDetails){
		return new ResponseEntity<PaymentDetails>(pps.addPayment(paymentDetails),HttpStatus.CREATED);
	}
}
