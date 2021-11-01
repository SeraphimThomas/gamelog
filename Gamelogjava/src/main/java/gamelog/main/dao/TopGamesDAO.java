package gamelog.main.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import gamelog.main.model.TopGames;

public interface TopGamesDAO extends JpaRepository<TopGames, String> {

}
