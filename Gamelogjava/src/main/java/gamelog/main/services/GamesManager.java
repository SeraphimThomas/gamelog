package gamelog.main.services;

import java.util.List;

import gamelog.main.model.Games;

public interface GamesManager {

	Games create(Games games);

	
	List<Games> findMyGames(int id);

	List<Games> findAll();

//	Games create(GamesManager games);
	
}
