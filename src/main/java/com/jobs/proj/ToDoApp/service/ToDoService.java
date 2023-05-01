package com.jobs.proj.ToDoApp.service;

import java.util.List;
import com.jobs.proj.ToDoApp.model.ToDo;

public interface ToDoService {
	public ToDo saveToDo(ToDo todo);
	public List<ToDo> getAllToDos();

}
