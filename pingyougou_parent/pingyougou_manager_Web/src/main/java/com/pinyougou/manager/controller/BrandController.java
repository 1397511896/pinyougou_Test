package com.pinyougou.manager.controller;

import com.alibaba.dubbo.config.annotation.Reference;
import com.pinyougou.pojo.TbBrand;
import com.pinyougou.sellergoods.service.BrandService;

import entity.PageResult;
import entity.Result;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/brand")
public class BrandController {


    @Reference
    private BrandService brandService;

    @RequestMapping("/findAll.do")
    public List<TbBrand> findAll(){
        return brandService.findAll();
    }



    @RequestMapping("/findPage.do")
    public PageResult findPage(int pageNum, int pageSize){
        return brandService.findPage(pageNum, pageSize);
    };


    @RequestMapping("/add.do")
    public Result add(@RequestBody TbBrand tbBrand){
        try {
                brandService.add(tbBrand);
                return new Result(true,"添加成功");

        } catch (Exception e) {
            e.printStackTrace();
            return new Result(false,"添加失败");
        }
    }

    @RequestMapping("/update.do")
    public Result update(@RequestBody TbBrand tbBrand){
        try {
            brandService.update(tbBrand);
            return new Result(true,"修改成功");

        } catch (Exception e) {
            e.printStackTrace();
            return new Result(false,"修改失败");
        }
    }

    @RequestMapping("/findOne.do")
    public  TbBrand findOne(Long id){
        return brandService.findOne(id);
    };

    @RequestMapping("/delete.do")
    public Result delete(Long[] ids){
        try {
            brandService.delete(ids);
            return  new Result(true,"删除成功");
        } catch (Exception e) {
            e.printStackTrace();
            return  new Result(false,"删除失败");
        }
    }

    @RequestMapping("/findSearch.do")
    public PageResult findPage(@RequestBody TbBrand tbBrand,int pageNum, int pageSize){
        return brandService.findSearch(tbBrand,pageNum, pageSize);
    };


}
