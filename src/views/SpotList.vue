<style lang="less" scoped>
@import '../styles/flex.css';
.spot {
    .card-padding {
        padding: 10px;
    }
   
}
.tool-bar{
    margin:1em 0.4em;
    .btn{
        flex:1;
        text-align: center;
        &.active{
            color:#66C0FF;
        }
    }
    .line{
        color:#666;
    }
}
</style>
<template>
    <div class="">
        <x-header class="header" :left-options="{backText: ''}">花花世界</x-header>
        <div class="content">
            <div class="tool-bar ub">
                <div class="btn" :class="{active:btnIndex==1}" @click="onBtnClick(1)">热度</div>
                <div class="line">|</div>
                <div class="btn" :class="{active:btnIndex==2}" @click="onBtnClick(2)">价格</div>
                <div class="line">|</div>
                <div class="btn" :class="{active:btnIndex==3}" @click="onBtnClick(3)">类型</div>
            </div>
            <card class="spot" v-for="(x,i) of spots" :key="i">
                <img slot="header" :src="x.src" style="width:100%;display:block;" @click="onCardClick">
                <div slot="content" class="card-padding" @click="onCardClick">
                    <p style="line-height:2em;">{{x.title}}</p>
                    <p style="font-size:0.9em;line-height:1.5em;">{{x.descp}}</p>
                    <p style="font-size:0.9em;color:#999;">票价：{{x.price}}</p>
                </div>
            </card>

        </div>
    </div>
</template>
<script>
import { XHeader,Card } from 'vux'
export default {
    data() {
        return {
            btnIndex:1,
            spots: [

                { src: "http://bj.happyvalley.cn/UploadFiles/images/Preferential/W170828324474123.jpg", title: "北京欢乐谷", descp: "北京欢乐谷是华侨城集团倾心打造的新一代文化主题公园,以文化景观、艺术表演和游乐体验为核心,集海陆空三栖游乐于一体,是家庭的首选地,孩子们的开心课堂", price: "￥99" },
                { src: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505671134890&di=d2123ef0db7dddbf310bea7e999e4355&imgtype=0&src=http%3A%2F%2Fwww.mangocity.com%2Fvacations%2Fvimg%2Ftrip%2Fbig_70023_1322548533731.jpg", title: "故宫", descp: "故宫博物院，是一座特殊的博物馆。成立于1925年的故宫博物院，建立在明清两朝皇宫——紫禁城的基础上。历经五百年兴衰荣辱，帝王宫殿的大门终于向公众敞开。故宫博物院绝无仅有的独特藏品，是世界上规模最大、保存最完整的紫禁城木结构宫殿建筑群。", price: "￥10" },
                { src: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505671428141&di=d43a7ff30465b078237171187da935db&imgtype=0&src=http%3A%2F%2Ftc.sinaimg.cn%2Fmaxwidth.2048%2Ftc.service.weibo.com%2Fp%2Fgz_feixin_10086_cn%2F3851ea9529b1732da31eed5b7cdf6e03.jpg", title: "中央电视塔", descp: "空中旋转餐厅很浪漫，很是壮观的。看北京夜景和全景的最佳去处，不过人有点多，门票也不便宜。景点服务人员服务非常好，适合天气晴朗的日子去。", price: "￥85" },

            ],
        }
    },
    computed: {
    },
    created() {

    },
    mounted() {
    },
    methods: {
        onBtnClick(index){
            this.btnIndex=index
        },
        onCardClick(){
            this.$router.push({name:'SpotDetail'})
        },
    },
    components: {
        XHeader,Card
    }
}
</script>
