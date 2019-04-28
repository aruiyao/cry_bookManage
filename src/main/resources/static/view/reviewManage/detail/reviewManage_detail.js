var app = angular.module("reviewManageDetailApp", []);
app.controller("reviewManageDetailCtrl", function ($scope, $rootScope, $location) {
  $scope.mainPicture = "";
  $scope.init = function () {
    $scope.reviewID = $location.search().reviewID;
    $scope.queryReviewDetail();
  }

  $scope.queryReviewDetail = function () {
    var req = {
      book: {},
      user: {},
      reviewId: $scope.reviewID
    }
    $.ajax({
      url: "/bookManage/queryReviewByCond",
      type: "post",
      contentType: "application/json",
      data: JSON.stringify(req),
      // dataType: "json",
      success: function (data) {
        $rootScope.$apply(function () {
          $scope.review = data.reviewList[0]
        })
      },
      error: function (data) {

      }
    })
  }

  $scope.goBack = function () {
    window.location.href = "../list/reviewManage_list.html"
  }
})

app.config(['$locationProvider', function ($locationProvider) {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
}]);

app.filter("newdate", function () {
  return function (date) {
    if (date) {
      return date.substring(0, 4) + "-" + date.substring(4, 6) + "-" + date.substring(6, 8) + " " + date.substring(8, 10) + ":" + date.substring(10, 12) + ":" + date.substring(12)
    }
  }
})