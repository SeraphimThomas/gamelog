package gamelog.main.services;

import java.util.List;

import gamelog.main.model.Games;

public interface GamesManager {

	Games create(Games games);
	
	Games findById(int id);
	
	List<Games> findAll();
	
	List<Games> findByUser();
	
}
