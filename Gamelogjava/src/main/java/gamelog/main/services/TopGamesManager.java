package gamelog.main.services;

import java.util.List;

import gamelog.main.model.TopGames;

public interface TopGamesManager {
	List<TopGames> findAll();
}
