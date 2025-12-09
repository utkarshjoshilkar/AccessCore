package in.utkarsh.AccessCore.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.sql.Time;
import java.sql.Timestamp;

@Entity
@Table(name="tbl_users")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(unique = true)
    private String userId;
    private String name;
    @Column(unique = true)
    private String email;
    private String password;
    private String verifyOtp;
    private boolean isAccountVerifiedAt;
    private long verifyOtpExpireAt;
    private String resetOtp;
    private long resetOtpExpireAt;

    @CreationTimestamp
    @Column(updatable = false)
    private Timestamp createAt;
    @UpdateTimestamp
    private Timestamp updateAt;


}
