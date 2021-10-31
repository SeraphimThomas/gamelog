package gamelog.main.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import gamelog.main.model.TopGames;

@Repository
public interface TopGamesDAO extends JpaRepository<TopGames, String>{
	List<TopGames> findAll();

}
