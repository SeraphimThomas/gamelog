package gamelog.main.encryption;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class Encryption {
	public static String getHashSHA1 (String password) {
		try {
			MessageDigest md = MessageDigest.getInstance("SHA-1");
			System.out.println(password);
			md.update(password.getBytes());
			byte byteData[] = md.digest();
			StringBuilder sb = new StringBuilder();
			for (int i = 0; i < byteData.length; i++) {
				sb.append(Integer.toString((byteData[i] & 0xff)
						+ 0x100, 16).substring(1));
			}
			return sb.toString();
			}catch (NoSuchAlgorithmException ex) {
				return null;
			}
	}

}
