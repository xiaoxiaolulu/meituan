<template>
    <div>
        <MTNavBar leftArrowStyle="black" title="确认订单"></MTNavBar>
        <van-cell-group>
            <van-cell titl="请选择收货地址" icon="location-o" is-link to="/address">
                <template slot="title" v-if="address">
                    <div class="user-info">
                        <span>{{address.realname}}</span>
                        <span>{{address.telephone}}</span>
                    </div>
                    <div class="address-info">
                        {{address.province}}{{address.city}}{{address.county}}{{address.detail}}
                    </div>
                </template>
            </van-cell>
        </van-cell-group>

        <van-cell-group title="肯德基" border>
            <van-cell v-for="goods in goodsList" :key="goods.name">
                <template slot="title">
                    <div class="goods-group">
                        <div class="thumbnail-group">
                            <img :src="goods.picture" alt="">
                        </div>
                        <div class="info-group">
                            <div class="title-group">
                                <span>{{goods.name}}</span>
                                <span>¥{{goods.price}}</span>
                            </div>
                            <div class="number">份*{{goods.count}}</div>
                        </div>
                    </div>
                </template>
            </van-cell>
        </van-cell-group>
        <van-submit-bar
                :price="totalPrice*100"
                button-text="提交订单"
                @submit="onSubmit"
        />
    </div>
</template>

<script>
    import MTNavBar from "./Common/MTNavBar";
    import {Cell, CellGroup, SubmitBar} from  'vant';
    export default {
        name: "SubmitOrder",
        data(){
          return {
              goodsList: [],
              address: {},
          }
        },
        components: {
            [MTNavBar.name]: MTNavBar,
            [Cell.name]: Cell,
            [CellGroup.name]: CellGroup,
            [SubmitBar.name]: SubmitBar
        },
        mounted() {
            this.goodsList = this.$store.state.cart;
        },
        computed: {
            totalPrice(){
                let total = 0;
                for(let goods of this.goodsList){
                    total += goods.price*goods.count
                }
                return total
            }
        },
        methods: {
            onSubmit(){
              console.log("提交了")
            }
        }
    }
</script>

<style scoped lang="scss">
    .goods-group{
        padding: 10px;
        display: flex;
        justify-content: space-between;
        background-color: #F8F8F8;
    .thumbnail-group{
        width: 55px;
        height: 55px;
        min-width: 55px;
    img{
        width: 100%;
        height: 100%;
    }
    }
    .info-group{
        flex: 1;
        padding-left: 10px;
    .title-group{
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        color: #333;
    }
    }
    }
</style>