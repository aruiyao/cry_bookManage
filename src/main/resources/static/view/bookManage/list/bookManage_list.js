var app = angular.module("bookManageListApp", []);
app.controller("bookManageListCtrl", function ($scope, $rootScope) {
  $scope.imgName = "";
  $scope.init = function () {
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
    $scope.getBookList()
  }

  $scope.getBookList = function () {
    var req = {
      id: $scope.id,
      name: $scope.name,
      type: $scope.type
    }
    var reg = new RegExp("^[0-9]*$");
    if ($scope.id != null && $scope.id != '' && !reg.test($scope.id)) {
      req.id = -1;
    }
    $.ajax({
      url: "/bookManage/queryBookByCond",
      type: "GET",
      contentType: "application/json",
      data: req,
      // dataType: "json",
      success: function (data) {
        $rootScope.$apply(function () {
          $scope.bookList = data.bookList;
        })
      },
      error: function (data) {

      }
    })
  }

  $scope.detail = function (id) {
    window.location.href = "../detail/bookManage_detail.html?bookID=" + id;
  }
  $scope.edit = function (id) {
    window.location.href = "../edit/bookManage_edit.html?bookID=" + id;
  }
  $scope.create = function () {
    window.location.href = "../create/bookManage_create.html"
  }

  $scope.delete = function (id) {
    $.ajax({
      url: "/bookManage/deleteBook",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify(id),
      // dataType: "json",
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
  return function (type,list) {
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