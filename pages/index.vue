<template>
  <div id="app">
<client-only>
    <div class="partes">
      <h1 class="logo">
        <svg overflow="visible" viewBox="0 0 35.9 9.9">
          <path d="M.2 0c.2 0 .3.2.4.4.1 2.7.1 5.5.4 8.2.4-.1 1-.3 1.4-.3.2 0 .4.1.4.3 0 .2 0 .3-.2.3-.4.2-1 .2-1.4.3-.2.1-.3.2-.5.2-.1 0-.3-.2-.4-.3-.1-1.4-.1-3-.2-4.4l-.1-3V.2C.1 0 .1 0 .2 0zM3.6 8V5.6c0-1.7-.2-2.8-.2-4.5V.5C5.3.3 5.5.5 5.5.7c.1.1 0 .3-.1.3H4.1c-.1 0-.1.1-.1.1 0 1.3.1 2.2.2 3.5h1.4c.4 0 .7.7.1.7H4.2v2.8c.3.1 1.8-.2 1.8.3 0 .1-.1.3-.2.3-.4 0-2.1.2-2.2-.2V8zM7.6.7c.2-.4.6 0 .7.1C9 2.9 9.5 5 10.4 7.2l.1-1.7c.1-1.5.1-2.8.1-4.3 0-.2.3-.3.5-.3.1 0 .3 0 .3.2-.2 2.6-.3 5.3-.4 8.1v.2c0 .1-.2.2-.3.2s-.3-.1-.3-.2C9.6 7 8.8 4.8 8.1 2.6L8 9.4c-.3.6-.7.3-.7-.1L7.6.7zM13.2.7l.6 7.3c0 .2.1.4.1.6 0 .2-.2.3-.4.3-.3 0-.3-.2-.3-.5l-.3-5.3c-.1-.9-.2-1.7-.2-2.6-.1-.2.5-.1.5.2zM15.2 3.6c0-1.9.2-3.3.5-3.3.1.1.3.1.4.4.2.9.5 2.5 1.2 3.5.1-.1.5-.9.8-1.3l.1-.1c.4-.8.7-1.4 1-2.2.1-.1.2-.2.3-.2.2 0 .3.1.4.2-.1 2.7 0 5.3-.1 8v.6c-.1.1-.2.3-.4.3-.1 0-.2-.1-.3-.2v-.7-6.5c-.3.5-.6 1-.8 1.6l-.7 1.4c-.1.2-.4.5-.6.1l-1.2-2.7c-.3 2.2-.3 4.4-.3 6.6 0 .1-.1.2-.3.2-.1 0-.3-.1-.3-.2l.3-5.5zM21.8.7c.1-1.1.8-.8 1 0 .3 1.2.5 2.3 1.8 8.6 0 .3-.4.5-.6.1l-.4-2.2-1.6.4c-.1.6-.2 1.6-.2 2.1 0 .3-.5.2-.5 0l.5-9zm.2 5.6v.6l1.5-.2-1.2-5.3c-.1.8-.3 4.2-.3 4.9zM26 4.1V.8h-1c-.4-.1-.5-.5.1-.6.9 0 1.8 0 2.8.1.5 0 .5.6.2.6h-1.3s-.1 3.8-.1 5.4v2.2c-.1.4-.6.3-.7-.1V4.1zM30.2.7l.5 7.3c0 .2.1.4.1.6 0 .2-.2.3-.4.3-.3 0-.3-.2-.3-.5l-.3-5.3c-.1-.9-.2-1.7-.2-2.6-.1-.2.5-.1.6.2zM34.3.5c.6 0 1.1.3 1.1.9 0 .1 0 .3-.2.3-.4 0-.5-.5-.9-.6h-.1c-1.6 0-2.8 7.5 0 7.7h.1c.9 0 .5-1.1 1.2-1.1.2 0 .3.1.3.3 0 .2-.1.2-.2.5-.3.6-.7.9-1.3.9h-.1c-2.3-.1-2.4-3.3-2.2-4.9.1-1.3.6-4 2.3-4z" fill="#ffca30"/>
        </svg>
      </h1>      

      <div class="tabs">
        <button v-for="(part, parent) in parts" @click="tabActive = parent" :key="`${parent}-${part}`" :class="{active: tabActive === parent}">
          {{parent}}
        </button>
      </div>

      <div class="flexpartes" v-for="(part, parent) in parts" :class="{active: tabActive === parent}" :key="`${parent}-${part}`">
        <template v-if="flipped">
        <button v-for="item in part" @click="setPart(parent, item)" :key="item" :class="{active: backleni[parent] === item}">
          <svg viewBox="0 0 200 200"  tabindex="1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <component :is="`${parent}-${item}`"/>
          </svg>
        </button>
        </template>
      <template v-if="!flipped">

        <button v-for="item in part" @click="setPart(parent, item)" :key="item" :class="{active: leni[parent] === item}">
          <svg viewBox="0 0 200 200"  tabindex="1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <component :is="`${parent}-${item}`"/>
          </svg>
        </button>        
                </template>

      </div>

    </div>

    <main class="leni-container">

      <div class="scene">
        <div class="box">
          <div class="box__face box__face--back"></div>
          <div class="box__face box__face--right"></div>
          <div class="box__face box__face--left"></div>
          <div class="box__face box__face--top"></div>
          <div class="box__face box__face--bottom"></div>
        </div>
      </div>
