package gamelog.main.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import gamelog.main.dao.UserDAO;
import gamelog.main.model.User;

@Service
public class UserManagerImpl implements UserManager{
	
	@Autowired
	private UserDAO uDao;

	@Override
	public User login(User user) {
		User login = uDao.findLogin(user.getUsername());
		if(login != null && login.getPassword().equals(user.getPassword())) {
			login.setPassword(null);
			return login;
		}
		return null;
	}

	@Override
	public User createAccount(User user) {
		try {
			User login = login(user);
			if(login == null) {
				uDao.save(user);
				user.setPassword(null);
				return user;
			}
		} catch (Exception e) {
			return null;
		}
		return null;
	}

	@Override
	public List<User> getUsers() {
		return uDao.findAll();
	}
	
}
