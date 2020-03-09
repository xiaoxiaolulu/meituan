import VueRouter from "vue-router";
import Vue from 'vue';
import Home from "./components/Home";
import Merchant from "./components/Merchant/Merchant";
import SubmitOrder from "./components/SubmitOrder";
import MTAddressList from "./components/Common/MTAddressList";
import MTAddressEdit from "./components/MTAddressEdit";
import Order from "./components/Order/Order";
import Mine from "./components/Mine";
import Login from "./components/Login";

Vue.use(VueRouter);

const routes = [
    {path: "/", component:Home, name: "home"},
    {path: "/order", component:Order, name: "order"},
    {path: "/mine", component:Mine, name: "mine"},
    {path: "/merchant/:merchant_id", component:Merchant, name: "merchant"},
    {path: "/submitorder", component:SubmitOrder, name: "submitorder"},
    {path: "/address", component:MTAddressList, name: "address"},
    {path: "/address/edit", component:MTAddressEdit, name: "address_edit"},
    {path: "/address/add", component:MTAddressEdit, name: "address_add"},
    {path: "/login", component:Login, name: "login"},
];

const router = new VueRouter({
    routes
});

export default router;