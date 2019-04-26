package com.cry.book.manage.controller;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;

@EnableAutoConfiguration
@ComponentScan(value = { "com.cry.book.manage.controller", "com.cry.book.manage.service.impl" })
@MapperScan(value = "com.cry.book.manage.mapper")
public class BookManageApplication {
	public static void main(String[] args) {
		SpringApplication.run(BookManageApplication.class, args);
	}
}

