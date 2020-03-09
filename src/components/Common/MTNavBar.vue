<template>
    <div class="mt-nav-bar">
        <van-nav-bar @click-left="$router.back()" :title="title">
            <van-icon name="arrow-left" slot="left" :color="leftArrowColor" />
        </van-nav-bar>
    </div>
</template>

<script type="text/ecmascript-6">
    import { NavBar,Icon} from 'vant'
    export default {
        name: "MTNavBar",
        props: {
            leftArrowStyle: {
                type: String,
                default: "white"
            },
            title: {
                type: String,
                default: ""
            }
        },
        computed: {
            leftArrowColor(){
                return this.leftArrowStyle === 'white' ? "#fff" : "#000"
            }
        },
        data() {
            return {}
        },
        components: {
            [NavBar.name]: NavBar,
            [Icon.name]: Icon
        }
    }
</script>

<style scoped>
    .mt-nav-bar >>> .van-nav-bar{
        background: none;
    }
    .mt-nav-bar >>> .van-hairline--bottom::after{
        border: none;
    }
</style>