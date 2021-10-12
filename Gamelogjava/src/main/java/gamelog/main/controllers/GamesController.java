package gamelog.main.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import gamelog.main.model.Games;
import gamelog.main.services.GamesManager;

@RestController
@RequestMapping(path="/games")
public class GamesController {
	
	
	@Autowired
	private GamesManager manager;
	
	@GetMapping(path="/{id}", produces = "application/json")
	public List<Games> findById(@PathVariable int id){
		return manager.findAll(id);
	}
	
	@PostMapping(consumes="application/json",produces="application/json")
	public Games create(@RequestBody Games game) {
		return manager.create(game);
	}

}
