package com.jobs.proj.ToDoApp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.jobs.proj.ToDoApp.model.ToDo;
import com.jobs.proj.ToDoApp.repository.ToDoRepository;
import org.springframework.stereotype.Service;

@Service
public class ToDoServiceImpl implements ToDoService{

	@Autowired
	private ToDoRepository todoRepository;
	
	@Override
	public ToDo saveToDo(ToDo todo) {
		// TODO Auto-generated method stub
		return todoRepository.save(todo) ;
	}

	@Override
	public List<ToDo> getAllToDos() {
		// TODO Auto-generated method stub
		return todoRepository.findAll();
	}
	
}
