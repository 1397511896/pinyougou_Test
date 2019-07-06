app.service('brandService',function ($http) {
    //读取列表数据绑定到表单中
    this.findAll = function () {
        return $http.get("../brand/findAll.do");
    }
    this.findPage = function (pageNum,pageSize) {
        return   $http.get('../brand/findPage.do?pageNum='+pageNum+'&pageSize='+pageSize);
    }
    this.add = function (entity) {
        return   $http.post('../brand/add.do',entity)
    }
    this.update = function (entity) {
        return   $http.post('../brand/update.do',entity)
    }
    this.update1 = function (id) {
        return $http.get('../brand/findOne.do?id='+id);
    }
    this.dele = function (selectIds) {
        return $http.get('../brand/delete.do?ids='+selectIds)
    }
    this.search = function (pageNum,pageSize,searchEntity) {
        return $http.post('../brand/findSearch.do?pageNum='+pageNum+'&pageSize='+pageSize,searchEntity)
    }

})