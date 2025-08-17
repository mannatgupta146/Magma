function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
loco()

var clutter = "";
document.querySelector("#page2 h1").textContent.split(" ").forEach(function(dets){
    clutter += `<span> ${dets} </span>`
    document.querySelector("#page2 h1").innerHTML = clutter;
})

gsap.to("#page2 h1 span", {
    scrollTrigger:{
        trigger: "#page2 h1 span",
        start: "top bottom",
        end: "bottom top",
        scroller: "#main",
        scrub: .5,
    },
    stagger: .5,
    color: "#fff"
})



function canvas(){
    const canvas = document.querySelector("#page3>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
  ./files/frames00007.png
  ./files/frames00010.png
  ./files/frames00013.png
  ./files/frames00016.png
  ./files/frames00019.png
  ./files/frames00022.png
  ./files/frames00025.png
  ./files/frames00028.png
  ./files/frames00031.png
  ./files/frames00034.png
  ./files/frames00037.png
  ./files/frames00040.png
  ./files/frames00043.png
  ./files/frames00046.png
  ./files/frames00049.png
  ./files/frames00052.png
  ./files/frames00055.png
  ./files/frames00058.png
  ./files/frames00061.png
  ./files/frames00064.png
  ./files/frames00067.png
  ./files/frames00070.png
  ./files/frames00073.png
  ./files/frames00076.png
  ./files/frames00079.png
  ./files/frames00082.png
  ./files/frames00085.png
  ./files/frames00088.png
  ./files/frames00091.png
  ./files/frames00094.png
  ./files/frames00097.png
  ./files/frames00100.png
  ./files/frames00103.png
  ./files/frames00106.png
  ./files/frames00109.png
  ./files/frames00112.png
  ./files/frames00115.png
  ./files/frames00118.png
  ./files/frames00121.png
  ./files/frames00124.png
  ./files/frames00127.png
  ./files/frames00130.png
  ./files/frames00133.png
  ./files/frames00136.png
  ./files/frames00139.png
  ./files/frames00142.png
  ./files/frames00145.png
  ./files/frames00148.png
  ./files/frames00151.png
  ./files/frames00154.png
  ./files/frames00157.png
  ./files/frames00160.png
  ./files/frames00163.png
  ./files/frames00166.png
  ./files/frames00169.png
  ./files/frames00172.png
  ./files/frames00175.png
  ./files/frames00178.png
  ./files/frames00181.png
  ./files/frames00184.png
  ./files/frames00187.png
  ./files/frames00190.png
  ./files/frames00193.png
  ./files/frames00196.png
  ./files/frames00199.png
  ./files/frames00202.png
 `;
  return data.split("\n")[index];
}

const frameCount = 67;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: .5,
    trigger: `#page3`,
    start: `top top`,
    end: `250% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({

  trigger: "#page3",
  pin: true,
  scroller: `#main`,
  start: `top top`,
  end: `250% top`,
});
}
canvas()

var clutter = "";
document.querySelector("#page4 h1").textContent.split(" ").forEach(function(dets){
    clutter += `<span> ${dets} </span>`
    document.querySelector("#page4 h1").innerHTML = clutter;
})

gsap.to("#page4 h1 span", {
    scrollTrigger:{
        trigger: "#page4 h1 span",
        start: "top bottom",
        end: "bottom top",
        scroller: "#main",
        scrub: .5,
    },
    stagger: .5,
    color: "#fff"
})


function canvas1(){
    const canvas = document.querySelector("#page5>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
  ./files/bridges00004.png
  ./files/bridges00007.png
  ./files/bridges00010.png
  ./files/bridges00013.png
  ./files/bridges00016.png
  ./files/bridges00019.png
  ./files/bridges00022.png
  ./files/bridges00025.png
  ./files/bridges00028.png
  ./files/bridges00031.png
  ./files/bridges00034.png
  ./files/bridges00037.png
  ./files/bridges00040.png
  ./files/bridges00043.png
  ./files/bridges00046.png
  ./files/bridges00049.png
  ./files/bridges00052.png
  ./files/bridges00055.png
  ./files/bridges00058.png
  ./files/bridges00061.png
  ./files/bridges00064.png
  ./files/bridges00067.png
  ./files/bridges00070.png
  ./files/bridges00073.png
  ./files/bridges00076.png
  ./files/bridges00079.png
  ./files/bridges00082.png
  ./files/bridges00085.png
  ./files/bridges00088.png
  ./files/bridges00091.png
  ./files/bridges00094.png
  ./files/bridges00097.png
  ./files/bridges00100.png
  ./files/bridges00103.png
  ./files/bridges00106.png
  ./files/bridges00109.png
  ./files/bridges00112.png
  ./files/bridges00115.png
  ./files/bridges00118.png
  ./files/bridges00121.png
  ./files/bridges00124.png
  ./files/bridges00127.png
  ./files/bridges00130.png
  ./files/bridges00133.png
  ./files/bridges00136.png
  ./files/bridges00139.png
  ./files/bridges00142.png
  ./files/bridges00145.png
  ./files/bridges00148.png
  ./files/bridges00151.png
  ./files/bridges00154.png
  ./files/bridges00157.png
  ./files/bridges00160.png
  ./files/bridges00163.png
 `;
  return data.split("\n")[index];
}

const frameCount = 67;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: .5,
    trigger: `#page5`,
    start: `top top`,
    end: `250% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({

  trigger: "#page5",
  pin: true,
  scroller: `#main`,
  start: `top top`,
  end: `250% top`,
});
}
canvas1()