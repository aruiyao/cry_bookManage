package com.cry.book.manage.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cry.book.manage.data.QueryReviewByCondReq;
import com.cry.book.manage.entity.Review;
import com.cry.book.manage.mapper.ReviewMapper;
import com.cry.book.manage.service.ReviewService;

@Service
public class ReviewServiceImpl implements ReviewService {
    @Autowired
    private ReviewMapper reviewMapper;

    @Override
    public List < Review > queryReviewByCond(QueryReviewByCondReq req) {
        return reviewMapper.queryReviewByCond(req);
    }

    @Override
    public int queryReviewNum(QueryReviewByCondReq req) {
        return reviewMapper.queryReviewNum(req);
    }

    @Override
    public void addReview(Review review) {
        reviewMapper.addReview(review);
    }

    @Override
    public void deleteReview(Review review) {
        reviewMapper.deleteReview(review);
    }

}