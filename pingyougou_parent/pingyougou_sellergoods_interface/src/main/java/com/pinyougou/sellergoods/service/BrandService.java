package com.pinyougou.sellergoods.service;

import com.pinyougou.pojo.TbBrand;
import entity.PageResult;

import java.util.List;

/*
*   品牌接口
* */
public interface  BrandService {
    public List<TbBrand> findAll();

    public PageResult findPage(int pageNum, int pageSize);

    public  void add(TbBrand tbBrand);

//    根据id 查询数据
    public  TbBrand findOne(Long id);
//     修改数据
    public  void update(TbBrand tbBrand);
//    删除数据
    public void delete(Long[] ids);
//   分页带查询
public PageResult findSearch(TbBrand tbBrand, int pageNum, int pageSize);
}
