<template>
  <div class="hello">
      <div class="hello_header">
          <dl>
            <dt><img src="static/img/dd.jpg" alt=""></dt>
            <dd>
              <p>name:刘凯星</p>
              <p>email：17600037756@163.com</p>
              <p>tel：17600037756</p>
            </dd>
          </dl>
         
      </div>
      <audio autoplay="autoplay" 
        controls="controls"
        preload="auto"
        src="static/mp3/MKJ - Time.mp3" class="mp3">
      </audio>
      <div class="head">
        <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <router-link to="/"><el-menu-item index="1">首页</el-menu-item></router-link>
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <router-link to="/liuyan"><el-menu-item index="2-1">留言板</el-menu-item></router-link>
          <router-link to="/fenlei"><el-menu-item index="2-2">分类菜单</el-menu-item></router-link>
          <router-link to="/mesg"><el-menu-item index="2-3">文章列表</el-menu-item></router-link>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">分类列表</template>
          <router-link to="/list_one">
            <el-menu-item index="3-1">一级分类</el-menu-item>
          </router-link>
          <router-link to="/list_two">
            <el-menu-item index="3-2">二级分类</el-menu-item>
          </router-link>
          <router-link to="/list">
            <el-menu-item index="3-3">分类列表</el-menu-item>
          </router-link>
        </el-submenu>
        
      </el-menu>
      </div>
      <div class="view">
        
        <router-view></router-view>
      </div>
      <!-- <div class="right">
          <div class="search">
             <el-autocomplete
                v-model="state4"
                :fetch-suggestions="querySearchAsync"
                placeholder="请输入内容"
                @select="handleSelect"
            ></el-autocomplete>
          </div>
            <div v-for='item in headerset' class="menu">
            <el-collapse v-model="activeNames"   @change='settwo(item.id)' accordion>
            <el-collapse-item :title="item.cnname" :name="item.id">
                <div v-for="key in twooption" @click='content(item.id)'>
                    {{key.cnname}}
                </div>
            </el-collapse-item>
            </el-collapse>
          </div>
           <div class="date">
            <div class="date" default-value='Data' align='center'>
                <el-date-picker
                v-model="value1"
                type="date"
                placeholder="选择日期"
                :picker-options="pickerOptions0">
                </el-date-picker>
            </div>
          </div> -->
          <div class="right">
            <send></send>
          </div>
          <div class="img">
            <img src="static/img/timg.jpg" alt="">
          </div>
          <div class="mymsg">
            <h3 style="color:#fff">前端开发教程</h3>
            <ul>
              <li><a href="http://www.nodeclass.com/api/ECMAScript6.html" target="view_window">点击进入es6</a></li>
              <li><a href="https://cn.vuejs.org/" target="view_window">点击进入vue</a></li>
              <li><a href="http://element.eleme.io/#/zh-CN" target="view_window">点击进入element-ui</a></li>
              <li><a href="https://www.npmjs.com/package/vue-video-player" target="view_window">点击进入vue-vadio-player</a></li>
              <li><a href="http://www.runoob.com/angularjs/angularjs-tutorial.html" target="view_window">点击进入angular</a></li>
            </ul>
          </div>
  </div>

</template>

<script>
  import send from './send.vue'
   export default {
      data() {
        return {
          activeIndex: '1',
          activeIndex2: '1'
        };
      },
      components:{
        send:send
      },
      methods: {
        handleSelect(key, keyPath) {
          console.log(key, keyPath);
        }
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  a{
    text-decoration: none;
    color:#fff;
  }
  .mymsg{
    position: fixed;
    left:1000px;
    bottom:100px;
    width: 300px;
    height: 300px;
    /* color:#fff; */
  }
  .mymsg ul{
    display: flex;
    flex-direction: column;
    text-align: left;
  }
  .mymsg ul li{
    margin-top: 10px;
  }
  .img{
    position: fixed;
    right:50px;
    top:10px;
    opacity: .5;
  }
  .right{
    position: fixed;
    left: 1000px;
    top:300px;
  }
  .view{
    position: fixed;
    top:400px;
    left:50px;
    width: 800px;
  }
  .head{
    width:800px;
    position: fixed;
    top:300px;
    left:50px;
    z-index: 999;
  }
.hello_header{
  position: fixed;
  top:20px;
  left:20px;
}
.hello_header dl{
  display: flex;
  color:#ffffff;
  font-weight: bold;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.mp3{
  position: fixed;
  bottom:20px;
  right:20px;
}
</style>
