package com.photographres.photog.entity;

import jakarta.persistence.Column;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name="UserInformation")
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int uId;
	
	
	
	@Column(length=25,nullable=false)
	@NotBlank(message="user name is mandatory to fill")
	private String uName;
	
	
	@Column(length=35)
	private String uSurname;
	
	@Column(length=25,nullable=false,unique=true)
	@NotBlank(message="user Email is mandatory to fill")
	@Email(message="Email is not proper")
	private String Email;
	
	@Column(length=12,nullable=false,unique=true)
	@NotNull(message="phone number is mandatory to fill")
	private long uPhone;
	
	@Column(length=40)
	private String addr;

   
      
}
