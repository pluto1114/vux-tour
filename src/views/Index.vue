<style lang="less" scoped>
.index {}

.space {
    width: 2.5em;
}



i {
    width: 2em;
    text-align: center;
}

.promise-info {
    background: #ffffdd;
    padding: 0.5em 2em;

    font-size: 0.9em;
    .title {
        font-size: 1.1em;
        color: #ff6666;
        width: 6em;
    }
}

.icon-flex {
    padding: 1em;
    .icon {
        font-size: 0.9em;
        text-align: center;
        img {
            width: 3em;
            filter: brightness(1.15);
        }
    }
}

.btns,
.desti,
.notes {
    margin-top: 1em;
}

.desti {

    .img-list {
        overflow-x: scroll;
        white-space: nowrap;
        .block {
            width: 8em;
            margin: 0.5em 1em;
            display: inline-block;
            img {
                // border: 4px solid #ddd;
                // border-radius: 0.9em;
                width: 8em;
                height: 5em;
            }
        }
    }
    .city-list {
        overflow-x: scroll;
        white-space: nowrap;
        padding-left: 1em;
        margin: 1.5em 0;
        .block {
            font-size: 0.9em;
            margin: 0 0.4em;
            padding: 0.4em 1.5em;
            display: inline-block;

            border: 1px solid gray;
            border-radius: 0.8em;
        }
    }
    .m-title {
        color: #fff;
        text-align: center;
        text-shadow: 0 0 2px rgba(0, 0, 0, .5);
        font-weight: 500;
        font-size: 16px;
        position: absolute;
        left: 0;
        right: 0;
        width: 100%;
        text-align: center;
        top: 50%;
        transform: translateY(-50%);
    }
}

.notes {}

.spot {
    .card-padding {
        padding: 15px;
    }
}

::-webkit-scrollbar {
    /*隐藏滚轮*/
    display: none;
}

.header-c {
    background-color: rgba(0, 0, 0, .4)!important;
}
</style>
<<style lang="less">
.vux-search-box{
    border-color:transparent!important;
}
.weui-search-bar {
    padding-top: 0!important;
    padding-bottom: 0!important;
    border-radius: 0.5em;
    border-color:transparent!important;
    line-height: 32px!important;
}

</style>

<template>
    <div class="index">
        <x-header style="width:100%;position:absolute;left:0;top:0;z-index:100;" :left-options="leftOptions" :right-options="rightOptions" :transition="headerTransition" class="header-c">
            <div style="padding-top:5px;">
                <search></search>
            </div>
            <a slot="left" style="color:white;" @click="showAddress=true">{{city[0]}} ></a>
        </x-header>
        <swiper :list="demo01_list" auto></swiper>

        <flexbox class="promise-info">

            <div class="title">我们的承诺</div>

            <flexbox-item>
                <div>优质产品</div>
            </flexbox-item>
            <flexbox-item>
                <div>放心价格</div>
            </flexbox-item>
            <flexbox-item>
                <div>退款保障</div>
            </flexbox-item>
            <div class="space"></div>
        </flexbox>

        <div class="btns">
            <flexbox class="icon-flex">
                <flexbox-item class="icon">
                    <div><img src="../assets/img/globe.png"></div>
                    花花世界
                </flexbox-item>
                <flexbox-item class="icon">
                    <div><img src="../assets/img/blimp.png"></div>
                    名胜古迹
                </flexbox-item>
                <flexbox-item class="icon">
                    <div><img src="../assets/img/cloud.png"></div>
                    游山玩水
                </flexbox-item>
                <flexbox-item class="icon">
                    <div><img src="../assets/img/sailboat.png"></div>
                    主题乐园
                </flexbox-item>
                <div class="space"></div>
            </flexbox>
        </div>
        <br>
        <div class="bar"></div>
        <div class="desti">
            <div>
                <i class="fa fa-star-o"></i>目的地推荐&nbsp;|&nbsp;
                <span class="sub-title">周边热门景区、城市</span>
            </div>
            <br>
            <div class="img-list">
                <div class="block" v-for="(d,index) of desti_imgs" :key="d.src" @click="show(index)">
                    <masker :opacity="0.2">
                        <img :src="d.src" class="ximg-demo">
                        <div slot="content" class="m-title">
                            {{d.title}}
                            <br> {{d.distance}}
                        </div>
                    </masker>
                </div>
            </div>
            <div class="city-list">
                <div class="block" v-for="city of desti_cities" :key="city">
                    {{city}}
                </div>
            </div>
        </div>
        <div class="bar"></div>
        <div class="notes">
            <div>
                <i class="fa fa-send-o"></i>攻略游记&nbsp;|&nbsp;
                <span class="sub-title">用心推荐</span>
            </div>
            <panel :list="notes" type="5"></panel>
        </div>
        <div class="bar"></div>
        <div style="height:44px;">
            <sticky scroll-box="vux_view_box_body" ref="sticky" :offset="46" :check-sticky-support="false">
                <tab :line-width="1" active-color="#66C0F0" v-model="tabIndex">
                    <tab-item selected @on-item-click="onItemClick">推 荐</tab-item>
                    <tab-item @on-item-click="onItemClick">景 点</tab-item>
                    <tab-item @on-item-click="onItemClick">度假酒店</tab-item>
                </tab>
            </sticky>
        </div>

        <swiper v-model="tabIndex" :show-dots="false" :aspect-ratio="3.5">
            <swiper-item v-for="(x, index) in spots" :key="index">
                <card class="spot" v-for="(x,i) of spots[index]" :key="i">
                    <img slot="header" :src="x.src" style="width:100%;display:block;">
                    <div slot="content" class="card-padding">
                        <p style="line-height:2em;">{{x.title}}</p>
                        <p style="font-size:0.9em;line-height:1.5em;">{{x.descp}}</p>
                        <p style="font-size:0.9em;color:#999;">票价：{{x.price}}</p>
                    </div>
                </card>
            </swiper-item>
        </swiper>
        <div v-transfer-dom>
            <previewer :list="desti_imgs" ref="previewer"></previewer>
        </div>
        <popup-picker :show.sync="showAddress" :show-cell="false" title="TEST" :data="cities" v-model="city"></popup-picker>
    </div>
