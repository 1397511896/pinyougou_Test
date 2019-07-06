app.controller('brandController',function ($scope,$http,$controller,brandService) {

    //  继承baseController  文件
    $controller('baseController',{$scope:$scope});
    // 查询品牌列表
    $scope.findAll = function () {
        //   向后端发送get请求
        brandService.findAll().success(
            //  如果请求成功的话 接收响应数据
            function (response) {
                // console.log(response);
                $scope.brandList = response;

            })
    }

    //-------------------------------------------------


    //----------------------------------

    $scope.findPage = function (pageNum,pageSize) {

        brandService.findPage(pageNum,pageSize).success(
            function (response) {
                $scope.brandList = response.rows; // 显示当前页的数据
                $scope.paginationConf.totalItems = response.total;  //  让后端查出来的记录数 等于   插件中的记录数
            }
        )
    }

    $scope.save = function () {
        var object = null;
        //  如果 获取到的entity有id 值的话    methodName = update
        if ($scope.entity.id != null){
            object = brandService.update($scope.entity);
        }else{
            object = brandService.add($scope.entity);
        }
        object.success(
            function(response) {
                if (response.success){
                    $scope.reloadList();//重新加载
                }else{
                    alert(response.message)
                }
            })
    }

    $scope.update = function (id) {
        brandService.update1(id).success(
            function (response) {
                $scope.entity = response;
            })

    }

    $scope.dele = function () {
        if (confirm("你确定要删除嘛？")){
            brandService.dele($scope.selectIds) .success(
                function (response) {
                    if (response.success){
                        $scope.reloadList();//重新加载
                    }else{
                        alert(success.message)
                    }
                })
        }
    }

    $scope.searchEntity={};
    $scope.search = function (pageNum,pageSize) {
        brandService.search(pageNum,pageSize,$scope.searchEntity).success(
            function (response) {
                $scope.brandList = response.rows; // 显示当前页的数据
                $scope.paginationConf.totalItems = response.total;  //  让后端查出来的记录数 等于   插件中的记录数
            }
        )

    }



})