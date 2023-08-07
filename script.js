function init() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true,
  });
  locoScroll.on('scroll', ScrollTrigger.update);

  ScrollTrigger.scrollerProxy('.main', {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector('.main').style.transform
      ? 'transform'
      : 'fixed',
  });

  ScrollTrigger.addEventListener('refresh', () => locoScroll.update());

  ScrollTrigger.refresh();
}

init();

var crsr = document.querySelector('.cursor');
var main = document.querySelector('.main');
document.addEventListener('mousemove', function (dets) {
  crsr.style.left = dets.x + 1 + 'px';
  crsr.style.top = dets.y + 1 + 'px';
});

var tl = gsap.timeline({
  ScrollTrigger: {
    trigger: '.page1 h1',
    scroller: '.main',
    markers: true,
    start: 'top 27%',
    end: 'top 0%',
    scrub: 2,
  },
});

tl.to(
  '.page1 h1',
  {
    x: -100,
  },
  'anime'
);
tl.to(
  '.page1 h2',
  {
    x: 100,
  },
  'anime'
);

tl.to(
  '.page1 video',
  {
    width: '100%',
    duration: 1.05,
  },
  'anime'
);

var tl2 = gsap.timeline({
  ScrollTrigger: {
    trigger: '.page1 h1',
    scroller: '.main',
    markers: true,
    start: 'top -150%',
    end: 'top -230%',
    scrub: 3,
  },
});

tl2.to('.main', {
  // backgroundColor: '#fff',
});
