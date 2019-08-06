package com.mike.demo3.controller;

import com.mike.demo3.domain.User;
import com.mike.demo3.service.UserService;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.List;

@RestController
public class UserController {
    @Resource
    UserService userService;

    @GetMapping("/listuser")
    @CrossOrigin(origins = "http://localhost:4200")
    public List<User> listuser () {
        List<User> users = userService.getUserList();
        return users;
    }

    @GetMapping("/toAdd")
    @CrossOrigin(origins = "http://localhost:4200")
    public String toAdd () {
        return "user/userAdd";
    }

    @GetMapping("/add")
    @CrossOrigin(origins = "http://localhost:4200")
    public List<User> add (User user) {
        userService.save(user);
        List<User> users = userService.getUserList();
        return users;
    }

    @GetMapping("/get")
    @CrossOrigin(origins = "http://localhost:4200")
    public User get (Long id) {
         if (id == null ) {id = 6l;};
         User user = userService.findUserById(id);
        return user;
    }

    @GetMapping("/toEdit")
    @CrossOrigin(origins = "http://localhost:4200")
    public String toEdit (Model model, long id) {
        User user = userService.findUserById(id);
        model.addAttribute("user", user);
        return "user/userEdit";
    }
    @GetMapping("/edit")
    @CrossOrigin(origins = "http://localhost:4200")
    public List<User> edit(User user) {
        userService.edit(user);
        List<User> users = userService.getUserList();
        return users;
    }
    @GetMapping("/delete")
    @CrossOrigin(origins = "http://localhost:4200")
    public List<User> delete (long id) {
        userService.delete(id);
        List<User> users = userService.getUserList();
        return users;
    }
}
