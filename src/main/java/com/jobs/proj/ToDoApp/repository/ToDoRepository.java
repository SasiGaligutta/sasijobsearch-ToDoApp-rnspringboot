package com.jobs.proj.ToDoApp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jobs.proj.ToDoApp.model.ToDo;

@Repository
public interface ToDoRepository extends JpaRepository<ToDo, Integer> {

}
