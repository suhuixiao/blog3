var vue = new Vue({
	el:'#vue',
	data:{
		height:'160 CM',
        heightValue:['160','CM'],
	},
	methods:{
		//取消选择身高
        cancelHeight:function(){
            $('#height_input').val('')
        },
        //确认身高
        ensureHeight:function(){
            vue.height = $('#height_input').val();
            vue.heightValue[0] = vue.height.replace(/ CM/,'')
        },
        //picker选择框数值范围
        fanhui_arr:function(startNum,endNum,section) {
            var _arr=[];
            for(a=startNum;a<=endNum;a=a+section){
                _arr.push(a);
            }
            return _arr;
        },
	}
})



//选择身高
$("#height_input").picker({
    toolbarTemplate: '<header class="bar bar-nav">\
			<button class="button button-link pull-left close-picker" style="color:#01b26c" onClick="vue.cancelHeight()">取消</button>\
			<button class="button button-link pull-right close-picker" style="color:#01b26c" onClick="vue.ensureHeight()">确定</button>\
			<div class="title title_select">请选择你的身高</div>\
			</header>',
    cols: [{
            textAlign: 'center',
            values: vue.fanhui_arr(140,190,1)
                //如果你希望显示文案和实际值不同，可以在这里加一个displayValues: [.....]
        },
        {
            textAlign: 'center',
            values: ['CM']
        }
    ],
    onOpen:function(){
    	//显示遮罩层
        $('#mask').css('display','block');
        //设置picker停留的位置
        $('#height_input').picker('setValue', vue.heightValue );
        //设置input的value值
        $('#height_input').val( vue.height )
    },
    onClose:function(){
    	//取消遮罩层
        $('#mask').css('display','none')
    }
})