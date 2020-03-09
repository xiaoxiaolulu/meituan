<template>
    <div id="app">
        <!--    <Home></Home>-->
        <van-tabbar v-if="showTabbar" v-model="active">
            <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
            <van-tabbar-item icon="orders-o" to="/order">订单</van-tabbar-item>
            <van-tabbar-item icon="user-o" to="/mine">我的</van-tabbar-item>
        </van-tabbar>
        <router-view></router-view>
    </div>
</template>

<script>
    // import Home from "./components/Home";
    import {Tabbar, TabbarItem} from 'vant';

    export default {
        name: 'App',
        data() {
            return {
                active: 0
            }
        },
        components: {
            // Home,
            [Tabbar.name]: Tabbar,
            [TabbarItem.name]: TabbarItem
        },
        computed: {
            showTabbar() {
                const name = this.$route.name;
                if (name === 'home' || name === 'order' || name === 'mine') {
                    return true
                } else {
                    return false
                }
            }
        }
    }
</script>

<style lang="scss">
    @import "styles/init.css";

    .van-search {
        padding: 0;
    }
</style>
