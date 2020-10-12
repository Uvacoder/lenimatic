<template>
    <section class="parts-container">
        <div class="tabs">
            <div v-for="(tab, i) in tabs" :key="i" @click="tabActive = tab">{{ tab }}</div>
        </div>

        <ul class="parts" v-if="tabActive == 'eyes'">
            <li @click="chooseEye(item)" class="eye" v-for="(item, i) in parts.eyes" :key="i"> 
                <svg viewBox="0 0 200 200" v-html="item.url"></svg>
                <span>{{ item.name }}</span>
            </li>
        </ul>

        <ul class="parts" v-if="tabActive == 'mouths'">
            <li @click="chooseMouth(item)" class="mouth" v-for="(item, i) in parts.mouths" :key="i"> 
                <svg viewBox="0 0 200 200" v-html="item.url"></svg>
                <span>{{ item.name }}</span>
            </li>
        </ul>
        <ul class="parts" v-if="tabActive == 'hats'">
            <li @click="chooseHat(item)" class="hat" v-for="(item, i) in parts.hats" :key="i"> 
                <svg viewBox="0 0 200 200" v-html="item.url"></svg>
                <span>{{ item.name }}</span>
            </li>
        </ul>
        <ul class="parts" v-if="tabActive == 'hands'">
            <li @click="chooseHand(item)" class="hand" v-for="(item, i) in parts.hands" :key="i"> 
                <svg viewBox="0 0 200 200" v-html="item.url"></svg>
                <span>{{ item.name }}</span>
            </li>
        </ul>
        <ul class="parts" v-if="tabActive == 'extras'">
            <li @click="chooseExtra(item)" class="extra" v-for="(item, i) in parts.extras" :key="i"> 
                <svg viewBox="0 0 200 200" v-html="item.url"></svg>
                <span>{{ item.name }}</span>
            </li>
        </ul>

    </section>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import store from './../store.js'

export default {
  name: 'Parts',
  data: function () {
    return store.data
  },
  methods: {
   chooseEye: function(item) {
      this.leni.eye = item
   },
   chooseMouth: function(item) {
      this.leni.mouth = item
   },
  chooseHat: function(item) {
      this.leni.hat = item
   },
  chooseHand: function(item) {
      this.leni.hand = item
   },
  chooseExtra: function(item) {
      this.leni.extra = item
   }
 }
}
</script>

<style lang="scss">
ul { padding-left: 0; }

.parts-container {
  border: 1px solid;
  grid-area: parts;
}
.tabs { 
  border: 1px solid;
  cursor: pointer;
  display: flex; 
  justify-content: space-around;
  > div {
    border: 1px solid;
    flex: 1 1 auto;
  }
}
.parts {
  display:flex;
  li { 
    background-color: #f0f0f0;
    cursor: pointer;
    flex: 1 1 auto;
    list-style-type: none;
    margin: 5px;
    text-align: center;
    &:hover {
      background-color:rebeccapurple;
    }
    svg { 
      margin: 10px;
    }
    span {
      border: 1px solid;
      display: block;
    }
  }
}

</style>
