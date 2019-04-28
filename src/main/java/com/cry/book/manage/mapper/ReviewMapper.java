package com.cry.book.manage.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;

import com.cry.book.manage.data.QueryReviewByCondReq;
import com.cry.book.manage.entity.Review;

public interface ReviewMapper {

    @Select({
        "<script>",
        "select * from t_review where 1=1",
        "<if test='book.id!=null'>",
        "and book_id=#{book.id}",
        "</if>",
        "<if test='book.name!=null'>",
        "and book_name=#{book.name}",
        "</if>",
        "<if test='reviewId!=null'>",
        "and id=#{reviewId}",
        "</if>",
        "</script>" 
    }) 
    public List < Review > queryReviewByCond(QueryReviewByCondReq req);
    
    @Select({
        "<script>",
        "select count(*) from t_review where 1=1",
        "<if test='book.id!=null'>",
        "and book_id=#{book.id}",
        "</if>",
        "<if test='user.id!=null'>",
        "and user_id=#{user.id}",
        "</if>",
        "</script>" 
    }) 
    public int queryReviewNum(QueryReviewByCondReq req);
    
    @Insert("insert into t_review (user_id,user_name,book_id,book_name,score,review,create_time) values (#{userId},#{userName},#{bookId},#{bookName},#{score},#{review},#{createTime})")
    public void addReview(Review review);
    
    @Delete("delete from t_review where id=#{id}")
    public void deleteReview(Review review);
   
}
