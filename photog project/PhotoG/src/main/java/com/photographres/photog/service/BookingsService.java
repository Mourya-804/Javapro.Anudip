package com.photographres.photog.service;

import com.photographres.photog.entity.Bookings;

public interface BookingsService {	

	//register an new Bookings in db table
	Bookings registerBookings(Bookings bookings);
	
	//remove existing Bookings record based on id from db table
	void removeBookings(int bid);
	
	//fetch Bookings details based on from db table
	Bookings fetchBookingsDetail(int bid);
}


