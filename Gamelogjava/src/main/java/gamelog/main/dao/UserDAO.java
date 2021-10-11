package gamelog.main.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import gamelog.main.model.User;

@Repository
public interface UserDAO extends JpaRepository<User, Integer>{
	
	@Query(value = "SELECT u FROM User u WHERE u.username = :Username")
	User findLogin(@Param("Username")String username);
	
}
