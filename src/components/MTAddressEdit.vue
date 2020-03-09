<template>
    <div class="mt-address-edit">
        <MTNavBar leftArrowStyle="black" title="添加地址"></MTNavBar>
        <van-address-edit :area-list="areaList" show-delete show-set-default :address-info="addressInfo" @save="onSave"
                          @delete="onDelete">
        </van-address-edit>
    </div>
</template>

<script>
    import {AddressEdit} from 'vant';
    import MTNavBar from "./Common/MTNavBar"
    import areaList from "../data/area"

    export default {
        name: "MTAddressEdit",
        data() {
            return {
                areaList,
                addressInfo: {}
            }
        },
        computed: {
            isEditing() {
                if (this.$route.name === "address_edit") {
                    return true
                } else {
                    return false
                }
            }
        },
        mounted() {
            if (this.isEditing) {
                this.addressInfo = this.$store.state.editingAddress
            }
        },
        components: {
            [AddressEdit.name]: AddressEdit,
            [MTNavBar.name]: MTNavBar
        },
        methods: {
            onSave(content) {
                console.log(content)
            },
            onDelete() {
            }
        }
    }
</script>

<style scoped>

</style>