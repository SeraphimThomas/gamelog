package gamelog.main.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import gamelog.main.model.TopGames;
import gamelog.main.services.TopGamesManager;

@RestController
@RequestMapping(path="/topgames")
public class TopGamesController {
	
	@Autowired
	private TopGamesManager manager;
	
	@CrossOrigin(origins="http://localhost:4200")
	@GetMapping(path="", produces="application/json")
	public List<TopGames>findAll(){
		return manager.findAll();
	}

}
