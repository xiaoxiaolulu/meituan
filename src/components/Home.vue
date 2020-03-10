<template>
    <div class="home-container">
        <div class="header-group">
            <div class="address-group">
                <i class="iconfont iconlocation"></i>
                <span class="address">你永远找不到的街道</span>
                <i class="iconfont iconjiantouarrow487"></i>
            </div>
            <div class="search-group">
                <van-search></van-search>
            </div>
        </div>
        <div class="main-group" ref="main" :style="mainHeightStyle">
            <div>
                <h2>推荐商家</h2>
                <van-dropdown-menu>
                    <van-dropdown-item v-model="sort" :options="sorts"></van-dropdown-item>
                    <div class="van-dropdown-menu__item">距离最近</div>
                    <div class="van-dropdown-menu__item">品质联盟</div>
                    <div class="van-dropdown-menu__item">筛选<i class="iconfont icon-funnel"></i></div>
                </van-dropdown-menu>
                <div class="merchant-list">
                    <router-link :to="'/merchant/'+merchant.id" v-for="merchant in merchants" :key="merchant.id+merchant.name">
                        <div class="merchant-item">
                            <img :src="merchant.logo" alt="" class="logo">
                            <div class="merchant-info">
                                <div class="merchant-name">{{merchant.name}}</div>
                                <div class="rate-group">
                                    <van-rate size="12" v-model="rate"></van-rate>
                                </div>
                                <div class="tag-group">
                                    <van-tag plain>美团专送</van-tag>
                                    <van-tag plain>家常菜</van-tag>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {DropdownItem, DropdownMenu, Rate, Search, Tag} from 'vant';
    import BSColl from 'better-scroll';

    export default {
        name: "Home",
        data() {
            return {
                rate: 8,
                sort: 0,
                merchants: [],
                scroll: null,
                page: 1,
                sorts: [
                    {text: '推荐排序', value: 0},
                    {text: '好评优先', value: 1},
                    {text: '距离最近', value: 2},
                    {text: '销量最高', value: 3},
                ]
            }
        },
        components: {
            [Search.name]: Search,
            [DropdownMenu.name]: DropdownMenu,
            [DropdownItem.name]: DropdownItem,
            [Rate.name]: Rate,
            [Tag.name]: Tag
        },
        computed: {
          mainHeightStyle(){
              const leftHeight = 93 + 50;
              const phoneHeight = 667;
              const mainHeight = (phoneHeight - leftHeight)/37.5;
              return {"height": mainHeight + "rem"}
          }
        },
        mounted() {
            this.scroll = new BSColl(this.$refs.main, {
                scrollY: true,
                pullUpLoad: {
                    threshold: 0
                }
            });
            this.scroll.on("pullingUp", () => {
                this.getMerchants(this.page + 1);
            });
            this.getMerchants(1);
        },
        methods: {
            getMerchants(page){
                this.$http.getMerchants(1).then(res => {
                    if(res.data && res.data.results && res.data.results.length > 0){
                        console.log(res);
                        this.page = page;
                        const merchants = res.data.results;
                        this.merchants = this.merchants.concat(merchants);
                    }
                    this.scroll.refresh();
                    this.scroll.finishPullUp();
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    .header-group {
        background: black;
        padding: 20px 14px 10px;

        .address-group {
            color: #ffffff;
            font-size: 16px;
            font-weight: 700;
        }

        .search-group {
            margin-top: 10px;
        }
    }

    .main-group{
        overflow: hidden;
        h2{
            padding: 20px 10px 10px;
        }
        .merchant-list{
            .merchant-item{
                padding: 10px;
                display: flex;
                .logo{
                    width: 85px;
                    height: 64px;
                }
                .merchant-info{
                    margin-left: 5px;
                    .merchant-name{
                        font-size: 16px;
                        font-weight: 700;
                    }
                    .rate-group{
                        padding-top: 5px;
                    }
                    .tag-group{
                        padding-top: 5px;
                        span{
                            margin-right: 2px;
                        }
                    }
                }
            }
        }
    }
</style>

<style scoped>
    .van-dropdown-menu >>> .van-dropdown-menu__title {
        color: #767676;
    }

    .van-dropdown-menu__item {
        font-size: 14px;
        color: #767676;
    }
</style>