package gamelog.main.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import gamelog.main.model.Games;

@Repository
public interface GamesDAO extends JpaRepository<Games, Integer> {

	@Query(value = "SELECT * FROM gamedb.games WHERE userid = ?1", nativeQuery = true)
	List<Games> findById(@Param("Id") int id);
	
	@Query(value = "SELECT * FROM gamedb.games WHERE gameid = ?1", nativeQuery = true)
	Games findByGameId(@Param("Id") int gameId);

	@Modifying
	@Transactional
	@Query(value = "DELETE FROM gamedb.games WHERE gameid = ?1", nativeQuery = true)
	void deleteGame(@Param("Id") int gameId);
	
	
}