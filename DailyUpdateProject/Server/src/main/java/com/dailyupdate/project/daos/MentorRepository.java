package com.dailyupdate.project.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.dailyupdate.project.entities.Mentor;
import com.dailyupdate.project.entities.User;

@Repository
public interface MentorRepository extends JpaRepository<Mentor, Integer> {
	
	
	@Query(value = "SELECT m from Mentor m where m.name= :name")
	public Mentor getMentor(@Param("name")String name);
}
