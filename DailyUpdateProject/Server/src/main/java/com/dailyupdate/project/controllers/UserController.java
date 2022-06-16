package com.dailyupdate.project.controllers;

import org.springframework.stereotype.Controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.RedirectView;

import com.dailyupdate.project.daos.DailyupdateRepository;
import com.dailyupdate.project.daos.MentorRepository;
import com.dailyupdate.project.daos.UserRepository;
import com.dailyupdate.project.entities.Mentor;
import com.dailyupdate.project.entities.User;
import com.dailyupdate.project.entities.dailyUpdate;
import com.dailyupdate.project.services.DailyupdateService;
import com.dailyupdate.project.services.UserService;


@RestController
@RequestMapping("/")
@CrossOrigin
public class UserController {

	@Autowired
	private UserService userService;
	
	@Autowired
	private DailyupdateService dailyupdateService;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private DailyupdateRepository taskRepository;

	@Autowired
	private MentorRepository mentorRepository;
		
	@PostMapping("/users")
	@ResponseBody
	public User addUser(@RequestBody User u) {
		if(u.getRole().equalsIgnoreCase("MENTOR")||u.getRole().equalsIgnoreCase("Manager")) {
			Mentor ob=new Mentor();
			ob.setName(u.getName());
			ob.setEmail(u.getEmail());
			ob.setPassword(u.getPassword());
			ob.setRole(u.getRole());
			mentorRepository.save(ob);
			
		}
		return userService.addUser(u);
	}
	
	@GetMapping("/get/{id}")
	public User getUser(@PathVariable Integer id) {
		return userService.getUser(id);
		
	}
	
	@GetMapping("/users")
	public List<User> getallUsers() {
		return userService.getallUsers();
	}
	
	@DeleteMapping("/delete/{id}")
	public String deleteUser(@PathVariable Integer id) {
		return userService.deleteUser(id);
	}
	
	@PostMapping("/login")
	public User adminLogin(@RequestBody User user) {
		System.out.println("displaying index page");
		System.out.println(user.toString() );

		user = userRepository.login(user.getEmail(), user.getPassword());
		System.out.println(user.toString());
        return user;
	}
	
	@PostMapping("user/task/{id}")
	public dailyUpdate addTask(@RequestBody dailyUpdate task,@PathVariable Integer id) {
		System.out.println(task);
		task=taskRepository.save(task);

		User u=userRepository.findById(id).get();
		List<dailyUpdate> list=u.getUpdate();
		list.add(task);
		u.setUpdate(list);
		userRepository.save(u);
		System.out.println(task.toString());
		
//		ob.sendEmail(task);
		return task;
	}
	
	@GetMapping("/user/task/{id}")
	public List<dailyUpdate> getCourse(@PathVariable Integer id){
		
		User u=userRepository.findById(id).get();
		List<dailyUpdate> list=u.getUpdate();
//		List<Task> list=taskRepository.findAll();
		System.out.println(list);
		return list;
	}
	
	@GetMapping("/user/{id}")
	public List<User> showUser(@PathVariable Integer id) {
		User u=userRepository.findById(id).get();
		System.out.println(u);
		List<User> list=new ArrayList<User>();
		list.add(u);
		return list;
	}
	
	@PutMapping("/user/{id}")
	public ResponseEntity<User> updateUser(@PathVariable int id,@RequestBody User u){
		User user =userRepository.findById(id).get();
		if(u.getName()!=null)
			user.setName(u.getName());
		if(u.getEmail()!=null)
			user.setEmail(u.getEmail());
		if(u.getPassword()!=null)
			user.setPassword(u.getPassword());
		if(u.getRole()!=null)
			user.setRole(u.getRole());
		if(u.getManager()!=null)
			user.setManager(u.getManager());
		if(u.getMentor()!=null)
			user.setMentor(u.getMentor());
		userRepository.save(user);
		String name=u.getMentor();
		Mentor m = mentorRepository.getMentor(name);
		List<User> l = m.getUsers();
		l.add(u);
		mentorRepository.save(m);
		return ResponseEntity.ok(user);
		
	}
	
	@DeleteMapping("/task/{id}")
	public void deleteCourse(@PathVariable Integer id) {
		 dailyupdateService.delete(id);
		System.out.println("deleted");
	}
	
	
	@GetMapping("/mentor/{id}")
	public List<User> displayMentorTeam(@PathVariable Integer id){
		System.out.println(id);
		
		
		String u=userRepository.findById(id).get().getName();
		
		Mentor m=mentorRepository.getMentor(u);
		
		List<User> list=m.getUsers();
		System.out.println(list);
		
		return list;
		
	}
	
	

}

