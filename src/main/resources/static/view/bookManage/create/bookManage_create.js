var app = angular.module("bookManageCreateApp", []);
app.controller("bookManageCreateCtrl", function ($scope, $rootScope) {
  $scope.picture = "";
  $scope.init = function () {
    $scope.downUrl = "/bookManage/uploadDownload/downloadImage";
    $scope.detailPicture = "";
    $scope.detailPicList = [];
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
    $scope.type = 1;

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
            $scope.picture = data;
            console.log("上传成功后的文件路径为：" + data);
            $scope.imgUrl = $scope.downUrl + "?imageName=" + data;
          }
        })
      }
    });
  }

  $scope.dateTimeFormate = function () {
    var obj = {};
    var d = new Date();
    obj.year = d.getFullYear();
    obj.month = ('0' + (d.getMonth() + 1)).slice(-2);
    obj.day = ('0' + (d.getDate())).slice(-2);
    obj.hour = ('0' + (d.getHours())).slice(-2);
    obj.minutes = ('0' + (d.getMinutes())).slice(-2);
    obj.seconds = ('0' + (d.getSeconds())).slice(-2);
    return obj
  }
  $scope.create = function () {

    var date = $scope.dateTimeFormate();
    var req = {
      name: $scope.name,
      picture: $scope.picture,
      releaseTime: $scope.releaseTime,
      author: $scope.author,
      createTime: date.year + date.month + date.day + date.hour + date.minutes + date.seconds,
      press: $scope.press,
      type: $scope.type,
      page: $scope.page,
      price: $scope.price,
      bookBrife: $scope.bookBrife,
      authBrife: $scope.authBrife,
    }
    $.ajax({
      url: "/bookManage/addBook",
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
    window.location.href = "../list/bookManage_list.html"
  }
  $scope.cancle = function () {
    window.location.href = "../list/bookManage_list.html"
  }
})