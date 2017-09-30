<style lang="less" scoped>
@import '../styles/flex.css';
.index {}

.top-title {
    margin: 0.8em 1em;
    justify-content: space-between;
    .btns {
        width: 8em;
    }
}

.block {
    width: 45%;
    margin-left:3%;
    margin-top:0.8em;
    float:left;
    border: 1px solid #ddd;
    .ximg-demo {
        height: 7.5em;
    }
    .infos {
        padding:0 0.5em;
        .title {
            line-height: 2.4em;
        }
        .tags {
            font-size: 0.8em;
            color: #aaa;

            .day,
            .tag {
                border: 1px solid #aaa;
                border-radius: 0.2em;
                padding: 0 0.3em;
                margin-right: 0.6em;
            }
        }
        .tail {
            font-size: 0.8em;
            line-height: 2.4em;
            justify-content: space-between;
            .city {
                color:#6699ff;
            }
            .num{
                color:#aaa;
            }
            i {
                width: 1.2em;
            }
        }
    }
}
.block:nth-child(2n-1){
    // margin-right:2%;
}
</style>
<style lang="less">
.weui-btn_plain-primary {
    color: #66C0FF;
    border-color: #66C0FF;
}
</style>

<template>
    <div class="index">
        <div class="top-title ub">
            <div class="title ub-v">
                <div style="font-size:1.1em;">私人定制</div>
                <div class="sub-title">我的专属旅游定制服务</div>
            </div>
            <div class="btns ub uc">
                <x-button plain type="primary" style="border-radius:1em;font-size:0.9em;" @click.native="onStartClick">开始定制</x-button>
            </div>
        </div>
        <div class="bar"></div>
        <div style="height:44px;">
            <sticky scroll-box="vux_view_box_body" ref="sticky" :check-sticky-support="false">
                <tab :line-width="1" active-color="#66C0F0" v-model="tabIndex">
                    <tab-item selected @on-item-click="onItemClick">精 选</tab-item>
                    <tab-item @on-item-click="onItemClick">定制师</tab-item>
                    <tab-item @on-item-click="onItemClick">我的定制</tab-item>
                </tab>
            </sticky>
        </div>
        <swiper v-model="tabIndex" :show-dots="false" :aspect-ratio="3">
            <swiper-item>
                <!-- <div class="ub"> -->
                <div class="block" v-for="(x,i) of spots" :key="i" @click="onSpotClick">
                    <x-img :default-src="defaultSrc" :src="x.src" :webp-src="`${x.src}?type=webp`" class="ximg-demo"></x-img>
                    <div class="infos">
                        <p class="title">{{x.title}}</p>
                        <div class="tags ub">
                            <div class="day">{{x.days}}</div>
                            <div class="tag">{{x.tag}}</div>
                        </div>
                        <div class="tail ub">
                            <div class="city">
                                <i class="fa fa-map-marker"></i>{{x.city}}
                            </div>
                            <div class="num">
                                <i class="fa fa-eye"></i>{{x.num}}
                            </div>
                        </div>
                    </div>
                </div>
                <!-- </div> -->
            </swiper-item>
            <swiper-item>
                2
            </swiper-item>

            <swiper-item>
                3
            </swiper-item>

        </swiper>

    </div>
</template>
<script>
import { XButton, Tab, TabItem, Swiper, SwiperItem, Panel, Sticky, XImg,Toast } from 'vux'
export default {
    data() {
        return {
            tabIndex: 0,
            spots: [
                { title: "咸阳茂陵2日游", tag: "名胜古迹", days: "2天", city: "咸阳", num: "802", src: "https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=704e7b8b054f78f0940692a118586130/e850352ac65c1038d8e02b1db4119313b17e8957.jpg" },
                { title: "石家庄海洋公园2日游", tag: "亲子游乐", days: "2天", city: "石家庄", num: "773", src: "http://img.mp.itc.cn/upload/20160711/e35f2b8e970442a8a05c781aa9b5d194_th.jpg" },
                { title: "西安大雁塔2日游", tag: "名胜古迹", days: "2天", city: "西安", num: "1152", src: "https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=29b20da028738bd4c021b533918b876c/91529822720e0cf324cc3c860c46f21fbe09aa90.jpg" },
                { title: "茂名中国第一滩2日游", tag: "海边沙滩", days: "2天", city: "茂名", num: "279", src: "https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1505921477&di=5879131c7d78e6dcf57a1962e6358ea1&src=http://file21.mafengwo.net/M00/8F/F5/wKgB3FIMu2CAIiueAA1yWlpuWQo35.rbook_comment.w600_h400.jpeg" },
                { title: "咸阳茂陵2日游", tag: "名胜古迹", days: "2天", city: "咸阳", num: "802", src: "https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=704e7b8b054f78f0940692a118586130/e850352ac65c1038d8e02b1db4119313b17e8957.jpg" },
                { title: "石家庄海洋公园2日游", tag: "亲子游乐", days: "2天", city: "石家庄", num: "773", src: "http://img.mp.itc.cn/upload/20160711/e35f2b8e970442a8a05c781aa9b5d194_th.jpg" },
            ],
            defaultSrc:'static/image/placeholder.jpg',
        }
    },
    computed: {
    },
    created() {

    },
    mounted() {
    },
    methods: {
        onItemClick(){

        },
        onStartClick(){
            console.log('start')
            // this.showToast=true
            this.$vux.toast.text('私人定制', 'middle')
        },
        onSpotClick(){
            this.$vux.toast.text('定制行程页面制作中,敬请期待...', 'middle')
        }
    },
    components: {
        XButton,
        Tab, TabItem, Panel, Sticky,
        Swiper, SwiperItem,
        XImg,
        Toast
    }
}
</script>
