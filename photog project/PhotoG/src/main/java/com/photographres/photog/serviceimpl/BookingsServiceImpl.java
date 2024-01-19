package com.photographres.photog.serviceimpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.photographres.photog.entity.Bookings;
import com.photographres.photog.exception.BookingIdNotFoundException;
import com.photographres.photog.repository.BookingsRepository;
import com.photographres.photog.service.BookingsService;




@Service
public class BookingsServiceImpl  implements BookingsService{
	@Autowired
	BookingsRepository bbrepo;

	@Override
	public Bookings registerBookings(Bookings bookings) {
		return bbrepo.save(bookings);
	}

	@Override
	public void removeBookings(int bid) {
		bbrepo.findById(bid).orElseThrow(() -> new com.photographres.photog.exception.BookingIdNotFoundException("Enter id is incorrect bookingid, please check"));
	       bbrepo.deleteById(bid);
		
	}

	@Override
	public Bookings fetchBookingsDetail(int bid) {
		return bbrepo.findById(bid).orElseThrow(() -> new BookingIdNotFoundException("Enter id is incorrect bookingid, please check"));
	}
		

}


