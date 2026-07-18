<template>
  <view class="template-index tn-safe-area-inset-bottom">
    <!-- 顶部自定义导航 -->
    <tn-nav-bar fixed alpha :isBack="false" :bottomShadow="false">
      <view class="custom-nav tn-flex tn-flex-col-center tn-flex-row-left">
        <!-- 图标logo -->
        <view class="custom-nav__back" @click="tn('/homePages/about')">
          <view class="logo-pic tn-shadow-blur" style="background-image:url('https://resource.tuniaokj.com/images/logo/logo2.png')">
            <view class="logo-image">
            </view>
          </view>
        </view>
        <!-- 搜索框 -->
        <view class="custom-nav__search tn-flex tn-flex-col-center tn-flex-row-center" @click="tn('/homePages/search')">
          <view class="custom-nav__search__box tn-flex tn-flex-col-center tn-flex-row-left" style="background-color: rgba(230,230,230,0.3);">
            <view class="custom-nav__search__icon tn-icon-search tn-color-white"></view>
            <view class="custom-nav__search__text tn-padding-left-xs tn-color-white">搜索 图鸟模板</view>
          </view>
        </view>
      </view>
    </tn-nav-bar>
    
    <tn-swiper
      class="card-swiper"
      :list="swiperList"
      name="url"
      :height="540"
      :autoplay="true"
      :interval="8000"
      :duration="500"
      :circular="true"
      mode="dot"
      indicatorPosition="bottomCenter"
      imageMode="aspectFill"
      @click="tn('/homePages/sliderCaptcha')"
      @change="cardSwiper"
    ></tn-swiper>
    
    
    <!-- 方式12 start-->
    <fui-horizontal-scroll :marginTop="16" :marginBottom="16" :scroll="true">
      <view 
        v-for="item in navList" 
        :key="item.id"
        class="nav-item tn-padding-sm tn-margin-xs tn-radius" 
        @click="tn(item.url)"
      >
        <view class="tn-flex tn-flex-direction-column tn-flex-row-center tn-flex-col-center">
          <view class="icon12__item--icon tn-flex tn-flex-row-center tn-flex-col-center tn-shadow-blur" :class="[item.gradient, item.color]">
            <view :class="[item.icon, 'tn-three']"></view>
          </view>  
          <view class="tn-color-black tn-text-center">
            <text class="tn-text-ellipsis">{{ item.title }}</text>
          </view>
        </view>
      </view>
    </fui-horizontal-scroll>
    <!-- 方式12 end-->
    
    <!-- banner start-->
    <view class="tn-flex tn-flex-wrap tn-padding-xs" @click="">
      <view class="" style="width: 100%;">
        <view class="image-piccapsule tn-shadow-blur" style="background-image:url('https://resource.tuniaokj.com/images/capsule-banner/banner-tnmb.png');">
           <view class="image-capsule">
           </view>
         </view>  
      </view>  
    </view>
    <!-- banner end-->
    
    
<!--    <view class="tn-margin-top">
      <view class="nav_title--wrap">
        <view class="nav_title tn-cool-bg-color-5">
          <text class="tn-icon-copy tn-padding-right-sm"></text>
          推 / 荐 / 博 / 主
          <text class="tn-icon-copy tn-padding-left-sm"></text>
        </view>
      </view>
    </view> -->
    
    <section-title
      class="tn-margin-top"
      title="推荐名片"
      @click="tn('/circlePages/business')"
    ></section-title>
    
    <resume-card
      class="tn-margin-top-sm"
      :list="resumeList"
      :current="cardCur2"
      @change="resume"
      @click="tn('/circlePages/king')"
    ></resume-card>
<!--    <view class="indication">
        <block v-for="(item,index) in resumeList" :key="index">
            <view class="spot" :class="cardCur==index?'active':''"></view>
        </block>
    </view> -->
    
    
    <view class="">
      <section-title
        title="热门项目"
        @click="tn('/activityPages/project')"
      ></section-title>
      
      <image-wall
        class="tn-margin-left tn-margin-right tn-margin-top-sm"
        :leftImage="imageWallData.left.image"
        :rightTopImage="imageWallData.rightTop.image"
        :rightBottomImage="imageWallData.rightBottom.image"
        @click="onImageWallClick"
      ></image-wall>
      
      
      <section-title
        class="tn-margin-top"
        title="业务范围"
      ></section-title>
      
      <business-grid :list="tuniaoData" @click="onBusinessGridClick"></business-grid>
      
    </view>

    <view class='tn-tabbar-height'></view>
    
  </view>
</template>