<div class="flip-container" :class="{active: flipped}">
	<div class="flipper">
		<div class="front">
			<svg class="leni-head" ref="frontleni" viewBox="0 0 200 200" role="img" aria-labelledby="leni desc" tabindex="1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <title id="leni">Leni</title>
        <desc id="desc">Choose parts to build your leni</desc>
       <g id="head">
          <path fill="#69b3b2" d="M60.7 164.84c.88-23.22-16.05-37.56-15.54-66.66.25-14.54 4.14-52.49 49.77-58.84 19.43-2.71 67.12 8.17 61.4 60.34-3.72 34-17.88 41.83-18.66 64.87" />
          <path fill="#141827" d="M62.2 164.84a55 55 0 00-2.82-18.61c-1.88-5.9-4.39-11.56-6.6-17.33a91.49 91.49 0 01-5.48-19.8 74.26 74.26 0 01-.47-15.2 70.06 70.06 0 014.76-21.76 48.29 48.29 0 0117.16-21.72A55.54 55.54 0 0184.85 43a58.42 58.42 0 0114.59-2.5 62.94 62.94 0 0122.12 3.5 52.72 52.72 0 0122 14c7 7.74 10.76 17.77 11.57 28.11a84 84 0 01-1.47 21.69 105.06 105.06 0 01-5.51 19.36c-3.77 9.63-9.12 18.72-11 29a56.91 56.91 0 00-.92 8.33c-.07 1.94 2.93 1.93 3 0a53.57 53.57 0 013.08-15.88c1.72-4.85 4-9.47 6.06-14.17C154 121.68 157.74 108 158.26 94c.42-11.45-1.95-23.15-8.45-32.73a51.59 51.59 0 00-21.35-17.64 68.05 68.05 0 00-24.12-6 62.06 62.06 0 00-29.4 5.91 50.81 50.81 0 00-22.86 20.78 65.21 65.21 0 00-7.69 23.92 77.94 77.94 0 001.89 30.63c3.35 12.41 10.11 23.79 12.3 36.53a45.93 45.93 0 01.62 9.44c-.07 1.93 2.93 1.93 3 0z" />
          <g fill="#151b2d" opacity=".16">
            <path d="M58.65 147.13s9.7-5.83 2.42-20.07C58.9 122.81 53 119 48.88 121c0 0 6.32 18 9.77 26.13z"/>
            <path d="M69.26 48.77s1 7.15-2.6 11.46c-1.88 2.25-7.86 8.57-13.88 7.05a46.23 46.23 0 0116.48-18.51z"/>
            <path d="M96.18 45.56c-.58 2.55 2 5.19 6.87 3.44 4.6-1.63 3.7-5.58 2-6.46-3.05-1.62-8.05-.47-8.87 3.02z" />
            <path d="M155.11 78.33s-9.33 1.18-12.13-7.82c-1.25-4-.15-9 1.79-12.67 0 0 9.14 10.16 10.34 20.49z"/>
            <path d="M147.08 110.11c-1.51 2.57-2.12 7.34-1.24 9.88s4.06 4.86 4.06 4.86c2.39-5.47 5.75-19 5.75-19-5.03.41-6.83 1.85-8.57 4.26z" />
            <path d="M58.44 92.14a3.14 3.14 0 003.62 2.59 3.42 3.42 0 002.23-4 3.08 3.08 0 00-3.81-2.25 3.24 3.24 0 00-2 3.7" />
            <path d="M124.61 53.55a2.36 2.36 0 002.3 2.19 3.14 3.14 0 003-1.74 2.66 2.66 0 00-3.15-3 2.77 2.77 0 00-2.15 2.55z" />
          </g>
          <path fill="#ffcb31" d="M138 164.6l-.61 5c-10.63.23-73 .05-77-.06-.18-1.32.09-3.55-.25-5-.06.06 46.74.29 77.86.06z" />
          <path fill="#141827" d="M136.49 164.6l-.61 5 1.5-1.5c-9.85.21-19.72.12-29.58.11q-18.73 0-37.49-.09c-3.33 0-6.66 0-10-.08l1.5 1.5c-.2-1.79.06-3.58-.3-5.36l-1.45 1.89 17.62.07h38.08q11.1 0 22.21-.09a1.5 1.5 0 000-3c-13.27.1-26.55.11-39.82.1q-16 0-31.93-.07h-6.16a1.53 1.53 0 00-1.45 1.9c.31 1.5 0 3.06.2 4.57a1.52 1.52 0 001.5 1.5c8.29.21 16.6.11 24.9.13q19.39.06 38.8 0c4.45 0 8.9 0 13.35-.1a1.54 1.54 0 001.5-1.5l.61-5c.25-1.89-2.75-1.88-2.98.02z" />
          <path fill="#141827" d="M62.2 164.84a55 55 0 00-2.82-18.61c-1.88-5.9-4.39-11.56-6.6-17.33a91.49 91.49 0 01-5.48-19.8 74.26 74.26 0 01-.47-15.2 70.06 70.06 0 014.76-21.76 48.29 48.29 0 0117.16-21.72A55.54 55.54 0 0184.85 43a58.42 58.42 0 0114.59-2.5 62.94 62.94 0 0122.12 3.5 52.72 52.72 0 0122 14c7 7.74 10.76 17.77 11.57 28.11a84 84 0 01-1.47 21.69 105.06 105.06 0 01-5.51 19.36c-3.77 9.63-9.12 18.72-11 29a56.91 56.91 0 00-.92 8.33c-.07 1.94 2.93 1.93 3 0a53.57 53.57 0 013.08-15.88c1.72-4.85 4-9.47 6.06-14.17C154 121.68 157.74 108 158.26 94c.42-11.45-1.95-23.15-8.45-32.73a51.59 51.59 0 00-21.35-17.64 68.05 68.05 0 00-24.12-6 62.06 62.06 0 00-29.4 5.91 50.81 50.81 0 00-22.86 20.78 65.21 65.21 0 00-7.69 23.92 77.94 77.94 0 001.89 30.63c3.35 12.41 10.11 23.79 12.3 36.53a45.93 45.93 0 01.62 9.44c-.07 1.93 2.93 1.93 3 0z" />
        </g>
        <component v-for="(part, parent) in leni" v-if="leni[parent]!== ''" :is="`${parent}-${part}`" :key="`${parent}-${part}`"/>   
      </svg>
		</div>
		<div class="back">
			<svg class="leni-head" ref="backleni" viewBox="0 0 200 200" role="img" aria-labelledby="leni desc" tabindex="1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <title id="leni">Leni</title>
        <desc id="desc">Choose parts to build your leni</desc>
       <g id="head">
          <path fill="#69b3b2" d="M60.7 164.84c.88-23.22-16.05-37.56-15.54-66.66.25-14.54 4.14-52.49 49.77-58.84 19.43-2.71 67.12 8.17 61.4 60.34-3.72 34-17.88 41.83-18.66 64.87" />
          <path fill="#141827" d="M62.2 164.84a55 55 0 00-2.82-18.61c-1.88-5.9-4.39-11.56-6.6-17.33a91.49 91.49 0 01-5.48-19.8 74.26 74.26 0 01-.47-15.2 70.06 70.06 0 014.76-21.76 48.29 48.29 0 0117.16-21.72A55.54 55.54 0 0184.85 43a58.42 58.42 0 0114.59-2.5 62.94 62.94 0 0122.12 3.5 52.72 52.72 0 0122 14c7 7.74 10.76 17.77 11.57 28.11a84 84 0 01-1.47 21.69 105.06 105.06 0 01-5.51 19.36c-3.77 9.63-9.12 18.72-11 29a56.91 56.91 0 00-.92 8.33c-.07 1.94 2.93 1.93 3 0a53.57 53.57 0 013.08-15.88c1.72-4.85 4-9.47 6.06-14.17C154 121.68 157.74 108 158.26 94c.42-11.45-1.95-23.15-8.45-32.73a51.59 51.59 0 00-21.35-17.64 68.05 68.05 0 00-24.12-6 62.06 62.06 0 00-29.4 5.91 50.81 50.81 0 00-22.86 20.78 65.21 65.21 0 00-7.69 23.92 77.94 77.94 0 001.89 30.63c3.35 12.41 10.11 23.79 12.3 36.53a45.93 45.93 0 01.62 9.44c-.07 1.93 2.93 1.93 3 0z" />
          <g fill="#151b2d" opacity=".16">
            <path d="M58.65 147.13s9.7-5.83 2.42-20.07C58.9 122.81 53 119 48.88 121c0 0 6.32 18 9.77 26.13z"/>
            <path d="M69.26 48.77s1 7.15-2.6 11.46c-1.88 2.25-7.86 8.57-13.88 7.05a46.23 46.23 0 0116.48-18.51z"/>
            <path d="M96.18 45.56c-.58 2.55 2 5.19 6.87 3.44 4.6-1.63 3.7-5.58 2-6.46-3.05-1.62-8.05-.47-8.87 3.02z" />
            <path d="M155.11 78.33s-9.33 1.18-12.13-7.82c-1.25-4-.15-9 1.79-12.67 0 0 9.14 10.16 10.34 20.49z"/>
            <path d="M147.08 110.11c-1.51 2.57-2.12 7.34-1.24 9.88s4.06 4.86 4.06 4.86c2.39-5.47 5.75-19 5.75-19-5.03.41-6.83 1.85-8.57 4.26z" />
            <path d="M58.44 92.14a3.14 3.14 0 003.62 2.59 3.42 3.42 0 002.23-4 3.08 3.08 0 00-3.81-2.25 3.24 3.24 0 00-2 3.7" />
            <path d="M124.61 53.55a2.36 2.36 0 002.3 2.19 3.14 3.14 0 003-1.74 2.66 2.66 0 00-3.15-3 2.77 2.77 0 00-2.15 2.55z" />
          </g>
          <path fill="#ffcb31" d="M138 164.6l-.61 5c-10.63.23-73 .05-77-.06-.18-1.32.09-3.55-.25-5-.06.06 46.74.29 77.86.06z" />
          <path fill="#141827" d="M136.49 164.6l-.61 5 1.5-1.5c-9.85.21-19.72.12-29.58.11q-18.73 0-37.49-.09c-3.33 0-6.66 0-10-.08l1.5 1.5c-.2-1.79.06-3.58-.3-5.36l-1.45 1.89 17.62.07h38.08q11.1 0 22.21-.09a1.5 1.5 0 000-3c-13.27.1-26.55.11-39.82.1q-16 0-31.93-.07h-6.16a1.53 1.53 0 00-1.45 1.9c.31 1.5 0 3.06.2 4.57a1.52 1.52 0 001.5 1.5c8.29.21 16.6.11 24.9.13q19.39.06 38.8 0c4.45 0 8.9 0 13.35-.1a1.54 1.54 0 001.5-1.5l.61-5c.25-1.89-2.75-1.88-2.98.02z" />
          <path fill="#141827" d="M62.2 164.84a55 55 0 00-2.82-18.61c-1.88-5.9-4.39-11.56-6.6-17.33a91.49 91.49 0 01-5.48-19.8 74.26 74.26 0 01-.47-15.2 70.06 70.06 0 014.76-21.76 48.29 48.29 0 0117.16-21.72A55.54 55.54 0 0184.85 43a58.42 58.42 0 0114.59-2.5 62.94 62.94 0 0122.12 3.5 52.72 52.72 0 0122 14c7 7.74 10.76 17.77 11.57 28.11a84 84 0 01-1.47 21.69 105.06 105.06 0 01-5.51 19.36c-3.77 9.63-9.12 18.72-11 29a56.91 56.91 0 00-.92 8.33c-.07 1.94 2.93 1.93 3 0a53.57 53.57 0 013.08-15.88c1.72-4.85 4-9.47 6.06-14.17C154 121.68 157.74 108 158.26 94c.42-11.45-1.95-23.15-8.45-32.73a51.59 51.59 0 00-21.35-17.64 68.05 68.05 0 00-24.12-6 62.06 62.06 0 00-29.4 5.91 50.81 50.81 0 00-22.86 20.78 65.21 65.21 0 00-7.69 23.92 77.94 77.94 0 001.89 30.63c3.35 12.41 10.11 23.79 12.3 36.53a45.93 45.93 0 01.62 9.44c-.07 1.93 2.93 1.93 3 0z" />
        </g>
        <component v-for="(part, parent) in backleni" v-if="backleni[parent]!== ''" :is="`${parent}-${part}`" :key="`${parent}-${part}`"/>   
      </svg>		
    </div>
	</div>
