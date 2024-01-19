package com.photographres.photog.entity;

import jakarta.persistence.Column;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;


@Entity
@Getter
@Setter

@Table(name="Photographres_list")

	public class PhotographersList {

	
	@Id
	private int phid;
	
	
	@Column(name="photographerName" ,length=30,nullable=false)
	private String photographerName;
	
	@Column(name="contactNo" ,nullable=false,unique=false)
	private long contactNo;
	
	@Column(name="city" ,length=30,nullable=false)
	private String city;
	
	
	@Column(name="avaliability" ,nullable=false)
	private String avaliability;

}


