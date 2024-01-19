package com.photographres.photog.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.photographres.photog.entity.Bookings;


public interface BookingsRepository   extends JpaRepository<Bookings,Integer> {

}
