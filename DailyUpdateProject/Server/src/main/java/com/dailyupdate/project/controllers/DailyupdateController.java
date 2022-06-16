package com.dailyupdate.project.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.dailyupdate.project.daos.DailyupdateRepository;
import com.dailyupdate.project.daos.UserRepository;
import com.dailyupdate.project.entities.dailyUpdate;
import com.dailyupdate.project.services.DailyupdateService;

import org.springframework.web.bind.annotation.RequestParam;

@RestController
@RequestMapping("/dailyupdate")
@CrossOrigin
public class DailyupdateController {

	@Autowired
	private DailyupdateService dailyupdateService;
	
	@PostMapping("/add")
	public dailyUpdate add(@RequestBody dailyUpdate du) {
		return dailyupdateService.add(du);
	}
	
	@GetMapping("/get/{task_id}")
	public dailyUpdate get(@PathVariable  Integer task_id) {
		return dailyupdateService.get(task_id);
		
	}
	
	@GetMapping("/getall")
	public List<dailyUpdate> getall() {
		return dailyupdateService.getall();
	}
	
	
	
	
	
	
	
	
}
