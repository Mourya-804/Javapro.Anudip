package com.photographres.photog.repository;




import org.springframework.data.jpa.repository.JpaRepository;

import com.photographres.photog.entity.User;



//repository to get all predefined methods of Jpa repository
public interface UserPRepository extends  JpaRepository<User,Integer>{
 //custom query
}

