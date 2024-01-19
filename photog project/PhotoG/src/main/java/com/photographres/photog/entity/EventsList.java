package com.photographres.photog.entity;

import jakarta.persistence.Column;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;


@Entity
@Getter
@Setter
public class EventsList {
	
	@Id
	private int Eid;
	
	@Column(length=50, nullable = false)
	private String EventsName;
	
	
	
	@Column(nullable = false)
	private long price;
	
	
	
	@Column(length=80, nullable = false)
	private String Description;
	
}



