package gamelog.main.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import gamelog.main.dao.TopGamesDAO;
import gamelog.main.model.TopGames;

@Service
public class TopGamesManagerImpl implements TopGamesManager {

	@Autowired
	private TopGamesDAO dao;
	
	@Override
	public List<TopGames> findAll() {
		return dao.findAll();
	}

}