<script>
  export default {
    name: 'Index',
    data(){
      return {
        cardCur: 0,
        isAndroid: true,
        navList: [
          { id: 1, title: '热点资讯', url: '/homePages/hot', icon: 'tn-icon-fire-fill', gradient: 'tn-main-gradient-purplered--light', color: 'tn-color-purplered' },
          { id: 2, title: '商品分类', url: '/preferredPages/classify', icon: 'tn-icon-flower-fill', gradient: 'tn-main-gradient-indigo--light', color: 'tn-color-indigo' },
          { id: 3, title: '智能名片', url: '/circlePages/business', icon: 'tn-icon-identity-fill', gradient: 'tn-main-gradient-purple--light', color: 'tn-color-purple' },
          { id: 4, title: '星选门户', url: '/preferredPages/website', icon: 'tn-icon-star-fill', gradient: 'tn-main-gradient-orange--light', color: 'tn-color-orange' },
          { id: 5, title: '二维码', url: '/homePages/qrcode', icon: 'tn-icon-scan-fill', gradient: 'tn-main-gradient-blue--light', color: 'tn-color-blue' },
          { id: 6, title: '拖拽测试', url: '/homePages/drag', icon: 'tn-icon-move-horizontal', gradient: 'tn-main-gradient-teal--light', color: 'tn-color-teal' },
        ],
        swiperList: [{
          id: 0,
          type: 'image',
          title: '',
          name: '',
          text: '',
          url: 'https://resource.tuniaokj.com/images/new/banner1.jpg',
        }, {
          id: 1,
          type: 'image',
          title: '合作勾搭',
          name: '作者微信 tnkewo',
          text: '',
          url: 'https://resource.tuniaokj.com/images/swiper/adno3.jpg',
        }, {
          id: 2,
          type: 'image',
          title: '海量分享',
          name: '总有你想不到的创意',
          text: '',
          url: 'https://resource.tuniaokj.com/images/swiper/adno2.jpg',
        }, {
          id: 3,
          type: 'image',
          title: '酷炫多彩',
          name: '更多彩蛋等你探索',
          text: '',
          url: 'https://resource.tuniaokj.com/images/swiper/adno4.jpg',
        }, {
          id: 4,
          type: 'image',
          title: '适配多端',
          name: 'APP、微信小程序、H5、Finclip',
          text: '',
          url: 'https://resource.tuniaokj.com/images/swiper/adno5.jpg',
        },{
          id: 5,
          type: 'image',
          title: '',
          name: '',
          text: '',
          url: 'https://resource.tuniaokj.com/images/swiper/ad1.jpg',
        }],
        cardCur2: 0,
        resumeList: [{
          id: 0,
          type: 'image',
          title: '徐圆圆',
          name: 'UI设计师',
          hot: '1.29W',
          share: '216',
          love: '962',
          avatar: 'https://resource.tuniaokj.com/images/blogger/blogger_beibei.jpg',
          url: 'https://resource.tuniaokj.com/images/resume/resume-bg.jpg',
        }, {
          id: 1,
          type: 'image',
          title: '图鸟北北',
          name: 'UI设计师',
          hot: '964',
          share: '94',
          love: '186',
          avatar: 'https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg',
          url: 'https://resource.tuniaokj.com/images/resume/resume-bg2.jpg',
        }, {
          id: 2,
          type: 'image',
          title: '图鸟西西',
          name: '高级前端',
          hot: '3.26K',
          share: '146',
          love: '379',
          avatar: 'https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg',
          url: 'https://resource.tuniaokj.com/images/resume/resume-bg.jpg',
        }, {
          id: 3,
          type: 'image',
          title: '图鸟南南',
          name: '项目经理',
          hot: '6.32K',
          share: '133',
          love: '432',
          avatar: 'https://resource.tuniaokj.com/images/blogger/avatar_3.jpeg',
          url: 'https://resource.tuniaokj.com/images/resume/resume-bg2.jpg',
        }, {
          id: 4,
          type: 'image',
          title: '图鸟猪猪',
          name: '纯打杂',
          hot: '8.65K',
          share: '321',
          love: '886',
          avatar: 'https://resource.tuniaokj.com/images/blogger/avatar_4.jpeg',
          url: 'https://resource.tuniaokj.com/images/resume/resume-bg.jpg',
        }],

        // 图片墙数据
        imageWallData: {
          left: {
            image: 'https://resource.tuniaokj.com/images/content/rodion.jpg',
            url: '/circlePages/news'
          },
          rightTop: {
            image: 'https://resource.tuniaokj.com/images/shop/phonecase1.jpg',
            url: '/circlePages/news'
          },
          rightBottom: {
            image: 'https://resource.tuniaokj.com/images/shop/banner1.jpg',
            url: '/circlePages/news'
          }
        },

        tuniaoData: [
          {
            title: 'UI设计',
            icon: 'image-text-fill',
            color: '#F33F5A',
            value: '前往咨询'
          },
          {
            title: '小程序',
            icon: 'data-fill',
            color: '#FFC32E',
            value: '前往咨询'
          },
          {
            title: '前端开发',
            icon: 'statistics-fill',
            color: '#954FF6',
            value: '前往咨询'
          },
          {
            title: '其他业务',
            icon: 'bankcard-fill',
            color: '#5177EE',
            value: '前往咨询'
          }
        ],
      }
    },
    created() {
      const systemInfo = uni.getSystemInfoSync()
      if (systemInfo.system.toLocaleLowerCase().includes('ios')) {
        this.isAndroid = false
      } else {
        this.isAndroid = true
      }
    },
    methods: {
      // cardSwiper
      cardSwiper(index) {
        this.cardCur = index
      },
      // resume
      resume(e) {
        this.cardCur2 = e.detail.current
      },
      // 跳转
      tn(e) {
      	uni.navigateTo({
      		url: e,
      	});
      },
      // 图片墙点击
      onImageWallClick(type) {
        console.log(type)
        const item = this.imageWallData[type]
        if (item && item.url) {
          this.tn(item.url)
        }
      },
      onBusinessGridClick(item) {
        this.tn('/homePages/profession')
      },
    }
  }
