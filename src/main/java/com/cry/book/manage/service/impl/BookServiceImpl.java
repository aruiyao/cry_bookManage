package com.cry.book.manage.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cry.book.manage.entity.Book;
import com.cry.book.manage.mapper.BookMapper;
import com.cry.book.manage.service.BookService;

@Service
public class BookServiceImpl implements BookService {
    @Autowired
    private BookMapper bookMapper;

    @Override
    public void addBook(Book book) {
        bookMapper.addBook(book); 
    }

    @Override
    public List < Book > queryBookByCond(Book book) {
        return bookMapper.queryBookByCond(book);
    }

    @Override
    public void updateBook(Book book) {
        bookMapper.updateBook(book);
    }

    @Override
    public void deleteBook(Integer id) {
        bookMapper.deleteBook(id);
    }
}
