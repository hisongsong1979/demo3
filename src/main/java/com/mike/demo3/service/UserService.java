package com.mike.demo3.service;

import com.mike.demo3.domain.User;

import java.util.List;

public interface UserService {
    public List<User> getUserList();
    public User findUserById(long id);
    public void save (User user);
    public void edit (User user);
    public void delete(long id);

}
