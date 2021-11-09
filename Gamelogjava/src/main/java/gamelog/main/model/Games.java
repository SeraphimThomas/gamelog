package gamelog.main.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Games extends Auditable<String>{
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="gameid")
	private int gameid;

	@ManyToOne
	@JoinColumn(name="userid")
	private User user;
	
	@Column
	private String gamename;
	@Column
	private String gamesystem;
	@Column
	private double playtime;
	@Column
	private Date dateadded;
	@Column
	private Date datechanged;

	public Games() {
		super();
	}

	public void setUser(User user) {
		this.user = user;
	}

	public int getGameid() {
		return gameid;
	}


	public void setGameid(int gameid) {
		this.gameid = gameid;
	}


	public String getGamename() {
		return gamename;
	}

	public void setGamename(String gamename) {
		this.gamename = gamename;
	}

	public String getGamesystem() {
		return gamesystem;
	}

	public void setGamesystem(String gamesystem) {
		this.gamesystem = gamesystem;
	}

	public double getPlaytime() {
		return playtime;
	}

	public void setPlaytime(double playtime) {
		this.playtime = playtime;
	}

	public Date getDateadded() {
		return dateadded;
	}

	public void setDateadded(Date dateadded) {
		this.dateadded = dateadded;
	}

	public Date getDatechanged() {
		return datechanged;
	}

	public void setDatechanged(Date datechanged) {
		this.datechanged = datechanged;
	}

}
