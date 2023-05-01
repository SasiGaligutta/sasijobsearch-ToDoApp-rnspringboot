package com.jobs.proj.ToDoApp.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class ToDo {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String Tsknme;
	private String Tskdesc;
	
	public ToDo(int id, String tsknme, String tskdesc) {
		super();
		this.id = id;
		Tsknme = tsknme;
		Tskdesc = tskdesc;
	}
	
	public ToDo() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	
	public String getTsknme() {
		return Tsknme;
	}
	public void setTsknme(String tsknme) {
		Tsknme = tsknme;
	}
	
	public String getTskdesc() {
		return Tskdesc;
	}
	public void setTskdesc(String tskdesc) {
		Tskdesc = tskdesc;
	}
	
}