</template>
<script>
import { XHeader, Search, PopupPicker, Swiper, SwiperItem, Group, GroupTitle, Cell, Masker, Flexbox, FlexboxItem, Tab, TabItem, Panel, Sticky, Card, XImg, Previewer, TransferDom, XButton, Divider } from 'vux'


export default {
    data() {
        return {

            showAddress: false,
            cities: [["北京", "上海", "深圳", "广州", "杭州", "苏州", "宁波", "呼和浩特"]],
            city: ['北京'],
            demo01_list: [{
                url: 'javascript:',
                img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505580737611&di=d101f773100f2c27036c8fcfcc390250&imgtype=0&src=http%3A%2F%2Ffile28.mafengwo.net%2FM00%2FA8%2FE5%2FwKgB6lQw-eGAc9BwAAIhi-kaQZ484.jpeg',
                title: '贵州'
            }, {
                url: 'javascript:',
                img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505580828830&di=955680dea92c4a190d603cf55b961a92&imgtype=0&src=http%3A%2F%2Ffile30.mafengwo.net%2FM00%2FE8%2F69%2FwKgBpVUPow2Aax1-AAnBgN3H1bk47.jpeg',
                title: '云南'
            }, {
                url: 'javascript:',
                img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505581044747&di=13b28c1f71f59347435f1f7c0da13921&imgtype=0&src=http%3A%2F%2Ffile28.mafengwo.net%2FM00%2F0D%2F65%2FwKgB6lT6086Ad5ESAA5s40sPyCo81.jpeg',
                title: '新西兰',
            }],
            desti_imgs: [
                { src: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505582214911&di=fbae755cd76976383458b7b178d8d81c&imgtype=0&src=http%3A%2F%2Ffile27.mafengwo.net%2FM00%2FA9%2F40%2FwKgB6lQw-jGAVG1jAAImVT-EdKo40.jpeg", title: "山水村庄", distance: "404km" },
                { src: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505582290979&di=50a9f5a4ea63094680d46a3c92143bc0&imgtype=0&src=http%3A%2F%2Fpic31.nipic.com%2F20130723%2F12803017_165359253198_2.jpg", title: "天心阁", distance: "556km" },
                { src: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505582330308&di=9fa12aad0c8493952ab5d350cd72d508&imgtype=0&src=http%3A%2F%2Ffile28.mafengwo.net%2FM00%2F39%2FA5%2FwKgB6lOvjeKAS_--AALA2S8y9SA29.jpeg", title: "太仓小镇", distance: "660km" },
                { src: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505584494102&di=102a53f121d390960e940f6bed445e7f&imgtype=0&src=http%3A%2F%2Ffile27.mafengwo.net%2FM00%2F32%2FD4%2FwKgB6lPKD4mAdC9aAAri2xeo5nA02.jpeg", title: "云南", distance: "1004km" },

            ],
            desti_cities: [
                "石家庄", "秦皇岛", "承德", "廊坊", "更多城市"
            ],
            notes: [{
                src: 'http://t12.baidu.com/it/u=3810595946,1108963870&fm=173&s=8104D71594B9722C7290D5E3030060B1&w=640&h=391&img.JPG',
                fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
                title: '粉红沙滩',
                desc: '珀斯幅员辽阔是澳大利亚占地面积最大的城市，我对那里长草源于珀斯洛特尼斯岛上的短尾矮袋鼠（Quokka），它有胖嘟嘟的小脸蛋和随时随地看起来都在微笑的面容，深深被它萌萌哒颜值所吸引，而且他们也不害怕人类接近哦，看到我们人类，贪吃的它们会从树丛里面跳出来，想问人类要好吃的，如果一起自拍的话还会看镜头呢，所以尽管它们远在珀斯的洛特尼斯小岛上，尽管我晕船也想去和它们近距离接触一下，于是约上小伙伴，开始了我们8天的探索发现珀斯之旅。',
                url: '/component/cell',
                meta: {
                    source: 'candy',
                    date: '2017-06-12',
                    other: '人均：14627 元'
                }
            }, {
                src: 'https://dimg02.c-ctrip.com/images/100e0j000000a99yz6A17_R_1024_10000_Q90.jpg',
                title: '贝加尔湖',
                desc: '半年前就与在内蒙古的红阳兄约好，夏日一同从满洲里自驾到贝加尔湖，看看没有雪的西伯利亚、没有蓝冰的贝加尔湖又是怎样的一个世界，有了靠谱的司机红阳带队，我完全没有做任何行程攻略，随着出行时间的一步步靠近，各种期待和好奇感来袭，为没去过俄罗斯感到期待，为战斗民族而感到小小的好奇，仔细想想最近关于这个国家的消息，是俄罗斯的航空公司，是普京，是世界杯，而我对于西伯利亚的了解算是非常浅薄，我不知道那边的城市是否繁忙，那里的小镇是否安详，那里的人们是否热情，就连自己这次出行的心情我都不是很了解。。',
                url: {
                    path: '/component/radio',
                    replace: false
                },
                meta: {
                    source: '摄影师王鹤',
                    date: '2017-08-14',
                    other: '人均：12800 元'
                }
            }],
            spots: [
                [
                    { src: "http://bj.happyvalley.cn/UploadFiles/images/Preferential/W170828324474123.jpg", title: "北京欢乐谷", descp: "北京欢乐谷是华侨城集团倾心打造的新一代文化主题公园,以文化景观、艺术表演和游乐体验为核心,集海陆空三栖游乐于一体,是家庭的首选地,孩子们的开心课堂", price: "￥99" },
                    { src: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505671134890&di=d2123ef0db7dddbf310bea7e999e4355&imgtype=0&src=http%3A%2F%2Fwww.mangocity.com%2Fvacations%2Fvimg%2Ftrip%2Fbig_70023_1322548533731.jpg", title: "故宫", descp: "故宫博物院，是一座特殊的博物馆。成立于1925年的故宫博物院，建立在明清两朝皇宫——紫禁城的基础上。历经五百年兴衰荣辱，帝王宫殿的大门终于向公众敞开。故宫博物院绝无仅有的独特藏品，是世界上规模最大、保存最完整的紫禁城木结构宫殿建筑群。", price: "￥10" },
                    { src: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505671428141&di=d43a7ff30465b078237171187da935db&imgtype=0&src=http%3A%2F%2Ftc.sinaimg.cn%2Fmaxwidth.2048%2Ftc.service.weibo.com%2Fp%2Fgz_feixin_10086_cn%2F3851ea9529b1732da31eed5b7cdf6e03.jpg", title: "中央电视塔", descp: "空中旋转餐厅很浪漫，很是壮观的。看北京夜景和全景的最佳去处，不过人有点多，门票也不便宜。景点服务人员服务非常好，适合天气晴朗的日子去。", price: "￥85" },
                ],
                [
                    { src: "https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1505747895&di=cdfe1eee2a52e4d4db0097a617bdfb33&src=http://5b0988e595225.cdn.sohucs.com/images/20170911/4e8aab1bd3d2424e830646528552fff1.jpeg", title: "古崖居", descp: "古崖居风景区是北京地区已发现的规模最大的古代洞窟聚落遗址", price: "￥25" },
                    { src: "https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268/sign=0fcfc311f81986184147e88272ec2e69/63d0f703918fa0ecb42e227d269759ee3c6ddbd1.jpg", title: "北京十渡东湖港风景区", descp: "北京十渡东湖港风景区，位于北京房山世界地质公园十渡园区十五渡，与野三坡毗邻，距北京市区106公里，景区内最夺人眼目的是翠绿的檀林和遍布整个峡谷的千年古藤。", price: "￥50" },
                    { src: "https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=c44d5edc70c6a7efad2ba0749c93c434/aa64034f78f0f7368c9fb7020c55b319ebc4134b.jpg", title: "辉煌国际会议度假区", descp: "辉煌国际高尔夫球场地处北京西北部延庆县张山营镇，用地南侧紧邻110国道旧线，原始自然植被，景观资源优势明显，交通便利，距北京70公里，车程约1小时。", price: "￥85" },
                ],
                [
                    { src: "http://bj.happyvalley.cn/UploadFiles/images/Preferential/W170828324474123.jpg", title: "北京欢乐谷", descp: "北京欢乐谷是华侨城集团倾心打造的新一代文化主题公园,以文化景观、艺术表演和游乐体验为核心,集海陆空三栖游乐于一体,是家庭的首选地,孩子们的开心课堂", price: "￥99" },
                    { src: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505671134890&di=d2123ef0db7dddbf310bea7e999e4355&imgtype=0&src=http%3A%2F%2Fwww.mangocity.com%2Fvacations%2Fvimg%2Ftrip%2Fbig_70023_1322548533731.jpg", title: "故宫", descp: "故宫博物院，是一座特殊的博物馆。成立于1925年的故宫博物院，建立在明清两朝皇宫——紫禁城的基础上。历经五百年兴衰荣辱，帝王宫殿的大门终于向公众敞开。故宫博物院绝无仅有的独特藏品，是世界上规模最大、保存最完整的紫禁城木结构宫殿建筑群。", price: "￥10" },
                    { src: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505671428141&di=d43a7ff30465b078237171187da935db&imgtype=0&src=http%3A%2F%2Ftc.sinaimg.cn%2Fmaxwidth.2048%2Ftc.service.weibo.com%2Fp%2Fgz_feixin_10086_cn%2F3851ea9529b1732da31eed5b7cdf6e03.jpg", title: "中央电视塔", descp: "空中旋转餐厅很浪漫，很是壮观的。看北京夜景和全景的最佳去处，不过人有点多，门票也不便宜。景点服务人员服务非常好，适合天气晴朗的日子去。", price: "￥85" },
                ]
            ],
            tabIndex: 0,
        }
    },
    computed: {
        leftOptions() {
            return {
                showBack: false
            }
        },
        rightOptions() {
            return {
                showMore: false
            }
        },
        headerTransition() {
            return this.direction === 'forward' ? 'vux-header-fade-in-right' : 'vux-header-fade-in-left'
        },
    },
    created() {

    },
    mounted() {
        console.log(this.showAddress)
    },
    methods: {
        onItemClick(index) {

        },
        show(index) {
            console.log(index)
            this.$refs.previewer.show(index)
        }
    },
    components: {
        XHeader, Search, PopupPicker,
        Swiper, SwiperItem,
        Group, GroupTitle,
        Cell,
        Masker,
        Flexbox, FlexboxItem,
        Tab, TabItem,
        Panel,
        Sticky,
        Card,
        XImg,
        Previewer, TransferDom
    },
    directives: {
        TransferDom
    },
}
</script>
