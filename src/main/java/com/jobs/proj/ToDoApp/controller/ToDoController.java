package com.jobs.proj.ToDoApp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jobs.proj.ToDoApp.model.ToDo;
import com.jobs.proj.ToDoApp.service.ToDoService;

@RestController
@RequestMapping("/task")
@CrossOrigin
public class ToDoController {
	@Autowired
	private ToDoService todoService;
	
	@PostMapping("/add")
	public String add(@RequestBody ToDo todo) {
		todoService.saveToDo(todo);
		return "New task has been added";
	}
	
	@GetMapping("/getAll")
	public List<ToDo> getAllBooks(){
		return todoService.getAllToDos();
	}
}