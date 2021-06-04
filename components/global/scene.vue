<template>

      <div class="scene">
        <div class="box">
          <div class="box__face box__face--back"></div>
          <div class="box__face box__face--right"></div>
          <div class="box__face box__face--left"></div>
          <div class="box__face box__face--top"></div>
          <div class="box__face box__face--bottom"></div>
        </div>
      </div>
      
      </template>

<style lang="scss" scoped>
  
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