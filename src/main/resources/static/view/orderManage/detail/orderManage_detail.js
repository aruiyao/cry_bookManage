var app = angular.module("orderManageDetailApp", []);
app.controller("orderManageDetailCtrl", function ($scope, $rootScope, $location) {
  $scope.init = function () {
    $scope.orderID = $location.search().orderID;
    $scope.downUrl = "/manage/uploadDownload/downloadImage";
    $scope.queryGoodsDetail();
  }

  $scope.queryGoodsDetail = function () {
    $.ajax({
      url: "/manage/queryOrderList",
      type: "GET",
      contentType: "application/json",
      data: {
        id: $scope.orderID,
      },
      // dataType: "json",
      success: function (data) {
        $rootScope.$apply(function () {
          $scope.order = data.orderList[0];
        })
      },
      error: function (data) {

      }
    })
  }

  $scope.goBack = function () {
    window.location.href = "../list/orderManage_list.html"
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
    return date.substring(0, 4) + "-" + date.substring(4, 6) + "-" + date.substring(6, 8) + " " + date.substring(8, 10) + ":" + date.substring(10, 12) + ":" + date.substring(12)
  }
})
