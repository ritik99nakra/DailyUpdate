package com.dailyupdate.project.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.dailyupdate.project.entities.User;

public interface UserRepository extends JpaRepository<User, Integer>  {

	@Query(value = "SELECT u from User u where u.email= :email and u.password= :password")
	public User login(@Param("email")String email,@Param("password")String password);
	
	@Query(value="SELECT DISTINCT(Team)  FROM User u WHERE u.mentor = :mentor")
	public List<User> getTeams(@Param("mentor")String mentor);
}
