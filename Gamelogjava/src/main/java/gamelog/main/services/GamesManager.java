package gamelog.main.services;

import java.util.List;

import org.springframework.stereotype.Service;

import gamelog.main.model.Games;

@Service
public interface GamesManager {

	Games create(Games games);

	List<Games> findMyGames(int id);

	List<Games> findAll();

	Games findByGameId(int gameId);

//	Games create(GamesManager games);

}