</div>

    </main>    
      <nav class="main-nav">
        <button @click="chooseOne()">
          <svg fill='none' stroke='#f8f3dc' stroke-width='8' stroke-dashoffset='0' stroke-dasharray='0' stroke-linecap='round' stroke-linejoin='round' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect x="10" y="10" width="80" height="80"/> <circle cx="30" cy="30" r="4"/> <circle cx="70" cy="30" r="4"/> <circle cx="50" cy="50" r="4"/> <circle cx="30" cy="70" r="4"/> <circle cx="70" cy="70" r="4"/></svg>
          Random Leni</button>        
        <button @click="exportLeniPNG()">Export PNG</button>
        <button @click="exportLeniSVG()">Export SVG</button>

      </nav> 
</client-only>

  </div>
</template>

<script>
export default {
  name: "app",
  asyncData({ app, route }) {
    var leni = {
      eye: "open",
      mouth: "smile",
      hat: "",
      hand: "",
      extra: "",
      extra2: "",
    };

    var backleni = {
      eye: "open",
      mouth: "smile",
      hat: "",
      hand: "",
      extra: "",
      extra2: "",
    };

    var flipped = false;
    var tabActive = "eye";
    var parts = app.$parts;
    return { flipped, tabActive, parts, backleni, leni };
  },
  mounted() {
    if (this.$route.query.e) {
      this.leni.eye = this.$route.query.e;
      this.leni.mouth = this.$route.query.m;
      this.leni.hat = this.$route.query.ht;
      this.leni.hand = this.$route.query.hd;
      this.leni.extra = this.$route.query.x;
      this.leni.extra2 = this.$route.query.xx;
    }
  },
  methods: {
    setPart(parent, item) {
      if (this.flipped) {
        if (this.backleni[parent] === item) { this.backleni[parent] = ""; } else { this.backleni[parent] = item; }
      } else {
        if (this.leni[parent] === item) { this.leni[parent] = ""; } else { this.leni[parent] = item; }
      }
      this.checkRoute();
    },
    randomElement(parts) {
      const keys = Object.keys(parts);
      const random = Math.trunc(Math.random() * keys.length);
      return parts[keys[random]];
    },
    chooseOne() {
      var randomnumber = Math.floor(Math.random() * (Object.keys(this.leni).length - 2 + 1)) + 2;
      const types = Object.keys(this.leni).slice(0, randomnumber);
      const reparts = Object.keys(this.leni);

      if (this.flipped) {
        for (let e = 0; e < reparts.length; e++) {
          this.leni[reparts[e]] = "";
        }
        for (let i = 0; i < types.length; i++) {
          this.leni[types[i]] = this.randomElement(this.parts[types[i]]);
        }
      } else {
        for (let e = 0; e < reparts.length; e++) {
          this.backleni[reparts[e]] = "";
        }
        for (let i = 0; i < types.length; i++) {
          this.backleni[types[i]] = this.randomElement(this.parts[types[i]]);
        }
      }

      this.flipped = !this.flipped;

      this.checkRoute();
    },
    checkRoute() {
      var str = "";
      var repartes = {};
      if (this.flipped) {
        if (this.backleni.eye !== "") { repartes.e = this.backleni.eye; }
        if (this.backleni.mouth !== "") { repartes.m = this.backleni.mouth; }
        if (this.backleni.extra !== "") { repartes.x = this.backleni.extra; }
        if (this.backleni.hand !== "") { repartes.hd = this.backleni.hand; }
        if (this.backleni.hat !== "") { repartes.ht = this.backleni.hat; }
        if (this.backleni.extra2 !== "") { repartes.xx = this.backleni.extra2; }
      } else {
        if (this.leni.eye !== "") { repartes.e = this.leni.eye; }
        if (this.leni.mouth !== "") { repartes.m = this.leni.mouth; }
        if (this.leni.extra !== "") { repartes.x = this.leni.extra; }
        if (this.leni.hand !== "") { repartes.hd = this.leni.hand; }
        if (this.leni.hat !== "") { repartes.ht = this.leni.hat; }
        if (this.leni.extra2 !== "") { repartes.xx = this.leni.extra2; }
      }


      for (var key in repartes) {
        if (str != "") {
          str += "&";
        }
        str += key + "=" + encodeURIComponent(repartes[key]);
      }
      history.pushState({}, null, this.$route.path + "?" + str);
    },
    leniURL() {
      const DOMURL = self.URL || self.webkitURL || self;
      var svgString;
      if (this.flipped) {
       svgString = new XMLSerializer().serializeToString(this.$refs.backleni)

      } else {
         svgString = new XMLSerializer().serializeToString(this.$refs.frontleni)
      }
        
        svgString.replace('viewBox="0 0 200 200"','viewBox="0 0 200 200" width="1000px" height="1000px"');
      const svg = new Blob([svgString], {
        type: "image/svg+xml;charset=utf-8",
      });
      return DOMURL.createObjectURL(svg); 
    },
    exportLeniSVG() {
      const link = document.createElement("a");
      link.download = "my-leni.svg";
      link.href = this.leniURL();
      link.click();
    },
    exportLeniPNG() {
      const url = this.leniURL();
      const img = new Image();
      const canvas = document.createElement("canvas");
      canvas.width = 1000;
      canvas.height = 1000;
      const context = canvas.getContext("2d");
      img.onload = function () {
        context.drawImage(img, 0, 0);
        const png = canvas.toDataURL("image/png", 100);
        const link = document.createElement("a");
        link.download = "my-leni.png";
        link.href = png;
        link.click();
      };
      img.src = url;
    },
  },
};
</script>

