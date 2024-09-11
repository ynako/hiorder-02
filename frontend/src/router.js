
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);


import OrderOrderManager from "./components/listers/OrderOrderCards"
import OrderOrderDetail from "./components/listers/OrderOrderDetail"

import PushPushManager from "./components/listers/PushPushCards"
import PushPushDetail from "./components/listers/PushPushDetail"

import MenuMenuManager from "./components/listers/MenuMenuCards"
import MenuMenuDetail from "./components/listers/MenuMenuDetail"

import LoginUserManager from "./components/listers/LoginUserCards"
import LoginUserDetail from "./components/listers/LoginUserDetail"

import OrderManagementOrdermenuManager from "./components/listers/OrderManagementOrdermenuCards"
import OrderManagementOrdermenuDetail from "./components/listers/OrderManagementOrdermenuDetail"

import ChatChatManager from "./components/listers/ChatChatCards"
import ChatChatDetail from "./components/listers/ChatChatDetail"
import ChatChatContentManager from "./components/listers/ChatChatContentCards"
import ChatChatContentDetail from "./components/listers/ChatChatContentDetail"


export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [
            {
                path: '/orders/orders',
                name: 'OrderOrderManager',
                component: OrderOrderManager
            },
            {
                path: '/orders/orders/:id',
                name: 'OrderOrderDetail',
                component: OrderOrderDetail
            },

            {
                path: '/pushes/pushes',
                name: 'PushPushManager',
                component: PushPushManager
            },
            {
                path: '/pushes/pushes/:id',
                name: 'PushPushDetail',
                component: PushPushDetail
            },

            {
                path: '/menus/menus',
                name: 'MenuMenuManager',
                component: MenuMenuManager
            },
            {
                path: '/menus/menus/:id',
                name: 'MenuMenuDetail',
                component: MenuMenuDetail
            },

            {
                path: '/logins/users',
                name: 'LoginUserManager',
                component: LoginUserManager
            },
            {
                path: '/logins/users/:id',
                name: 'LoginUserDetail',
                component: LoginUserDetail
            },

            {
                path: '/orderManagements/ordermenus',
                name: 'OrderManagementOrdermenuManager',
                component: OrderManagementOrdermenuManager
            },
            {
                path: '/orderManagements/ordermenus/:id',
                name: 'OrderManagementOrdermenuDetail',
                component: OrderManagementOrdermenuDetail
            },

            {
                path: '/chats/chats',
                name: 'ChatChatManager',
                component: ChatChatManager
            },
            {
                path: '/chats/chats/:id',
                name: 'ChatChatDetail',
                component: ChatChatDetail
            },
            {
                path: '/chats/chatContents',
                name: 'ChatChatContentManager',
                component: ChatChatContentManager
            },
            {
                path: '/chats/chatContents/:id',
                name: 'ChatChatContentDetail',
                component: ChatChatContentDetail
            },



    ]
})
