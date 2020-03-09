<style scoped lang='scss'>
    .gd-container{
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: rgba(0,0,0,0.7);
        z-index: 999;
        display: flex;
        justify-content: center;
        align-items: center;
        .middle-box{
            width: 315px;
            height: 440px;
            position: relative;
            .goods-detail{
                border-radius: 10px;
                overflow: hidden;
                height: 348px;
                background-color: #fff;
                padding: 10px;
                .picture{
                    width: 100%;
                    height: 236px;
                }
                .month-sale{
                    font-size: 12px;
                    margin-top: 10px;
                }
                .intro{
                    font-size: 14px;
                    margin-top: 10px;
                    height: 40px;
                }
                .price{
                    margin-top: 10px;
                    font-size: 18px;
                    color: #fb4e44;
                }
            }
            .close-btn{
                width: 40px;
                height: 40px;
                background-image: url("http://s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:9096d347/df125964473c5a2c4edadb74d8a11995.png");
                background-size: 40px;
                background-position: center;
                border-radius: 50%;
                position: absolute;
                bottom: 0;
                left: 50%;
                right: 50%;
                margin-left: -20px;
            }
        }
    }
</style>

<template>
    <div class="gd-container" v-show="show">
        <div class="middle-box">
            <div class="goods-detail">
                <img :src="goods.picture" alt="" class="picture">
                <div class="month-sale">月售10份</div>
                <div class="intro">{{goods.intro}}</div>
                <div class="price">￥{{goods.price}}</div>
            </div>
            <div class="close-btn" @click="closeClick"></div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: "GoodsDetail",
        props: {
            goods: {
                type: Object,
                // 如果type为Object或者是数组类型，那么default必须为一个函数，这个函数的返回值就是
                // 这个默认的值
                default: function(){
                    return {}
                }
            }
        },
        data() {
            return {
                show: false
            }
        },
        watch: {
            goods(){
                this.show = true;
            }
        },
        components: {},
        methods: {
            closeClick(){
                this.show = false;
            }
        }
    }
</script>