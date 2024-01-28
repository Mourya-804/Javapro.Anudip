
package com.photographres.photog.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;


import jakarta.persistence.Column;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;
@Entity
@Getter
@Setter
public class Bookings {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int bid;
    @NotBlank(message="Name is mandotory to mention")
	@Column(length=15, nullable = false)
	private String EventName;
    
	
	@NotBlank(message="noOfDays is mandotory")
	@Column(length=15, nullable = false)
	private String noOfDays;
	@NotBlank(message="City is mandotory")
	@Column(length=30, nullable = false)
	private String City;
	@NotBlank(message="Photographers name is mandotory")
	@Column(length=50, nullable = false)
	private String photographerName;
	@ManyToOne()
	@JoinColumn(name="UserId", referencedColumnName = "uId")
	@JsonBackReference
	User user;

}

