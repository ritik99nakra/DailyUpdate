package com.dailyupdate.project.entities;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Table
@Entity
public class dailyUpdate {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int task_id;
	private String project_title;
	private String description;
	@Temporal(TemporalType.DATE)
	private Date date;
	private String manager;
	private String mentor;
	
	public String getManager() {
		return manager;
	}

	public void setManager(String manager) {
		this.manager = manager;
	}

	public String getMentor() {
		return mentor;
	}

	public void setMentor(String mentor) {
		this.mentor = mentor;
	}
	
	public int getTask_id() {
		return task_id;
	}

	public void setTask_id(int task_id) {
		this.task_id = task_id;
	}
	public String getProject_title() {
		return project_title;
	}
	public void setProject_title(String project_title) {
		this.project_title = project_title;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}


	@Override
	public String toString() {
		return "dailyUpdate [task_id=" + task_id + ", project_title=" + project_title + ", description=" + description
				+ ", date=" + date + "]";
	}
	

	
	
	
}
