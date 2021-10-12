package gamelog.main.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import gamelog.main.model.Games;

@Repository
public interface GamesDAO extends JpaRepository<Games, Integer>{



}
