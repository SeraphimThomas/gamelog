package gamelog.main.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import gamelog.main.dao.GamesDAO;
import gamelog.main.model.Games;

@Service
public class GameManagerImpl implements GamesManager{
	
	@Autowired
	private GamesDAO dao;

	@Override
	public Games create(Games games) {
		return dao.save(games);
	}

	@Override
	public List<Games> findMyGames(int id) {
		return dao.findById(id);
	}

	@Override
	public List<Games> findAll() {
		return dao.findAll();
	}

	@Override
	public Games findByGameId(int gameId) {
		return dao.findByGameId(gameId);
	}

	@Override
	public void deleteGame(int gameId) {
		dao.deleteGame(gameId);
	}

	@Override
	public Games updateGame(Games game) {
		int gameDbId = game.getGameid();
		Games g = dao.findByGameId(gameDbId);
		g.setGamename(game.getGamename());
		g.setGamesystem(game.getGamesystem());
		g.updateDate();
		g.setPlaytime(game.getPlaytime());
		return dao.save(g);
	}




}
