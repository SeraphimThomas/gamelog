package gamelog.main.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import gamelog.main.model.User;
import gamelog.main.services.UserManager;

@RestController
@RequestMapping(path="/login")
public class UserController {
	
	@Autowired
	private UserManager userMan;
	
//	@Autowired
//	private PasswordEncoder encoder;
	
	@CrossOrigin(origins="http://localhost:4200")
	@PostMapping(path="/enter", consumes="application/json", produces="application/json")
	public ResponseEntity<User> login(@RequestBody User user){
		return new ResponseEntity<>(userMan.login(user),HttpStatus.CREATED);
	}
	
	@PostMapping(path="/create",consumes="application/json", produces="application/json")
	public ResponseEntity<User> createAccount(@RequestBody User user){
//		user.setPassword(encoder.encode(user.getPassword()));
		return new ResponseEntity<>(userMan.createAccount(user), HttpStatus.CREATED);
	}
}
