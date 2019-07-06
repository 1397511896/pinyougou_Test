app.controller('baseController',function ($scope) {

    // 分页控件配置
    $scope.paginationConf = {
        currentPage: 1, //当前页码
        totalItems: 10, // 总记录数
        itemsPerPage: 10, //  每页记录数
        perPageOptions: [10, 20, 30, 40, 50], //  分页选项
        onChange: function(){ 			// 当页码变更的时候 自动触发的方法
            $scope.reloadList();//重新加载
        }
    };
    //---------------------------
    //刷新列表
    $scope.reloadList = function () {
        $scope.search($scope.paginationConf.currentPage,$scope.paginationConf.itemsPerPage);
    }
    //---------------------------

    $scope.selectIds = [];
    $scope.updateSelection = function ($event,id) {
        if ($event.target.checked){
            //   如果标签处于 选中状态的话 将选中的id 添加到 集合中
            $scope.selectIds.push(id)
        }else {
            //  获取 该id 所在的索引位置
            var index = $scope.selectIds.indexOf(id);
            //  删除id 对应 索引
            $scope.selectIds.splice(index, 1);
        }
    }

})