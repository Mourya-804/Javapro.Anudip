package com.photographres.photog.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.photographres.photog.entity.PaymentDetails;

public interface PaymentRepository  extends JpaRepository<PaymentDetails, Integer>{
	
}

