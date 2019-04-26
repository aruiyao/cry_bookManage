package com.cry.book.manage.service;

import com.cry.book.manage.data.LoginRequset;
import com.cry.book.manage.entity.User;

public interface UserService {

    User getAllUsers(LoginRequset req);

    void AddUser(User user);

    int checkUser(User user);
}