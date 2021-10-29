package gamelog.main.services;

import java.util.List;

import gamelog.main.model.Games;

public interface GamesManager {

	Games create(Games games);

	
	List<Games> findMyGames(int id);

	List<Games> findAll();
	
	List<Games> findTopTen();

//	Games create(GamesManager games);
	
}
