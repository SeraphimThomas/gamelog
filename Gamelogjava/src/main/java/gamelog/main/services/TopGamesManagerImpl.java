package gamelog.main.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import gamelog.main.dao.TopGamesDAO;
import gamelog.main.model.TopGames;

public class TopGamesManagerImpl implements TopGamesManager {
	
	@Autowired TopGamesDAO dao;

	@Override
	public List<TopGames> findAll() {
		return dao.findAll();
	}

}
