<style lang="less" scoped>
@import '../styles/flex.css';

.card-padding {
    padding: 12px;
}

.fa {
    width: 1.5em;
}
</style>
<template>
    <div class="">
        <x-header class="header" :left-options="{backText: ''}">详情</x-header>
        <div id="content" class="content">
            <card class="spot">
                <img slot="header" :src="spot.src" style="width:100%;display:block;">
                <div slot="content" class="card-padding">
                    <p style="line-height:2.4em;">{{spot.title}}</p>
                    <p style="font-size:0.9em;line-height:1.5em;">{{spot.descp}}</p>

                </div>
                <div slot="footer" class="card-padding">
                    <i class="fa fa-heart-o" style="color:red;"></i>
                    <span>{{spot.collect_num}}</span>
                    <div style="float:right;">好评率{{spot.favor_per}}</div>
                </div>
            </card>
            <div class="bar"></div>
            <div class="card-padding ub" @click="onAddrClick">
                <div class="uf-1">
                    <div>
                        <i class="fa fa-map-marker"></i>北京朝阳区东四环四方桥东南角</div>
                    <div>
                        <i class="fa fa-clock-o"></i>距你约9小时30分钟车程</div>
                </div>
                <div class="ub uc">
                    <i class="fa fa-angle-right"></i>
                </div>
            </div>
            <div class="bar"></div>
            <div style="height:44px;">
                <sticky scroll-box="content" :offset="46">
                    <tab :line-width="1" active-color="#66C0F0" v-model="tabIndex">
                        <tab-item selected @on-item-click="onItemClick">详情</tab-item>
                        <tab-item @on-item-click="onItemClick">点评</tab-item>
                        <tab-item @on-item-click="onItemClick">须知</tab-item>
                        <tab-item @on-item-click="onItemClick">问问</tab-item>
                    </tab>
                </sticky>
            </div>

            <swiper v-model="tabIndex" :show-dots="false" :aspect-ratio="1">
                <swiper-item>
                    <div class="card-padding">
                        详情内容
                    </div>
                </swiper-item>
                <swiper-item>
                    <div class="card-padding">
                        点评内容
                    </div>
                </swiper-item>
                <swiper-item>
                    <div class="card-padding">
                        须知内容
                    </div>
                </swiper-item>
                <swiper-item>
                    <div class="card-padding">
                        问问内容
                    </div>
                </swiper-item>
            </swiper>
        </div>

        <toast v-model="showToast" type="text" :time="800" is-show-mask text="查看地图" :position="'middle'">123</toast>
    </div>
</template>
<script>
import { XHeader, Card, Cell, Tab, TabItem, Swiper, SwiperItem, Sticky, Toast } from 'vux'
export default {
    data() {
        return {
            spot: { src: "http://bj.happyvalley.cn/UploadFiles/images/Preferential/W170828324474123.jpg", title: "北京欢乐谷", descp: "北京欢乐谷是华侨城集团倾心打造的新一代文化主题公园,以文化景观、艺术表演和游乐体验为核心,集海陆空三栖游乐于一体,是家庭的首选地,孩子们的开心课堂", price: "￥99", collect_num: "288", favor_per: "100%" },
            tabIndex: 0,
            showToast: false
        }
    },
    computed: {
    },
    created() {

    },
    mounted() {
    },
    methods: {
        onItemClick(index) {

        },
        onAddrClick() {
            this.showToast=true
        }
    },
    components: {
        XHeader, Card, Cell,
        Tab, TabItem, Sticky,
        Swiper, SwiperItem,
        Toast
    }
}
</script>
