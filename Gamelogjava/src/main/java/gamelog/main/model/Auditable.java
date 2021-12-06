package gamelog.main.model;

import java.util.Date;

import javax.persistence.EntityListeners;
import javax.persistence.MappedSuperclass;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
public abstract class Auditable<U>{
	
	@CreatedDate
	@Temporal(TemporalType.TIMESTAMP)
	protected Date dateadded;
	
	@LastModifiedDate
	@Temporal(TemporalType.TIMESTAMP)
	protected Date datechanged;

}