</script>

<style lang="scss" scoped>
  .template-index{
    max-height: 100vh;
  }
  .tn-tabbar-height {
  	min-height: 100rpx;
  	height: calc(120rpx + env(safe-area-inset-bottom) / 2);
  }
  

  /* 轮播视觉差 start */
  .card-swiper {
    height: 540rpx !important;
  }
    
  .card-swiper swiper-item {
    width: 750rpx !important;
    left: 0rpx;
    box-sizing: border-box;
    // padding: 0rpx 30rpx 90rpx 30rpx;
    overflow: initial;
  }
    
  .card-swiper swiper-item .swiper-item {
    width: 100%;
    display: block;
    height: 100%;
    transform: scale(1);
    transition: all 0.2s ease-in 0s;
    will-change: transform;
    overflow: hidden;
  }
    
  .card-swiper swiper-item.cur .swiper-item {
    transform: none;
    transition: all 0.2s ease-in 0s;
    will-change: transform;
  }
    
  .card-swiper swiper-item .swiper-item-text {
    margin-top: -320rpx;
    text-align: center;
    width: 100%;
    display: block;
    height: 50%;
    border-radius: 10rpx;
    transform: translate(100rpx, 0rpx) scale(0.9, 0.9);
    transition: all 0.6s ease 0s;
    will-change: transform;
    overflow: hidden;
  }
    
  .card-swiper swiper-item.cur .swiper-item-text {
    margin-top: -320rpx;
    width: 100%;
    transform: translate(0rpx, 0rpx) scale(0.9, 0.9);
    transition: all 0.6s ease 0s;
    will-change: transform;
  }
  
  .image-banner{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .image-banner image{
    width: 100%;
    height: 100%;
  }
  
  
  
  /* 底部tabbar假阴影 start*/
  .bg-tabbar-shadow{
    background-image: repeating-linear-gradient(to top, rgba(0,0,0,0.1) 10rpx, #FFFFFF , #FFFFFF);
    position: fixed;
    bottom: 0;
    height: 450rpx;
    width: 100vw;
    z-index: -1;
  }
  
 /* 图标容器12 start */
 .tn-three{
     position: absolute;
     top: 50%;
     right: 50%;
     bottom: 50%;
     left: 50%;
     transform: translate(-38rpx, -20rpx) rotateX(20deg) rotateY(10deg) rotateZ(-20deg);
     text-shadow: -1rpx 2rpx 0 #f0f0f0, -2rpx 4rpx 0 #f0f0f0, -10rpx 20rpx 30rpx rgba(0, 0, 0, 0.2);
 }
 .nav-item {
     flex: 1;
     min-width: 160rpx;
     max-width: 200rpx;
     background-color: #FFFFFF;
     flex-shrink: 0;
 }
 .icon12 {
   &__item {
     width: 30%;
     background-color: #FFFFFF;
     border-radius: 10rpx;
     padding: 30rpx;
     margin: 20rpx 10rpx;
     transform: scale(1);
     transition: transform 0.3s linear;
     transform-origin: center center;
     
     &--icon {
       width: 100rpx;
       height: 100rpx;
       font-size: 60rpx;
       border-radius: 50%;
       margin-bottom: 18rpx;
       position: relative;
       z-index: 1;
       
       &::after {
         content: " ";
         position: absolute;
         z-index: -1;
         width: 100%;
         height: 100%;
         left: 0;
         bottom: 0;
         border-radius: inherit;
         opacity: 1;
         transform: scale(1, 1);
         background-size: 100% 100%;
         background-image: url(https://resource.tuniaokj.com/images/cool_bg_image/icon_bg6.png);
 
           
       }
     }
   }
 }
  
  /* 自定义导航栏内容 start */
  .custom-nav {
    height: 100%;
    
    &__back {
      margin: auto 5rpx;
      font-size: 40rpx;
      margin-right: 10rpx;
      margin-left: 30rpx;
      flex-basis: 5%;
    }
    
    &__search {
      flex-basis: 60%;
      width: 100%;
      height: 100%;
      
      &__box {
        width: 100%;
        height: 70%;
        max-height: 66rpx;
        padding: 10rpx 0;
        margin: 0 30rpx;
        border-radius: 60rpx 60rpx 0 60rpx;
        font-size: 24rpx;
      }
      
      &__icon {
        padding-right: 10rpx;
        margin-left: 20rpx;
        font-size: 30rpx;
      }
      
      &__text {
        // color: #AAAAAA;
      }
    }
  }
  .logo-image{
    width: 65rpx;
    height: 65rpx;
    position: relative;
  }
  .logo-pic{
    background-size: cover;
    background-repeat:no-repeat;
    // background-attachment:fixed;
    background-position:top;
    border-radius: 50%;
  }
  /* 自定义导航栏内容 end */
  

  /* 胶囊banner*/
  .image-capsule{
    padding: 100rpx 0rpx;
    font-size: 40rpx;
    font-weight: 300;
    position: relative;
  }
  .image-piccapsule{
    background-size: cover;
    background-repeat:no-repeat;
    // background-attachment:fixed;
    background-position:top;
    border-radius: 20rpx 20rpx 0 0;
  }
  
  /* 标题 start */
  .nav_title {
    -webkit-background-clip: text;
    color: transparent;
    
    &--wrap {
      position: relative;
      display: flex;
      height: 120rpx;
      font-size: 46rpx;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      background-image: url(https://resource.tuniaokj.com/images/title_bg/title00.png);
      background-size: cover;
    }
  }
  /* 标题 end */
  
  /* 业务展示 start */
  .tn-info {
    
    &__container {
      margin-top: 10rpx;
      margin-bottom: 50rpx;
    }
    
    &__item {
      width: 47.7%;
      margin: 15rpx 0rpx 30rpx 0rpx;
      padding: 40rpx 30rpx;
      border-radius: 10rpx;
      
  
        position: relative;
        z-index: 1;
        
        &::after {
          content: " ";
          position: absolute;
          z-index: -1;
          width: 100%;
          height: 100%;
          left: 0;
          bottom: 0;
          border-radius: inherit;
          opacity: 1;
          transform: scale(1, 1);
          background-size: 100% 100%;
          background-image: url(https://resource.tuniaokj.com/images/cool_bg_image/2.png);
        }
      
      &__left {
        
        &--icon {
          width: 80rpx;
          height: 80rpx;
          border-radius: 50%;
          font-size: 40rpx;
          margin-right: 20rpx;
          position: relative;
          z-index: 1;
          
          &::after {
            content: " ";
            position: absolute;
            z-index: -1;
            width: 100%;
            height: 100%;
            left: 0;
            bottom: 0;
            border-radius: inherit;
            opacity: 1;
            transform: scale(1, 1);
            background-size: 100% 100%;
            background-image: url(https://resource.tuniaokj.com/images/cool_bg_image/icon_bg5.png);
          }
        }
        
        &__content {
          font-size: 25rpx;          
          
          &--data {
            color: rgba(255,255,255,0.5);
            margin-top: 5rpx;
            // font-weight: bold;
          }
        }
      }
      
      &__right {
        &--icon {
          position: absolute;
          right: 0rpx;
          top: 50rpx;
          font-size: 100rpx;
          width: 108rpx;
          height: 108rpx;
          text-align: center;
          line-height: 60rpx;
          opacity: 0.15;  
        }
      }
      &__bottom {
        box-shadow: 0rpx 0rpx 30rpx 0rpx rgba(0, 0, 0, 0.12);
        border-radius: 0 0 10rpx 10rpx;
        position: absolute;
        width: 85%;
        line-height: 15rpx;
        left: 50%;
        bottom: -15rpx;
        transform: translateX(-50%);
        z-index: -1;
        text-align: center;
      }
    }
  }
  /* 业务展示 end */
  
  /* 底部tabbar start*/
  .footerfixed{
   position: fixed;
   width: 100%;
   bottom: 0;
   z-index: 999;
   background-color: #FFFFFF;
   box-shadow: 0rpx 0rpx 30rpx 0rpx rgba(0, 0, 0, 0.07);
  }
  
  .tabbar {
    display: flex;
    align-items: center;
    min-height: 110rpx;
    justify-content: space-between;
  	padding: 0;
  	height: calc(110rpx + env(safe-area-inset-bottom) / 2);
  	padding-bottom: calc(env(safe-area-inset-bottom) / 2);
  }
  
  .tabbar .action {
  	font-size: 22rpx;
  	position: relative;
  	flex: 1;
  	text-align: center;
  	padding: 0;
  	display: block;
  	height: auto;
  	line-height: 1;
  	margin: 0;
  	overflow: initial;
  }
  
  .bar-center{
    animation: suspension 3s ease-in-out infinite;
  }
  
  @keyframes suspension {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-0.8rem);
    }
  }  
  
  .tabbar .action .bar-icon {
  	width: 100rpx;
  	position: relative;
  	display: block;
  	height: auto;
  	margin: 0 auto 10rpx;
  	text-align: center;
  	font-size: 42rpx;
    // line-height: 50rpx;
  }
  
  .tabbar .action .bar-icon image {
  	width: 50rpx;
  	height: 50rpx;
  	display: inline-block;
  }
  
  .tabbar .action .bar-circle {
    position: relative;
    display: block;
    margin: 0rpx auto 0rpx;
    text-align: center;
    font-size: 52rpx;
    line-height: 90rpx;
    // background-color: #01BEFF;
    width: 100rpx !important;
    height: 100rpx !important;
    overflow: hidden;
    // border-radius: 50%;
    // box-shadow: 0px 10px 30px rgba(70,23,129, 0.12),
    //   0px -8px 40px rgba(255, 255, 255, 1),
    //   inset 0px -10px 10px rgba(70,23,129, 0.05),
    //   inset 0px 10px 20px rgba(255, 255, 255, 1);
    // box-shadow: 0rpx 0rpx 20rpx 0rpx rgba(1, 190, 255, 0.5);
  }
  
  .tabbar .action .bar-circle image {
    width: 100rpx;
  	height: 100rpx;
  	display: inline-block;
    margin: 0rpx auto 0rpx;
  }
  
  /* 流星+悬浮 */
  .nav-index-button {
    animation: suspension 3s ease-in-out infinite;
    z-index: 999999;
    
    
    &__content {
      position: absolute;
      width: 100rpx;
      height: 100rpx;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      
      &--icon {
        width: 100rpx;
        height: 100rpx;
        font-size: 60rpx;
        border-radius: 50%;
        margin-bottom: 18rpx;
        position: relative;
        z-index: 1;
        transform: scale(0.85);
        
        &::after {
          content: " ";
          position: absolute;
          z-index: -1;
          width: 100%;
          height: 100%;
          left: 0;
          bottom: 0;
          border-radius: inherit;
          opacity: 1;
          transform: scale(1, 1);
          background-size: 100% 100%;
          // background-image: url(https://resource.tuniaokj.com/images/cool_bg_image/icon_bg6.png);
        }
      }
    }
    
    &__meteor {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100rpx;
      height: 100rpx;
      transform-style: preserve-3d;
      transform: translate(-50%, -50%) rotateY(75deg) rotateZ(10deg);
      
      &__wrapper {
        width: 100rpx;
        height: 100rpx;
        transform-style: preserve-3d;
        animation: spin 20s linear infinite;
      }
      
      &__item {
        position: absolute;
        width: 100rpx;
        height: 100rpx;
        border-radius: 1000rpx;
        left: 0;
        top: 0;
        
        &--pic {
          display: block;
          width: 100%;
          height: 100%;
          background: url(https://resource.tuniaokj.com/images/cool_bg_image/arc1.png) no-repeat center center;
          background-size: 100% 100%;
          animation: arc 4s linear infinite;
        }
      }
    }
  }
  
  
  @keyframes suspension {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-0.6rem);
    }
  }
  
  @keyframes spin {
    0% {
      transform: rotateX(0deg);
    }
  
    100% {
      transform: rotateX(-360deg);
    }
  }
  
  @keyframes arc {
    to {
      transform: rotate(360deg);
    }
  }
  
</style>