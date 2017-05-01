define(['angular', 'text!five/Home/Home.html'], function (angular, tpl) {
    //angular会自动根据controller函数的参数名，导入相应的服务
    return {
        controller: function ($rootScope,$scope,$location, $routeParams, $http, $interval) {

            if(!$rootScope.username){
                $location.path("/login")
            }


            console.log($rootScope.pagePostion);
            $scope.selectOption = ["产品编号", "出货日期", "产品名称","客户名称"];

            $scope.orderDatas = [{"ordernum":"1006309","client":"李锦记","num":"486518645",
                                   "outTime":"2016-07-16","orderTime":"2016-06-08","stock":"300","orderState":"进行中",
                                    "orderCount":"59","quality":"1111","atom":"pvc","phone":"13444444444",
                                    "time":"2016-08-09"},

                {"ordernum":"1006309","client":"海天酱油","num":"486518645",
                    "outTime":"2016-07-16","orderTime":"2016-06-08","stock":"300","orderState":"进行中",
                    "orderCount":"59","quality":"1111","atom":"pvc","phone":"13444444444",
                    "time":"2016-08-09"},

                {"ordernum":"1006309","client":"可口可乐","num":"486518645",
                    "outTime":"2016-07-16","orderTime":"2016-06-08","stock":"300","orderState":"已完成",
                    "orderCount":"59","quality":"1111","atom":"pvc","phone":"13444444444",
                    "time":"2016-08-09"}


            ]


            $scope.count=3;
            $scope.username=$rootScope.username ;
            $scope.EditOrder=false;
            $scope.qualityFormShow=false;
            $scope.newOrder=false;


            $scope.reset = function() {

                $http({
                    method: 'GET',
                    headers:{'Content-Type': 'application/x-www-form-urlencoded'},
                    url: baseUrl+ '/ghprint-cms/logout.do?userAccount='+$scope.username
                }).then(function successCallback(response) {
                        console.log(response);
                    if(response.data.success){
                        $location.path("/Login")
                    }else{
                        console.log("注销失败")
                        $location.path("/Login")
                    }


                }, function errorCallback(response) {
                    console.log(response);
                    $location.path("/Login")
                });


            }


            $scope.search = function(index) {
                console.log("你点击了"+index)
              /*  var orderNum=$rootScope.orderNum;
                var url=baseUrl+"search="
                $http({
                    method: 'GET',
                    url: url
                }).then(function successCallback(response) {
                    console.log("成功------------------");
                }, function errorCallback(response) {
                    console.log("失败-------------------------");
                });*/
            };

            $scope.searchPage = function(index) {
                console.log("你点击了第"+index+"页")
            };

            $scope.takequalityFormShow = function(a) {
                $scope.qualityFormShow=!$scope.qualityFormShow;
            };


            $scope.edit = function(a) {
                console.log("你点击了第"+a+"===========")
                $scope.EditOrder=!$scope.EditOrder;
            };

            $scope.dele = function(a) {
                console.log("你点击了第"+a+"===========")
            };


            $scope.jump = function(a) {
                $location.path("/"+a)
            };

        },
        tpl: tpl
    };
});