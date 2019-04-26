var app = angular.module("bookManageEditApp", []);
app.controller("bookManageEditCtrl", function ($scope, $rootScope, $location) {
  $scope.mainPicture = "";
  $scope.init = function () {
    $scope.bookID = $location.search().bookID;
    $scope.downUrl = "/bookManage/uploadDownload/downloadImage";
    $scope.typeList = [{
      id: "1",
      name: "小说"
    }, {
      id: "2",
      name: "随笔"
    }, {
      id: "3",
      name: "散文"
    }, {
      id: "4",
      name: "日本文学"
    }, {
      id: "5",
      name: "童话"
    }, {
      id: "6",
      name: "诗歌"
    }, {
      id: "7",
      name: "名著"
    }, {
      id: "8",
      name: "港台"
    }, {
      id: "9",
      name: "漫画"
    }, {
      id: "10",
      name: "绘本"
    }, {
      id: "11",
      name: "推理"
    }, {
      id: "12",
      name: "青春"
    }, {
      id: "13",
      name: "言情"
    }]
    $scope.queryBookDetail();
  }
  $scope.queryBookDetail = function () {
    $.ajax({
      url: "/bookManage/queryBookByCond",
      type: "GET",
      contentType: "application/json",
      data: {
        id: $scope.bookID,
      },
      // dataType: "json",
      success: function (data) {
        $rootScope.$apply(function () {
          $scope.book = data.bookList[0];
          for (let i = 0; i < $scope.typeList.length; i++) {
            if($scope.typeList[i].id===$scope.book.type)
            $scope.chooseType = $scope.typeList[i].name
          }        
        })
      },
      error: function (data) {

      }
    })
  }
  $scope.uploadImage = function () {
    var uploadUrl = "/bookManage/uploadDownload/uploadImage";
    var pic = $('#upload_file')[0].files[0];
    var fd = new FormData();
    //fd.append('uploadFile', pic); 
    fd.append('file', pic);
    $.ajax({
      url: uploadUrl,
      type: "post",
      // Form数据 
      data: fd,
      cache: false,
      contentType: false,
      processData: false,
      success: function (data) {
        $rootScope.$apply(function () {
          console.log("the data is : {}", data);
          if (data !== "") {
            $scope.book.picture = data;
          }
        })
      }
    });
  }

  $scope.updateBook = function () {
    var req = {
      id: $scope.book.id,
      name: $scope.book.name,
      picture: $scope.book.picture,
      releaseTime: $scope.book.releaseTime,
      author: $scope.book.author,
      press: $scope.book.press,
      type: $scope.book.type,
      page: $scope.book.page,
      price: $scope.book.price,
      bookBrife: $scope.book.bookBrife,
      authBrife: $scope.book.authBrife,
    }
    $.ajax({
      url: "/bookManage/updateBook",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify(req),
      // dataType: "json",
      success: function (data) {
        $rootScope.$apply(function () {
          $("#myModal").modal();
        })
      },
      error: function (data) {

      }
    })
  }
  $scope.sure = function () {
    $scope.queryBookDetail();
  }
  $scope.cancle = function () {
    window.location.href = "../list/bookManage_list.html"
  }
})

app.config(['$locationProvider', function ($locationProvider) {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
}]);