package gamelog.main.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import gamelog.main.model.Games;
import gamelog.main.services.GamesManager;

@RestController
@RequestMapping(path = "/games")
public class GamesController {

	@Autowired
	private GamesManager manager;

	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping(path = "/{id}", produces = "application/json")
	public List<Games> findMyGames(@PathVariable int id) {
		return manager.findMyGames(id);
	}

	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping(consumes = "application/json", produces = "application/json")
	public Games create(@RequestBody Games game) {
		return manager.create(game);
	}

	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping(path = "/detail/{gameId}", produces = "application/json")
	public Games findGame(@PathVariable int gameId) {
		return manager.findByGameId(gameId);
	}

	@CrossOrigin(origins = "http://localhost:4200")
	@DeleteMapping(path = "/delete/{gameId}")
	public void deleteGame(@PathVariable int gameId) {
		manager.deleteGame(gameId);
	}

	@CrossOrigin(origins = "http://localhost:4200")
	@PutMapping(path = "/updateGame", consumes = "application/json", produces = "application/json")
	public Games updateGame(@RequestBody Games game) {
		return manager.updateGame(game);
	}

}
