package com.cry.book.manage.service;

import java.util.List;

import com.cry.book.manage.data.QueryReviewByCondReq;
import com.cry.book.manage.entity.Review;

public interface ReviewService {

    List < Review > queryReviewByCond(QueryReviewByCondReq req);

    int queryReviewNum(QueryReviewByCondReq req);

    void addReview(Review review);
    
    void deleteReview(Review review);
}