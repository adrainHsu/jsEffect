/**
 * Created by adrain on 2015/7/29.
 */
//window.onloadΪ��ҳ�������Ϻ�����
function $(id){
    return document.getElementById(id);
}
window.onload=function(){
    //�ҵ����Ԫ�ص�id
    var obtn=$('btn');
    //��ȡҳ���������߶�
    var clientHeight=document.documentElement.clientHeight;

    //������ʱ���ı���
    var timer=null;
    var isTop=true;
    //������Ϊ�˵��������м�ʱ����������ʱֹͣ�Զ�����
    window.onscroll=function(){
        //��ȡ�������������붥����λ��
        var osTop=document.documentElement.scrollTop || document.body.scrollTop;
        //�ڶ�������ʾ
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
    //���ӵ���¼�
    obtn.onclick=function(){
        //���ö�ʱ��
        timer = setInterval(function(){
            //��ȡ�������������붥����λ��
            var osTop=document.documentElement.scrollTop || document.body.scrollTop;
            //�ɿ쵽��
            var ispeed =Math.floor(osTop / 5);//Math.floor����ȡ��
            //�޸Ĺ���������ֵ
            document.documentElement.scrollTop=document.body.scrollTop=osTop - ispeed;

            isTop=true;
            //������������������ʱ�����ʱ��
            if(osTop==0){
                clearInterval(timer);
            }
        },30);

    }
}



