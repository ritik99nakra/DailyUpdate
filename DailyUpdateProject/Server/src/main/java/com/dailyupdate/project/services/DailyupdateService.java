package com.dailyupdate.project.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.dailyupdate.project.daos.DailyupdateRepository;
import com.dailyupdate.project.entities.dailyUpdate;

@Service
public class DailyupdateService {

	@Autowired
	private DailyupdateRepository dailyupdateRepository;
	
	
	public dailyUpdate add(dailyUpdate du) {
		return dailyupdateRepository.save(du);
		
	}
	

	public dailyUpdate get(Integer task_id) {
		return dailyupdateRepository.findById(task_id).get();
		
	}
	
	
	public List<dailyUpdate> getall() {
		return dailyupdateRepository.findAll();
		
	}
	
	public void delete(Integer task_id) {
		dailyupdateRepository.deleteById(task_id);
		
	}
}
