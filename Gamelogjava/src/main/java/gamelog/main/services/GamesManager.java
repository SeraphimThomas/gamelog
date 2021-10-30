package gamelog.main.services;

import java.util.List;

import gamelog.main.model.Games;
import gamelog.main.model.TopGames;

public interface GamesManager {

	Games create(Games games);

	
	List<Games> findMyGames(int id);

	List<Games> findAll();


	List<TopGames> findTopGames();

//	Games create(GamesManager games);
	
}
