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
        <div class="main-group">
            <div>
                <h2>推荐商家</h2>
                <van-dropdown-menu>
                    <van-dropdown-item v-model="sort" :options="sorts"></van-dropdown-item>
                    <div class="van-dropdown-menu__item">距离最近</div>
                    <div class="van-dropdown-menu__item">品质联盟</div>
                    <div class="van-dropdown-menu__item">筛选<i class="iconfont icon-funnel"></i></div>
                </van-dropdown-menu>
                <div class="merchant-list">
                    <router-link to="/merchant/1">
                        <div class="merchant-item">
                            <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3249244908,1733608492&fm=26&gp=0.jpg" alt="" class="logo">
                            <div class="merchant-info">
                                <div class="merchant-name">全榜第一黑店</div>
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
                    <router-link to="/merchant/1">
                        <div class="merchant-item">
                            <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3249244908,1733608492&fm=26&gp=0.jpg" alt="" class="logo">
                            <div class="merchant-info">
                                <div class="merchant-name">瞎几把剪理发店</div>
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
                    <router-link to="/merchant/1">
                        <div class="merchant-item">
                            <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3249244908,1733608492&fm=26&gp=0.jpg" alt="" class="logo">
                            <div class="merchant-info">
                                <div class="merchant-name">我很闲因为我很快乐</div>
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
                    <router-link to="/merchant/1">
                        <div class="merchant-item">
                            <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3249244908,1733608492&fm=26&gp=0.jpg" alt="" class="logo">
                            <div class="merchant-info">
                                <div class="merchant-name">这条街就我没倒闭</div>
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
                    <router-link to="/merchant/1">
                        <div class="merchant-item">
                            <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3249244908,1733608492&fm=26&gp=0.jpg" alt="" class="logo">
                            <div class="merchant-info">
                                <div class="merchant-name">理想很完美现实很骨感</div>
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
    import {Search, DropdownMenu, DropdownItem, Rate, Tag} from 'vant';

    export default {
        name: "Home",
        data() {
            return {
                rate: 8,
                sort: 0,
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