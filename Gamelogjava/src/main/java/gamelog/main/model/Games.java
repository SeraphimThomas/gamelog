package gamelog.main.model;

import java.util.Date;

public class Games {
	private int userid;
	private String gamename;
	private String gamesystem;
	private double playtime;
	private Date dateadded;
	private Date datechanged;

	public Games() {
		super();
	}

	public Games(int userid) {
		super();
		this.userid = userid;
	}

	public Games(int userid, String gamename, String gamesystem, double playtime, Date datechanged) {
		super();
		this.userid = userid;
		this.gamename = gamename;
		this.gamesystem = gamesystem;
		this.playtime = playtime;
		this.datechanged = datechanged;
	}

	public Games(int userid, String gamename, String gamesystem, double playtime, Date dateadded, Date datechanged) {
		super();
		this.userid = userid;
		this.gamename = gamename;
		this.gamesystem = gamesystem;
		this.playtime = playtime;
		this.dateadded = dateadded;
		this.datechanged = datechanged;
	}

	public int getUserid() {
		return userid;
	}

	public void setUserid(int userid) {
		this.userid = userid;
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
