package com.dailyupdate.project.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dailyupdate.project.daos.DailyupdateRepository;
import com.dailyupdate.project.daos.UserRepository;
import com.dailyupdate.project.entities.User;
import com.dailyupdate.project.entities.dailyUpdate;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;
	
	
	public User addUser(User u) {
		return userRepository.save(u);
		
	}
	

	public User getUser(Integer task_id) {
		return userRepository.findById(task_id).get();
		
	}
	
	
	public List<User> getallUsers() {
		
		List<User> list1 = new ArrayList<> ();
		List<User> list = userRepository.findAll();
		for(User u : list) {
			if(!u.getRole().equalsIgnoreCase("admin")) {
				list1.add(u);
			}
		}
		return list1;
		
	}
	
	public String deleteUser(Integer task_id) {
		userRepository.deleteById(task_id);
		return "Delete successfully!";
		
	}
}
