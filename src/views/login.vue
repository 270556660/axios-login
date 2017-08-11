<template>
    <div id="login">
        <vHeader info="Login"></vHeader>
        <section>
            <mu-text-field label="Github Personal Token" hintText="" type="password" labelFloat class="token-input" underlineFocusClass="line" labelFocusClass="label"/>
            <mu-raised-button label="Sign In" class="demo-raised-button loginbtn" backgroundColor="black" />
        </section>
    </div>
</template>
<script>
import header from '@/components/head'
export default {
    data() {
        return {
            // dataSource:[]
        }
    },
    components:{
        'vHeader':header
    }
}

</script>
<style lang="css">
.token-input{
    display: block;
    margin:60px auto;
}
.line{
    background-color: black;
}
.label{
    color: black;
}
.loginbtn{
    display: block;
    margin:auto;
    position: relative;
    top:-30px;
}
</style>
