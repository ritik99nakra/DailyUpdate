package com.dailyupdate.project.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dailyupdate.project.entities.User;
import com.dailyupdate.project.entities.dailyUpdate;

public interface DailyupdateRepository extends JpaRepository<dailyUpdate, Integer> {

}
