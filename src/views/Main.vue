<template>
    <div style="height:100%;">
        <view-box ref="viewBox" body-padding-bottom="55px">

            

            <!-- remember to import BusPlugin in main.js if you use components: x-img and sticky -->
            <transition @after-enter="$vux.bus && $vux.bus.$emit('vux:after-view-enter')" :name="'vux-pop-' + (direction === 'forward' ? 'in' : 'out')">
                <div>
                    <router-view class="router-view"></router-view>
                </div>
                <!-- <router-view class="router-view"></router-view> -->
            </transition>

            <tabbar class="vux-demo-tabbar" icon-class="vux-center" v-show="true" slot="bottom">
                <tabbar-item :link="{path:'/index'}" selected>
                    <i class="fa fa-paper-plane-o" slot="icon"></i>
                    <span slot="label">爱旅游</span>
                </tabbar-item>
                <tabbar-item :link="{path:'/index2'}" badge="9">
                    <i class="fa fa-bookmark-o" slot="icon"></i>
                    <span slot="label">
                        定制
                    </span>
                </tabbar-item>
                <tabbar-item :link="{path:'/index3'}" show-dot>
                    <i class="fa fa-user-o" slot="icon"></i>
                    <span slot="label">我的</span>
                </tabbar-item>
            </tabbar>
           
        </view-box>
    </div>
</template>

<script>
import { Radio, Group, Cell, Badge, Drawer, Actionsheet, ButtonTab, ButtonTabItem, ViewBox, XHeader, Tabbar, TabbarItem, Loading, Search, PopupPicker, TransferDom } from 'vux'

export default {
    name: 'main',
    data() {
        return {

            drawerVisibility: false,
            showMode: 'push',
            showModeValue: 'push',
            showPlacement: 'left',
            showPlacementValue: 'left',
           
        }
    },
    computed: {
        direction() {
            return 'forward'
        },
        path() {
            return '/'
        },
        isShowBar() {
            if (/component/.test(this.path)) {
                return true
            }
            return false
        },
       
        componentName() {
            //   if (this.route.path) {
            //     const parts = this.route.path.split('/')
            //     if (/component/.test(this.route.path) && parts[2]) return parts[2]
            //   }
        },

        isTabbarDemo() {
            return /tabbar/.test(this.route.path)
        },
        title() {
            //   if (this.route.path === '/') return 'Home'
            //   if (this.route.path === '/project/donate') return 'Donate'
            //   if (this.route.path === '/demo') return 'Demo list'
            //   return this.componentName ? `Demo/${this.componentName}` : 'Demo/~~'
            return 'demo'
        }
    },
    mounted() {
        this.$router.push({ name: 'Index' })
    },
    components: {
        Radio,
        Group,
        Cell,
        Badge,
        Drawer,
        ButtonTab,
        ButtonTabItem,
        ViewBox,
        XHeader,
        Tabbar,
        TabbarItem,
        Loading,
        Search,
        PopupPicker,
        Actionsheet
    },
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/tap.less';


.router-view {
    // width: 100%;
    // top: 46px;
    overflow-x: hidden;
}

.vux-pop-out-enter-active,
.vux-pop-out-leave-active,
.vux-pop-in-enter-active,
.vux-pop-in-leave-active {
    will-change: transform;
    transition: all 500ms;
    height: 100%;
    top: 46px;
    position: absolute;
    backface-visibility: hidden;
    perspective: 1000;
}

.vux-pop-out-enter {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
}

.vux-pop-out-leave-active {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
}

.vux-pop-in-enter {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
}

.vux-pop-in-leave-active {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
}

.menu-title {
    color: #888;
}
</style>
