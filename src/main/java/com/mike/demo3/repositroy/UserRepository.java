package com.mike.demo3.repositroy;

import com.mike.demo3.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")
public interface UserRepository  extends JpaRepository<User, Long> {
    List<User> findAll();
    //    User   findByuserName(String userName);//
    User     findById(long id);
    void     deleteById(long id);
}
