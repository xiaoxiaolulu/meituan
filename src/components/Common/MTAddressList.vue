<template>
    <div class="mt-address-list">
        <MTNavBar leftArrowStyle="black" title="地址列表"></MTNavBar>
        <van-address-list v-model="chosenAddressId" :list="list" @add="onAdd" @edit="onEdit">
        </van-address-list>
    </div>
</template>

<script>
    import {AddressList} from 'vant'
    import MTNavBar from "./MTNavBar";
    export default {
        name: "MTAddressList",
        data(){
          return {
              chosenAddressId: "1",
              list: [
                  {
                      id: "3",
                      addressDetail: "桑果古来",
                      areaCode: "110105",
                      city: "北京市",
                      country: "",
                      county: "朝阳区",
                      isDefault: false,
                      name: "李四",
                      postalCode: "",
                      province: "北京市",
                      tel: "13564957378"
                  }
              ]
          }
        },
        components: {
            [AddressList.name]: AddressList,
            [MTNavBar.name]: MTNavBar
        },
        methods: {
            onAdd(){
                this.$router.push('/address/add')
            },
            onEdit(item){
                this.$store.commit("setEditingAddress",item);
                this.$router.push("/address/edit")
            },
        }
    }
</script>

<style scoped>

</style>