var app={images:[{id:"fe_orientation",url:"../img/events/fe_orientation.jpg",category:"event"},{id:"fresher",url:"../img/events/freshers.jpg",category:"event"},{id:"ganesh_festival",url:"../img/events/ganesh_festival.jpg",category:"event"},{id:"t-shirt_launch",url:"../img/events/t-shirt_launch.jpg",category:"event"},{id:"teachers_day",url:"../img/events/teachers_day.jpg",category:"event"},{id:"horizon",url:"../img/events/horizon.jpg",category:"event"},{id:"garba",url:"../img/events/garba.jpeg",category:"event"},{id:"vp_bday",url:"../img/events/vp_bday.jpeg",category:"event"},{id:"tie_saree",url:"../img/events/tie_saree.jpg",category:"event"},{id:"traditional",url:"../img/events/traditional.jpg",category:"event"},{id:"be_farewell",url:"../img/events/be_farewell.jpg",category:"event"},{id:"vp",url:"../img/committee/vijay_patil.jpg",category:"committee"},{id:"princi",url:"../img/committee/mukesh_patil.jpg",category:"committee"},{id:"gs",url:"../img/committee/gs.jpg",category:"committee"},{id:"cs",url:"../img/committee/cs.jpg",category:"committee"},{id:"treas",url:"../img/committee/treas.jpg",category:"committee"},{id:"sh",url:"../img/committee/sh.jpg",category:"committee"},{id:"mh",url:"../img/committee/mh.jpg",category:"committee"},{id:"th",url:"../img/committee/th.jpg",category:"committee"},{id:"pro",url:"../img/committee/pro.jpg",category:"committee"},{id:"pro_img",url:"../img/committee/pro-img.jpg",category:"contact"}]};app.load_images=function(){for(var e=0;e<app.images.length;e++){var t=new Image;t.onload=function(e,t){return function(){switch(app.images[e].category){case"event":app.set_event_image(e,t);break;case"committee":app.set_committee_image(e,t);break;case"contact":app.set_contact_image(e,t)}}}(e,t),t.src=app.images[e].url}},app.set_event_image=function(e,t){var i=app.images[e].id,a=document.querySelector("#"+i+" .event_image");a.appendChild(t),a.classList.add("img_gradient","fade_in")},app.set_committee_image=function(e,t){var i=app.images[e].id;document.querySelector("#"+i+" .member_img").appendChild(t),document.querySelector("#"+i+" .member_img img").classList.add("img_grayscale","fade_in"),document.querySelector("#"+i+" .member_info").classList.add("bg_fade")},app.set_contact_image=function(e,t){var i=app.images[e].id;document.querySelector("#"+i).appendChild(t);var a=document.querySelector("#"+i+" img");a.style.height="150px",a.style.width="150px",a.style.borderRadius="75px",a.classList.add("img_grayscale","fade_in")},app.load_images();