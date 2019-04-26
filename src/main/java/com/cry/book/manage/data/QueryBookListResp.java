package com.cry.book.manage.data;

import java.util.List;

import com.cry.book.manage.entity.Book;

public class QueryBookListResp {
    private List < Book > bookList;

    public List < Book > getBookList() {
        return bookList;
    }

    public void setBookList(List < Book > bookList) {
        this.bookList = bookList;
    }

    @Override
    public String toString() {
        StringBuilder builder = new StringBuilder();
        builder.append("QueryBookListResp [bookList=");
        builder.append(bookList);
        builder.append("]");
        return builder.toString();
    }

}
