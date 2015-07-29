/**
 * Created by adrain on 2015/7/29.
 */
//window.onload为当页面加载完毕后运行
function $(id){
    return document.getElementById(id);
}
window.onload=function(){
    //找到点击元素的id
    var obtn=$('btn');
    //获取页面可视区域高度
    var clientHeight=document.documentElement.clientHeight;

    //创建定时器的变量
    var timer=null;
    var isTop=true;
    //这里是为了当滚动到中间时鼠标滚动滚轮时停止自动向上
    window.onscroll=function(){
        //获取滚动条滚动距离顶部的位置
        var osTop=document.documentElement.scrollTop || document.body.scrollTop;
        //第二屏才显示
        if(osTop>=clientHeight){
            obtn.style.display='block';
        }else{
            obtn.style.display='none';
        }
        if(!isTop){
            clearInterval(timer);
        }
        isTop=false;
    }
    //增加点击事件
    obtn.onclick=function(){
        //设置定时器
        timer = setInterval(function(){
            //获取滚动条滚动距离顶部的位置
            var osTop=document.documentElement.scrollTop || document.body.scrollTop;
            //由快到慢
            var ispeed =Math.floor(osTop / 5);//Math.floor向下取整
            //修改滚动条的数值
            document.documentElement.scrollTop=document.body.scrollTop=osTop - ispeed;

            isTop=true;
            //当滚动条滚动到顶部时清除定时器
            if(osTop==0){
                clearInterval(timer);
            }
        },30);

    }
}