<style lang="scss">
.flip-container {
  perspective: 1000px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}
.flip-container.active .flipper {
  transform: rotateY(180deg);
}

.flipper {
  transition: 0.6s;
  transform-style: preserve-3d;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.front,
.back {
  backface-visibility: hidden;
  padding: 20px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.front {
  z-index: 2;
  transform: rotateY(0deg);
}

.back {
  transform: rotateY(180deg);
}

:root {
  --bgColor: #042733;
  --textColor: #f8f3dc;
  --toniEye: #eae3ca;
  --toniEyelid: #69b3b2;
  --depth: 100px;
  --height: 100%;
  --width: 100%;

  --depthTransform: calc(var(--depth) / 2);

  --widthTransform: calc(var(--width) / 2);
  --widthreTransform: calc(var(--widthTransform) - var(--depthTransform));
}

body {
  background-size: 700px;
  color: var(--textColor);
  margin: 0 auto;
  &:before {
    content: "";
    background-color: var(--bgColor);
    display: block;
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    opacity: 0.4;
    z-index: -1;
  }
}
h1 {
  margin: 0.5rem auto;
}
ul {
  padding-left: 0;
}
button:focus:not(:focus-visible),
svg:focus:not(:focus-visible) {
  outline: none;
}
button {
  cursor: pointer;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-size: 1rem;
}
#app {
  background: var(--bgColor);
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: grid;
  grid-template-columns: 600px 1fr 120px;
  text-align: center;
}

.main-nav {
  align-items: center;
  display: flex;
  margin: 0;
  flex-direction: column;
  button {
    background: transparent;
    border: 0;
    border-bottom: 1px solid rgba(26, 84, 105, 0.9);
    color: #f8f3dc;
    text-align: center;
    opacity: 0.75;
    width: 100%;
    padding: 10px;
    svg {
      width: 40%;
      display: block;
      margin: 0 auto 10px;
    }
    &:hover {
      background: #377890;
      color: var(--textColor);
    }
  }
}

.logo {
  margin: 20px 0 20px;
  svg {
    max-height: 60px;
    width: 100%;
  }
}

.leni-container {
  border-bottom: 0;
  position: relative;
  border-left: 2px solid rgba(26, 84, 105, 0.5);
  border-right: 2px solid rgba(26, 84, 105, 0.5);
  height: 100vh;
}

.leni-head {
  width: 100%;
  height: 100%;
  position: relative;
  .none {
    display: none;
  }
}

.tabs {
  display: flex;
  padding: 0 15px;
  > button {
    padding: 10px 20px;
    margin: 0 5px;
    background: transparent;
    border: 1px solid rgba(26, 84, 105, 0.9);
    border-radius: 50px;
    flex: 1;
    color: #f8f3dc;
    text-align: center;
    opacity: 0.75;
    &:hover {
      opacity: 1;
    }
    &.active {
      background-color: #377890;
      border: 1px solid #aaa;
      opacity: 1;
    }
  }
}

.flexpartes {
  display: none;
  max-height: calc(100vh - 160px);
  overflow: auto;
  padding: 15px 0;
  &.active {
    display: block;
  }
  button {
    width: 100px;
    height: 100px;
    margin: 8px;
    border: 1px solid transparent;
    background-color: #1a5469;
    border-radius: 100%;
    flex: 1;
    display: inline-block;
    vertical-align: top;
    &:hover,
    &.active {
      background-color: #377890;
      border-color: #eee;
    }
  }
  svg {
    width: 100%;
  }
}

.scene {
  width: 100%;
  height: var(--height);
  perspective: 150px;
  perspective-origin: center 320px;
  transition: all 0.4s linear;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  &.shopActive {
    perspective: 250px;
    perspective-origin: center 220px;
    //animation: 10s recaca linear infinite;
  }
  &.buildActive {
    perspective: 300px;
  }
  &.growActive {
    perspective: 350px;
    perspective-origin: center 400px;
  }
  &.loginIn {
    perspective: 400px;
  }
}

.box {
  width: 100%;
  height: var(--height);
  position: relative;
  transform-style: preserve-3d;
  transform: translateZ(calc(-1 * var(--depthTransform)));
}

.box__face {
  position: absolute;
  border: 1px solid rgba(26, 84, 105, 0.5);
  border-radius: 0px;
  transition: all 0.2s linear;
}

.box__face--back {
  width: 100%;
  height: var(--height);
  background-image: linear-gradient(rgba(0, 77, 71, 0.3) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 77, 71, 0.3) 1px, transparent 1px);
  background-size: 1px 11px, 11px 11px;
  background-position: -1px -1px, -1px -1px;
  border: 0;
  &:after {
    content: "";
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    z-index: 999;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    display: block;
  }
}

