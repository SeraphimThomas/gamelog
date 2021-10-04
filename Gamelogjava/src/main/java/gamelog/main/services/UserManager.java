package gamelog.main.services;

import java.util.List;

import gamelog.main.model.User;

public interface UserManager {
	
	User findLogin(User user);
	
	User createAccount(User user);
	
	List<User> getUsers();
	
	User findById(int id);

}
