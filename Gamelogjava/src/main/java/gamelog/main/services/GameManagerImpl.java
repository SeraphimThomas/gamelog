package gamelog.main.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import gamelog.main.dao.GamesDAO;
import gamelog.main.model.Games;

public class GameManagerImpl implements GamesManager{
	
	@Autowired
	private GamesDAO dao;

	@Override
	public Games create(Games games) {
		return dao.save(games);
	}

	@Override
	public Games findById(int id) {
		return null;
	}

	@Override
	public List<Games> findByUser() {
		return null;
	}

	@Override
	public List<Games> findAll(int id) {
		return null;
	}

	@Override
	public Games create(GamesManager games) {
		return null;
	}

}
