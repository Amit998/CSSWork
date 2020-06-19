$(function($){
    var h1 = $("h1"),
        h = $(".h"),
        e = $(".e"),
        l = $(".l1"),
        l1 = $(".l2"),
        o = $(".o"),
        cia = $(".cia"),
        I = $(".I"),
        aps = $(".aps"),
        m = $(".m"),
        a = $(".a"),
        m2 = $(".m2"),
        i = $(".i"),
        t = $(".t"),
        header = $(".header"),
        body = $("body"),
        tl = new TimelineLite();
   
  // tl.staggerFromTo(h1, 1, {y:-300, autoAlpha: 0},{y: 0, autoAlpha: 1, ease: Back.easeOut}, 0.05);
    tl
      .from(h, 0.5, {x:100, y:-500, rotation: 695, autoAlpha: 0, ease: Back.easeOut})
      .from(e, 0.5, {x:200, y: 400, rotation: 320, autoAlpha: 0, ease: Back.easeOut})
      .from(l, 0.5, {x:0, y: -300, rotation: 100, autoAlpha: 0, ease: Back.easeOut})
      .from(l1, 0.5, {x:0, y: 300, rotation: -100, autoAlpha: 0, ease: Back.easeOut})
      .from(o, 0.5, {x: 161, y: -520,rotation: 490, autoAlpha: 0, ease: Back.easeOut})
      .from(cia, 0.5, {y: -20,autoAlpha: 0, ease: Back.easeOut})
      .from(I, 0.5, {y: 500, x:31,rotation: 80, autoAlpha: 0, ease: Back.easeOut})
      .from(aps, 0.5, {y: -20,autoAlpha: 0, ease: Back.easeOut})
      .from(m, 0.5, {y: -230, x: -131,rotation: 200, autoAlpha: 0, ease: Back.easeOut})
      .from(a, 0.5, {y: 400, x: -91,rotation: -80, autoAlpha: 0, ease: Back.easeOut})
      .from(m2, 0.5, {y: -420, x: 301,rotation: 123, autoAlpha: 0, ease: Back.easeOut})
      .from(i, 0.5, {y: 420, x: -301,rotation: -123, autoAlpha: 0, ease: Back.easeOut})
      .from(t, 0.6, {y: -300, x: -31,rotation: 423, autoAlpha: 0, ease: Back.easeOut})
   
 });
 
 
 