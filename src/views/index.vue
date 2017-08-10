<template>
    <div id="index">
        <header>
            <div class="header-bg">
                <a href="https://github.com" target="_blank"><img src="../assets/timg.jpeg" alt=""></a>    
                <span>Repositories List</span>
            </div>
        </header>
        <section>
            <div id="wrapper">
                <mu-raised-button label="View Your Repositories" class="demo-raised-button view-btn" backgroundColor="black"/>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    }
}

</script>
<style lang="css" scoped>
.header-bg{
    height: 54px;
    width:100%;
    /*background-color: #24292e;*/
    background-color: black;
    /*position: fixed;*/
}
.header-bg img{
    height: 40px;
    width: 40px;
    margin-left: 13.3%;
    position: relative;
    top:7px;
    border-radius: 50%;
    cursor: pointer;
}
.header-bg span{
    color: white;
    font-size: 18px;
    position: relative;
    bottom:6px;
    margin-left: 10px;
    user-select:none;
    cursor: default;
}
#wrapper{
    height: 100px;
}
.view-btn{
    display: block;
    margin:60px auto;
    width:210px;
}
</style>
