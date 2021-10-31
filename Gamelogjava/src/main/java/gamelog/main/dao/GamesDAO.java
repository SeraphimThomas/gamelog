package gamelog.main.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import gamelog.main.model.Games;
import gamelog.main.model.TopGames;

@Repository
public interface GamesDAO extends JpaRepository<Games, Integer> {

	@Query(value = "SELECT * FROM gamedb.games WHERE userid = ?1", nativeQuery = true)
	List<Games> findById(@Param("Id") int id);
}