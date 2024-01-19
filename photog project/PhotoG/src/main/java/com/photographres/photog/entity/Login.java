package com.photographres.photog.entity;

import jakarta.persistence.Column;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Login {
	
	@Id
	private int loginId;
	
	@NotBlank
	@Column(length=10, nullable = false)
	private String userName;
	
	@Column(length=10, nullable = false)
	private String password;

}
