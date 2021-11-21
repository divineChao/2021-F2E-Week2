import{d as N,o as c,b as u,e,k as i,l as v,h as p,r as A,m as C,p as I,w as P,g as $,q as j,v as Y,F as Z,s as W,t as m,n as M,x as K,y as q}from"./vendor.88342a52.js";import{u as H,g as V,S as T,a as J}from"./enum.2c6f9387.js";import{M as O}from"./map.8b187af7.js";import{_ as Q}from"./plugin-vue_export-helper.1a3abf93.js";var X="https://divinechao.github.io/2021-F2E-Week2/assets/home_hurry.3f21d96a.png";const t1={class:"GPS"},e1={key:0},i1=p("\u6309\u4E0BGPS\u8B93\u6211\u5011\u76F4\u63A5"),o1=e("br",null,null,-1),s1=p("\u5E6B\u60A8\u5B9A\u4F4D\u4F4D\u7F6E"),a1=e("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",width:"1em",height:"1em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 1200 1200"},[e("path",{d:"M0 972.138V556.629c2.192-43.973 37.788-75.724 76.898-76.252h186.106c53.196-40.854 90.897-97.554 142.165-138.611c18.094-14.432 32.095-30.479 42.003-48.142c32.214-63.281 12.695-136.954 58.481-187.399c92.008-39.482 202.231 15.751 233.279 102.423c24.405 70.78 8.052 141.366-22.294 203.877c109.856-.182 219.71.708 329.563 1.292c89.434 6.678 153.202 66.892 153.797 152.504c-.244 86.275-74.623 149.017-153.797 150.565h-129.24c-4.308 25.417-12.709 48.465-25.202 69.144c7.239 53.145-9.327 105.247-41.356 142.812c-17.576 306.75-419.443 124.761-569.952 120.193H76.898C32.617 1046.939.528 1011.445 0 972.138zm277.221 0c120.425 2.591 531.909 184.658 492.407-76.252c43.546-23.471 60.301-86.286 33.603-126.01c40.566-40.005 52.118-90.265 12.925-129.887c38.771 0 77.113-.216 115.023-.646c37.911-.431 76.253-.646 115.024-.646c44.371-.933 75.122-33.487 75.606-72.374c-1.014-45.976-35.914-75.137-75.606-75.606c-150.385-.008-298.632-1.276-438.126-1.292c12.555-100.763 132.769-237.585 10.017-316.963c-19.652-9.652-35.367-13.749-55.896-10.017c-3.446 1.723-5.385 3.447-5.816 5.17c-.431 1.723-1.076 4.523-1.938 8.4c-13.044 79.87-25.221 159.73-87.237 212.601c-68.263 52.343-108.514 134.749-186.752 168.014h-3.231l-.003 415.508z",fill:"currentColor"})],-1),n1=[i1,o1,s1,a1],c1=e("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},[e("path",{d:"M12 2C7.589 2 4 5.589 4 9.995C3.971 16.44 11.696 21.784 12 22c0 0 8.029-5.56 8-12c0-4.411-3.589-8-8-8zm0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4s4 1.79 4 4s-1.79 4-4 4z",fill:"white"})],-1),u1=p("GPS "),l1=[c1,u1],r1=N({emits:["GpsEvent"],setup(s,{emit:t}){const g=H();async function f(){console.log("getGPS"),navigator.geolocation||alert("\u6293\u4E0D\u5230\u60A8\u7684GPS\u8CC7\u6599"),await navigator.geolocation.getCurrentPosition(function(n){console.log("\u4F60\u7684gps",n.coords.latitude,n.coords.longitude),g.setLocation(n.coords.latitude,n.coords.longitude),t("GpsEvent")})}return(n,w)=>(c(),u("section",t1,[e("article",null,[!i(g).userLocation[0]&&!i(g).userLocation[1]?(c(),u("span",e1,n1)):v("",!0)]),e("article",{class:"GPS_circle",onClick:w[0]||(w[0]=B=>f())},l1)]))}});const l=s=>(K("data-v-19ff3eca"),s=s(),q(),s),d1={class:"content"},_1=p(".. "),h1={key:0,style:{position:"absolute",top:"0",left:"0",height:"100%",width:"100%"}},v1={class:"car-nav"},p1={class:"Homeselect"},g1=["value"],m1={key:0},w1=l(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",width:"1em",height:"1em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 1200 1200"},[e("path",{d:"M227.863 1200h415.508c43.973-2.192 75.725-37.788 76.253-76.898V936.995c40.854-53.196 97.553-90.897 138.61-142.165c14.432-18.094 30.479-32.095 48.142-42.003c63.281-32.214 136.955-12.695 187.399-58.481c39.482-92.008-15.751-202.231-102.423-233.279c-70.78-24.404-141.366-8.051-203.878 22.294c.182-109.856-.708-219.71-1.292-329.564C779.505 64.363 719.291.594 633.679 0c-86.275.244-149.017 74.623-150.565 153.796v129.241c-25.417 4.308-48.465 12.708-69.144 25.202c-53.145-7.24-105.247 9.327-142.811 41.356c-306.751 17.576-124.761 419.443-120.194 569.951v203.555c2.096 44.282 37.59 76.37 76.898 76.899zm0-277.222c-2.591-120.425-184.658-531.908 76.252-492.406c23.47-43.546 86.285-60.301 126.009-33.603c40.005-40.566 90.265-52.118 129.887-12.925c0-38.771.216-77.113.646-115.024s.646-76.252.646-115.024c.933-44.37 33.487-75.122 72.375-75.605c45.975 1.014 75.136 35.914 75.605 75.605c.008 150.385 1.276 298.632 1.292 438.126c100.763-12.555 237.585-132.769 316.963-10.017c9.652 19.652 13.749 35.367 10.017 55.896c-1.724 3.446-3.446 5.385-5.17 5.816c-1.723.431-4.523 1.076-8.4 1.938c-79.87 13.044-159.73 25.221-212.601 87.237c-52.343 68.263-134.749 108.514-168.013 186.752v3.231H227.863z",fill:"currentColor"})],-1)),y1=p(" \u9078\u64C7\u60F3\u67E5\u8A62\u7684\u7E23\u5E02 "),S1=[w1,y1],C1={class:"Homecar"},b1={class:"car-btns"},f1={key:0},B1=l(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",width:"1em",height:"1em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 1200 1200"},[e("path",{d:"M227.863 1200h415.508c43.973-2.192 75.725-37.788 76.253-76.898V936.995c40.854-53.196 97.553-90.897 138.61-142.165c14.432-18.094 30.479-32.095 48.142-42.003c63.281-32.214 136.955-12.695 187.399-58.481c39.482-92.008-15.751-202.231-102.423-233.279c-70.78-24.404-141.366-8.051-203.878 22.294c.182-109.856-.708-219.71-1.292-329.564C779.505 64.363 719.291.594 633.679 0c-86.275.244-149.017 74.623-150.565 153.796v129.241c-25.417 4.308-48.465 12.708-69.144 25.202c-53.145-7.24-105.247 9.327-142.811 41.356c-306.751 17.576-124.761 419.443-120.194 569.951v203.555c2.096 44.282 37.59 76.37 76.898 76.899zm0-277.222c-2.591-120.425-184.658-531.908 76.252-492.406c23.47-43.546 86.285-60.301 126.009-33.603c40.005-40.566 90.265-52.118 129.887-12.925c0-38.771.216-77.113.646-115.024s.646-76.252.646-115.024c.933-44.37 33.487-75.122 72.375-75.605c45.975 1.014 75.136 35.914 75.605 75.605c.008 150.385 1.276 298.632 1.292 438.126c100.763-12.555 237.585-132.769 316.963-10.017c9.652 19.652 13.749 35.367 10.017 55.896c-1.724 3.446-3.446 5.385-5.17 5.816c-1.723.431-4.523 1.076-8.4 1.938c-79.87 13.044-159.73 25.221-212.601 87.237c-52.343 68.263-134.749 108.514-168.013 186.752v3.231H227.863z",fill:"currentColor"})],-1)),k1=p(" \u85C9\u7531\u501F / \u9084\u8ECA\u7684\u6309\u9215\u4F86\u770B\u6240\u5269\u7684\u6578\u91CF\u5594 "),A1=[B1,k1],x1={class:"map_content"},E1={key:0,class:"Homeimg"},F1=l(()=>e("img",{src:X},null,-1)),D1=l(()=>e("h1",null,"\u8D95\u5FEB\u958B\u59CB\u9A0E\u4E0AUBike\u56DB\u8655\u65C5\u904A\u5427 !",-1)),L1=l(()=>e("p",null,"\u908A\u9A0E\u8173\u8E0F\u8ECA\u908A\u7528\u624B\u6A5F\u662F\u5F88\u5371\u96AA\u7684\u5594 (\xB4\uFF65\u03C9\uFF65`)",-1)),N1=[F1,D1,L1],$1={key:1,class:"HomeCurrentStation"},M1={class:"StationName"},H1={class:"StationNum"},V1=l(()=>e("h5",null,"\u53EF\u501F",-1)),R1={class:"number"},z1=l(()=>e("span",{class:"line"},"|",-1)),U1=l(()=>e("h5",null,"\u53EF\u9084",-1)),G1={class:"number"};var b;(function(s){s[s.city=0]="city",s[s.gps=1]="gps",s[s.undefined=2]="undefined"})(b||(b={}));const I1=N({setup(s){const t=H(),g=V(T),f=V(J),n=A();C(()=>t.userLocation),C(()=>t.userLocation[0]),C(()=>t.userLocation[0]);let w=C(()=>t.getHasLocation),B={Chiayi:[23.4791464,120.4389658],Hsinchu:[24.8074228,120.9640778],Kaohsiung:[22.6363163,120.3345007],KinmenCounty:[24.4511866,118.3781601],MiaoliCounty:[24.5471823,120.8215889],NewTaipei:[25.055992,121.4813674],PingtungCounty:[22.6763066,120.4952129],Taichung:[24.1463487,120.6634415],Tainan:[22.9933086,120.2041862],Taipei:[25.0497741,121.5206038],Taoyuan:[24.9903435,121.3000532]},y=A(2),R=t.nearAvailability,S=I({rent:0,return:0,name:"",address:""});function k(d){console.log("updateCurrentByUID");let o=R.find(_=>_.StationUID===d);S.rent=o==null?void 0:o.AvailableRentBikes,S.rent=o==null?void 0:o.AvailableReturnBikes;let a=t.bikeStations.find(_=>_.StationUID===d);S.name=a==null?void 0:a.StationName.Zh_tw,S.address=a==null?void 0:a.StationAddress.Zh_tw}function z(){t.userLocation&&t.getNearByStationData(t.userLocation[0],t.userLocation[1])}function U(){t.userLocation&&t.getNearByAvailabilityData(t.userLocation[0],t.userLocation[1])}async function G(){console.log("handleSelect"),n.value&&(t.setLocation(B[n.value][0],B[n.value][1]),x()),y.value=1}async function x(){console.log("handleGPS"),await z(),await U(),y.value=1}P(()=>t.nearAvailability,(d,o)=>{var a;console.log("\u8CC7\u6599\u8B8A\u66F4\u5C31update"),!!((a=t.nearAvailability[0])==null?void 0:a.StationUID)&&k(t.nearAvailability[0].StationUID)},{immediate:!0,deep:!0});let r=A(!0);function E(d){switch(d){case"rent":r.value=!0,t.setIsRent(!0),k(t.getSelectedBikeStation.StationUID);break;case"return":r.value=!1,t.setIsRent(!1),k(t.getSelectedBikeStation.StationUID)}}return(d,o)=>{var a,_,F,D;return c(),u("main",d1,[_1,i(w)&&i(y)===1?(c(),u("article",h1,[$(O,{location:[i(t).userLocation[0],i(t).userLocation[1]],stations:i(t).getNearByStations,availability:i(t).getNearByAvailability,isRent:i(t).getIsRent},null,8,["location","stations","availability","isRent"])])):v("",!0),e("article",v1,[e("div",p1,[j(e("select",{class:"form-control",value:"\u8F38\u5165\u60F3\u67E5\u8A62\u7684\u5730\u9EDE","onUpdate:modelValue":o[0]||(o[0]=h=>n.value=h),onChange:G},[(c(!0),u(Z,null,W(i(g),(h,L)=>(c(),u("option",{key:L,value:h},m(i(f)[L]),9,g1))),128))],544),[[Y,n.value]]),b?v("",!0):(c(),u("span",m1,S1))]),e("div",C1,[e("div",b1,[e("button",{type:"button",class:M(["btn-rent se_btn",{"bg-orange":i(r),"text-white":i(r)}]),onClick:o[1]||(o[1]=h=>E("rent"))},"\u501F\u8ECA",2),e("button",{type:"button",class:M(["btn-return se_btn",{"bg-green":!i(r),"text-white":!i(r)}]),onClick:o[2]||(o[2]=h=>E("return"))},"\u9084\u8ECA",2)]),b?v("",!0):(c(),u("span",f1,A1))])]),e("article",x1,[i(y)==2?(c(),u("article",E1,N1)):v("",!0),$(r1,{onGpsEvent:o[3]||(o[3]=h=>x())})]),i(t).getSelectedBikeStation.name!=null?(c(),u("article",$1,[e("div",M1,[e("h2",null,m(((a=i(t).getSelectedBikeStation)==null?void 0:a.name)||"\u8ACB\u9EDE\u64CA\u81EA\u884C\u8ECA\u7AD9\u9EDE"),1),e("h4",null,m((_=i(t).getSelectedBikeStation)==null?void 0:_.address),1)]),e("div",H1,[e("div",null,[V1,e("span",R1,m(((F=i(t).getSelectedBikeStation)==null?void 0:F.availableRent)||0),1)]),z1,e("div",null,[U1,e("span",G1,m(((D=i(t).getSelectedBikeStation)==null?void 0:D.availableReturn)||0),1)])])])):v("",!0)])}}});var W1=Q(I1,[["__scopeId","data-v-19ff3eca"]]);export{W1 as default};
