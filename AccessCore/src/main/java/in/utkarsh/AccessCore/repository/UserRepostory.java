package in.utkarsh.AccessCore.repository;

import in.utkarsh.AccessCore.Entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepostory extends JpaRepository<UserEntity,Long> {

    Optional<UserEntity> findByEmail(String email);

    Boolean existsByEmail(String email);
}




