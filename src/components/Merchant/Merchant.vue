<template>
    <div class="merchant-container">
        <MTNavBar></MTNavBar>
        <div class="header-group">
            <img src="https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3044792331,1097583552&fm=26&gp=0.jpg" alt="" class="logo">
            <div class="merchant-info">
                <div class="delivery-info">
                    <span>20分钟</span> | <span>1km</span>
                </div>
                <div class="notice">
                    公告：老夫今年七老八十，尚能撸码吹皮。。。。。。。。。。。。。。。。。。。。。。。。。。。
                </div>
            </div>
        </div>
        <van-tabs class="tab-group" v-model="active">
            <van-tab title="点菜">
                <div class="menu-group" :style="menuHeightStyle">
                    <div class="category-group" ref="category">
                        <ul class="category-list">
                            <li v-for="(category,index) in categories" :key="category.name" @click="categoryClick(index)" :class="index===currentIndex?'active':''">
                                {{category.name}}
                            </li>
                        </ul>
                    </div>
                    <div class="goods-group" ref="goods">
                        <div class="goods-list">
                            <dl v-for="(category, category_index) in categories" :key="category.name" class="goods-dl">
                                <dt class="category-name">{{category.name}}</dt>
                                <dd class="goods-item" v-for="(goods, goods_index) in category.goods_list" :key="goods.id" @click="goodsClick(category_index, goods_index)">
                                    <img :src="goods.picture" alt="" class="thumbnail">
                                    <div class="goods_info">
                                        <div class="goods-name">{{goods.name}}</div>
                                        <div class="month-sale">月售10份</div>
                                        <div class="goods-info-bottom">
                                            <div class="price">￥{{goods.price}}</div>
                                            <Stepper v-model="goods.count"></Stepper>
                                        </div>
                                    </div>
                                </dd>
                            </dl>
                        </div>
                    </div>
                </div>
            </van-tab>
            <van-tab title="评价"></van-tab>
            <van-tab title="内容"></van-tab>
        </van-tabs>
        <GoodsDetail :goods="detailGoods"></GoodsDetail>
        <Cart :categories="categories"></Cart>
    </div>
</template>

<script>
    import {Tab, Tabs} from 'vant';
    import BScroll from "better-scroll";
    import kfc from "../../data/kfc";
    import GoodsDetail from "./GoodsDetail";
    import Stepper from "./Stepper";
    import Cart from "./Cart";
    import MTNavBar from "../Common/MTNavBar";
    export default {
        name: "Merchant",
        data(){
            return {
                active: 0,
                categories: [],
                positions: [],
                currentIndex: 0,
                detailGoods: undefined
            }
        },
        components: {
            [MTNavBar.name]: MTNavBar,
            [Tab.name]:Tab,
            [Tabs.name]:Tabs,
            [GoodsDetail.name]: GoodsDetail,
            [Stepper.name]: Stepper,
            [Cart.name]:Cart
        },
        methods: {
            categoryClick(index) {
                const position = this.positions[index];
                this.goodsScroll.scrollTo(0, -position, 500);
                this.currentIndex = index;
            },

            goodsClick(category_index, goods_index){
                let category = this.categories[category_index];
                let goods = category.goods_list[goods_index];
                this.detailGoods = JSON.parse(JSON.stringify(goods));
            }
        },
        mounted() {
            const categories = kfc['categories'];
            for(let category of categories){
                for(let goods of category.goods_list){
                    goods.count = 0;
                }
            }
            this.categories = categories;
            this.$nextTick(()=>{
                var menuScroll = new BScroll(this.$refs.category,{
                    scrollY: true,
                    click: true
                });
                var goodsScroll = new BScroll(this.$refs.goods,{
                    scrollY: true,
                    click: true,
                    // 一定要设置probeType为2，才能监听scroll事件
                    probeType: 2
                });
                goodsScroll.on("scroll", (pos)=>{
                   const y = Math.abs(pos.y);
                   const positions = this.positions;
                    for (let i = 0; i < positions.length ; i++) {
                        const position = positions[i];

                        if(y >= position) {
                            this.currentIndex = i;
                            break;
                        }
                    }
                });

                this.menuScroll = menuScroll;
                this.goodsScroll = goodsScroll;

                const position = [0];
                let offset = 0;
                const dlList = document.getElementsByClassName('goods-dl');
                for(let dl of dlList){
                    const height = dl.clientHeight;
                    offset += height;
                    position.push(offset);
                }
                this.positions = position
            })
        },
        computed: {
            menuHeightStyle(){
                const height = window.innerHeight - 164;
                return {
                    height: height + 'px'
                }
            }
        }
    }
</script>

<style scoped  lang="scss">
    .header-group{
        background: #2E2F3B;
        padding: 10px;
        display:flex;
        margin-top: -46px;
        padding-top: 46px;

        .logo {
            width: 85px;
            height: 64px;
        }
        .merchant-info {
            flex: 1;
            margin-left: 10px;
            color: #ffffff;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            overflow: hidden;

            .notice{
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
            }
        }
    }

    .tab-group {
        .menu-group {
            display: flex;
            .category-group {
                width: 80px;
                text-align: center;
                height: 100%;
                overflow: hidden;
                .category-list {
                    overflow: hidden;
                    li {
                        height: 50px;
                        line-height: 50px;
                        &.active{
                            background-color: #cccccc;
                        }
                    }
                }
            }
            .goods-group {
                flex: 1;
                height: 100%;
                margin-left: 10px;
                overflow: hidden;

                .category-name {
                    font-size: 12px;
                    height: 32px;
                    line-height: 32px;
                }
                .goods-item {
                    display: flex;
                    padding-bottom: 10px;
                    height: 75px;
                    .thumbnail {
                        width: 75px;
                        height: 75px
                    }
                    .goods_info {
                        flex: 1;
                        margin-left: 10px;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-around;

                        .goods-name {
                            font-size: 16px;
                            font-weight: 700;
                        }
                        .goods-info-bottom{
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            .price {
                                color: #fb4e44;
                                font-size: 16px;
                                font-weight: 700;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
