var app={navButton:document.getElementById("nav-btn"),navigation:document.getElementsByClassName("navigation"),navOpt:document.getElementsByClassName("nav-opt"),vh:window.innerHeight,home:document.getElementById("home"),about_us:document.getElementById("about_us"),mmf:document.getElementById("mmf"),livein:document.getElementById("livein"),footloose:document.getElementById("footloose"),fs:document.getElementById("fs"),dayevents:document.getElementById("dayevents"),photos:document.getElementById("photos"),lastHighlighted:"home",lastScrollTop:window.pageYOffset||document.documentElement.scrollTop,images:[{id:"boxcric",url:"../img/events/boxcricket.jpg"},{id:"cipherarena",url:"../img/events/cipherarena.jpg"},{id:"aquazorb",url:"../img/events/aquazorb.jpg"},{id:"warofdj",url:"../img/events/warofdj.jpg"},{id:"mechanicalbull",url:"../img/events/mechanicalbull.jpg"},{id:"rinkfootball",url:"../img/events/rinkfootball.jpg"},{id:"recentMedia",url:"../img/events/bungee.jpg"},{id:"recentMedia",url:"../img/recent/rm1.jpg"},{id:"recentMedia",url:"../img/recent/rm2.jpg"},{id:"recentMedia",url:"../img/recent/rm3.jpg"},{id:"recentMedia",url:"../img/recent/rm4.jpg"},{id:"recentMedia",url:"../img/recent/rm5.jpg"},{id:"recentMedia",url:"../img/recent/rm6.jpg"},{id:"recentMedia",url:"../img/recent/rm7.jpg"},{id:"recentMedia",url:"../img/recent/rm8.jpg"},{id:"recentMedia",url:"../img/recent/rm9.jpg"},{id:"recentMedia",url:"../img/recent/rm10.jpg"},{id:"recentMedia",url:"../img/recent/rm11.jpg"},{id:"recentMedia",url:"../img/recent/rm12.jpg"},{id:"recentMedia",url:"../img/recent/rm13.jpg"},{id:"recentMedia",url:"../img/recent/rm14.jpg"}]};app.load_images=function(){for(var e=0;e<app.images.length;e++){var t=new Image;t.onload=function(e,t){return function(){app.set_image(e,t)}}(e,t),t.src=app.images[e].url}},app.set_image=function(e,t){var n=app.images[e].id,i=document.querySelector("#"+n);if("recentMedia"==n){var o=document.createElement("div");o.classList.add("rmimg_container");var a=document.createElement("span");a.classList.add("helper"),o.appendChild(a),o.appendChild(t),i.appendChild(o)}else i.appendChild(t)},app.load_images(),matchMedia&&(app.mq=window.matchMedia("(max-width: 1154px)")),window.addEventListener("scroll",function(e){var t=window.pageYOffset||document.documentElement.scrollTop;t>app.lastScrollTop?app.home.getBoundingClientRect().top<=40&&app.home.getBoundingClientRect().bottom>40?(app.unhighlight(),app.lastHighlighted="home",app.navOpt[0].style.color="#f42d6a"):app.about_us.getBoundingClientRect().top<=40&&app.about_us.getBoundingClientRect().bottom>40?(app.unhighlight(),app.lastHighlighted="about_us",app.navOpt[1].style.color="#f42d6a"):app.mmf.getBoundingClientRect().top<=40&&app.mmf.getBoundingClientRect().bottom>40?(app.unhighlight(),app.lastHighlighted="mmf",app.navOpt[2].style.color="#f42d6a"):app.livein.getBoundingClientRect().top<=40&&app.livein.getBoundingClientRect().bottom>40?(app.unhighlight(),app.lastHighlighted="livein",app.navOpt[3].style.color="#f42d6a"):app.footloose.getBoundingClientRect().top<=40&&app.footloose.getBoundingClientRect().bottom>40?(app.unhighlight(),app.lastHighlighted="footloose",app.navOpt[4].style.color="#f42d6a"):app.fs.getBoundingClientRect().top<=40&&app.fs.getBoundingClientRect().bottom>40?(app.unhighlight(),app.lastHighlighted="fs",app.navOpt[5].style.color="#f42d6a"):app.dayevents.getBoundingClientRect().top<=40&&app.dayevents.getBoundingClientRect().bottom>=0?(app.unhighlight(),app.lastHighlighted="dayevents",app.navOpt[6].style.color="#f42d6a"):app.photos.getBoundingClientRect().top<=40&&app.photos.getBoundingClientRect().bottom>=0&&(app.unhighlight(),app.lastHighlighted="photos",app.navOpt[7].style.color="#f42d6a"):app.photos.getBoundingClientRect().top<window.innerHeight-70&&app.photos.getBoundingClientRect().bottom>=window.innerHeight-70?(app.unhighlight(),app.lastHighlighted="photos",app.navOpt[7].style.color="#f42d6a"):app.dayevents.getBoundingClientRect().top<window.innerHeight-70&&app.dayevents.getBoundingClientRect().bottom>=window.innerHeight-70?(app.unhighlight(),app.lastHighlighted="dayevents",app.navOpt[6].style.color="#f42d6a"):app.fs.getBoundingClientRect().top<window.innerHeight-70&&app.fs.getBoundingClientRect().bottom>=window.innerHeight-70?(app.unhighlight(),app.lastHighlighted="fs",app.navOpt[5].style.color="#f42d6a"):app.footloose.getBoundingClientRect().top<window.innerHeight-70&&app.footloose.getBoundingClientRect().bottom>=window.innerHeight-70?(app.unhighlight(),app.lastHighlighted="footloose",app.navOpt[4].style.color="#f42d6a"):app.livein.getBoundingClientRect().top<window.innerHeight-70&&app.livein.getBoundingClientRect().bottom>=window.innerHeight-70?(app.unhighlight(),app.lastHighlighted="livein",app.navOpt[3].style.color="#f42d6a"):app.mmf.getBoundingClientRect().top<window.innerHeight-70&&app.mmf.getBoundingClientRect().bottom>=window.innerHeight-70?(app.unhighlight(),app.lastHighlighted="mmf",app.navOpt[2].style.color="#f42d6a"):app.about_us.getBoundingClientRect().top<window.innerHeight-70&&app.about_us.getBoundingClientRect().bottom>=window.innerHeight-70?(app.unhighlight(),app.lastHighlighted="about_us",app.navOpt[1].style.color="#f42d6a"):app.home.getBoundingClientRect().top<window.innerHeight-70&&app.home.getBoundingClientRect().bottom>=window.innerHeight-70&&(app.unhighlight(),app.lastHighlighted="home",app.navOpt[0].style.color="#f42d6a"),app.lastScrollTop=t},!1),app.unhighlight=function(){switch(app.lastHighlighted){case"home":app.navOpt[0].style.color="#9fa0ab";break;case"about_us":app.navOpt[1].style.color="#9fa0ab";break;case"mmf":app.navOpt[2].style.color="#9fa0ab";break;case"livein":app.navOpt[3].style.color="#9fa0ab";break;case"footloose":app.navOpt[4].style.color="#9fa0ab";break;case"fs":app.navOpt[5].style.color="#9fa0ab";break;case"dayevents":app.navOpt[6].style.color="#9fa0ab";break;case"photos":app.navOpt[7].style.color="#9fa0ab"}},app.scrollWin=function(e){app.mq.matches&&app.navigation[0].classList.remove("show_nav"),app.scrollIt(document.getElementById(e).offsetTop-40,800,"easeInOutCubic")},app.scrollIt=function(e,t,n,i){function o(){var e="now"in window.performance?performance.now():(new Date).getTime(),n=Math.min(1,(e-p)/t),l=n<.5?4*n*n*n:(n-1)*(2*n-2)*(2*n-2)+1;window.scroll(0,Math.ceil(l*(r-a)+a)),window.pageYOffset!==r?requestAnimationFrame(o):i&&i()}var a=window.pageYOffset,p="now"in window.performance?performance.now():(new Date).getTime(),l=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight),g=window.innerHeight||document.documentElement.clientHeight||document.getElementsByTagName("body")[0].clientHeight,d="number"==typeof e?e:e.offsetTop,r=Math.round(l-d<g?l-g:d);if("requestAnimationFrame"in window==!1)return window.scroll(0,r),void(i&&i());o()};