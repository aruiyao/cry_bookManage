var app = angular.module("reviewManageListApp", []);
app.controller("reviewManageListCtrl", function ($scope, $rootScope) {
  $scope.imgName = "";
  $scope.init = function () {
    $scope.getReviewList()
  }
  $scope.getReviewList = function () {
    var req = {
      book: {
        id: $scope.id || null,
        name: $scope.name || null
      },
      user: {}
    }
    var reg = new RegExp("^[0-9]*$");
    if ($scope.id != null && $scope.id != '' && !reg.test($scope.id)) {
      req.book.id = -1;
    }
    $.ajax({
      url: "/bookManage/queryReviewByCond",
      type: "post",
      contentType: "application/json",
      data: JSON.stringify(req),
      success: function (data) {
        $rootScope.$apply(function () {
          $scope.total = data.total;
          $scope.reviewList = data.reviewList;
        })
      },
      error: function (data) {}
    })
  }
  $scope.detail = function (id) {
    window.location.href = "../detail/reviewManage_detail.html?reviewID=" + id;
  }

  $scope.delete = function (item) {
    var req = {
      id: item.id,
      bookId: item.bookId,
    }
    $.ajax({
      url: "/bookManage/deleteReview",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify(req),
      success: function (data) {
        $rootScope.$apply(function () {
          $scope.modalTitle = "删除影片"
          $scope.modalContent = "删除成功"
          $("#myModal").modal();
        })
      },
      error: function (data) {

      }
    })
  }

})
app.filter("newdate", function () {
  return function (date) {
    return date.substring(0, 4) + "-" + date.substring(4, 6) + "-" + date.substring(6, 8) + " " + date.substring(8, 10) + ":" + date.substring(10, 12) + ":" + date.substring(12)
  }
})
app.filter("matchtype", function () {
  return function (type, list) {
    for (let i = 0; i < list.length; i++) {
      if (list[i].id === type) {
        return list[i].name
      }
    }
  }
})
app.directive('repeatFinish', function () {
  return {
    link: function (scope, element, attr) {
      if (scope.$last == true) {
        scope.$emit('renderFinish');
      }
    }
  }
})