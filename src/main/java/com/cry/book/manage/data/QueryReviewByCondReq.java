package com.cry.book.manage.data;

import com.cry.book.manage.entity.Book;
import com.cry.book.manage.entity.User;

public class QueryReviewByCondReq {
    private Book book;

    private User user;

    private String reviewId;

    public Book getBook() {
        return book;
    }

    public void setBook(Book book) {
        this.book = book;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getReviewId() {
        return reviewId;
    }

    public void setReviewId(String reviewId) {
        this.reviewId = reviewId;
    }

    @Override
    public String toString() {
        StringBuilder builder = new StringBuilder();
        builder.append("QueryReviewByCondReq [book=");
        builder.append(book);
        builder.append(", user=");
        builder.append(user);
        builder.append(", reviewId=");
        builder.append(reviewId);
        builder.append("]");
        return builder.toString();
    }

}
