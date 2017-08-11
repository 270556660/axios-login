<template>
    <div id="repository">
        <vHeader info="Your Repositories"></vHeader>
        <div id="list-wrapper">
            <div class="item">
                <mu-card class="mask">
                    <mu-card-header title="Myron Avatar" subTitle="sub title">
                        <mu-avatar src="http://pic4.zhimg.com/v2-1c32095ccdf7d17682209ed64e67834f_im.jpg" slot="avatar" />
                    </mu-card-header>
                    <div class="box">
                        <div class="item-info">
                            <mu-icon value="turned_in" :size="20" class="icon" /><span>asdasd</span>
                            <mu-icon value="cached" :size="20" class="icon right-icon" /><span>asdasdasd</span>
                        </div>
                        <div class="right-btn">
                            <mu-flat-button label="View Detail" class="demo-flat-button"/>
                        </div>
                    </div>
                </mu-card>
            </div>
        </div>
    </div>
</template>


<script>
import header from '@/components/head'
export default {

    name: 'repository',

    data() {
        return {

        }
    },
    components:{
        'vHeader':header
    }

}

</script>
<style lang="css" scoped>
.item{
    width:600px;
    height: 150px;
    margin:30px auto;
}
.mask{
    transition: box-shadow .25s;
}
.mask:hover{
    box-shadow: 5px 5px 10px rgba(7,17,27,.2);
}
.item-info{
    margin-left: 15px;
}
.item-info span{
    cursor: default;
}
.icon{
    position: relative;
    top:5px;
    margin-right: 2px;
    user-select:none;
    cursor: default;
}
.right-icon{
    margin-left: 10px;
}
.box{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>