.box__face--right,
.box__face--left {
  width: var(--depth);
  height: var(--height);
  left: var(--widthreTransform);
  background-image: linear-gradient(transparent 90%, rgba(26, 84, 105, 0.5));
  background-size: 1px 11px;
  position: absolute;
  &:after {
    content: "";
    background: linear-gradient(to right, black, transparent);
    position: absolute;
    z-index: 999;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    display: block;
  }
}
.box__face--left {
  border-left-width: 1px;
  border-top-width: 1px;
  border-right: 0;
  border-bottom-width: 1px;
  left: 0;
}

.box__face--right {
  border-right-width: 1px;
  border-top-width: 1px;
  border-bottom-width: 1px;
  left: initial;
  right: 0;
}

.box__face--right {
  border-left: 0;
  &:after {
    content: "";
    background: linear-gradient(to left, black, transparent);
    position: absolute;
    z-index: 999;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    display: block;
  }
}

.box__face--top {
  position: absolute;
  background-image: linear-gradient(
    to right,
    transparent 90%,
    rgba(26, 84, 105, 0.5)
  );
  background-size: 11px 1px;
  border-bottom: 0;
  top: 0;
  &:after {
    content: "";
    background: linear-gradient(to bottom, black 10%, transparent);
    position: absolute;
    z-index: 9;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    display: block;
  }
}

.box__face--bottom {
  position: absolute;
  background-image: linear-gradient(
    to right,
    transparent 90%,
    rgba(26, 84, 105, 0.5)
  );
  background-size: 11px 1px;
  border-top: 0;
  border-bottom-width: 1px;
  bottom: 0;
  &:after {
    content: "";
    background: linear-gradient(to top, black, transparent);
    position: absolute;
    z-index: 999;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    display: block;
  }
}

.box__face--top,
.box__face--bottom {
  width: 100%;
  height: var(--depth);
  border-top-width: 1px;
}

.box__face--back {
  transform: rotateY(180deg) translateZ(var(--depthTransform));
}
.box__face--right {
  transform: rotateY(90deg) translateZ(var(--depthTransform));
}
.box__face--left {
  transform: rotateY(-90deg) translateZ(var(--depthTransform));
}
.box__face--top {
  transform: rotateX(90deg) translateZ(var(--depthTransform));
}
.box__face--bottom {
  transform: rotateX(-90deg) translateZ(var(--depthTransform));
}
</style>
