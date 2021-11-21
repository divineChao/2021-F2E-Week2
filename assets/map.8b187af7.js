import{_ as v,s as y,a as k,b as S,c as R,d as M,e as L,f as B}from"./plugin-vue_export-helper.1a3abf93.js";import{u}from"./enum.2c6f9387.js";import{f as i,o as c,b as h,g as n,A as l,F as I,s as z,B as D,e as U,t as x,n as $,h as A}from"./vendor.88342a52.js";const C={components:{LMap:y,LIcon:k,LTileLayer:S,LMarker:R,LControlLayers:M,LTooltip:L,LPopup:B},props:["location","stations","availability","isRent"],emits:["MapEmit"],data(){return{zoom:16,iconWidth:25,iconHeight:40}},computed:{iconUrl(){return`https://placekitten.com/${this.iconWidth}/${this.iconHeight}`},iconSize(){return[this.iconWidth,this.iconHeight]},availabilityMap(){let e={};for(let t in this.availability)e[this.availability[t].StationUID]=this.availability[t];return e},stationMap(){let e={};for(let t in this.stations)e[this.stations[t].StationUID]=this.stations[t];return e}},methods:{log(e){console.log(e)},updateLocation(e){const t=u();let o=e.target._latlng.lat,s=e.target._latlng.lng;t.setLocation(o,s),t.getNearByStationData(o,s),t.getNearByAvailabilityData(o,s)},selectMarker(e){console.log("set bike station:",e);let t={};t.name=this.stationMap[e].StationName.Zh_tw,t.address=this.stationMap[e].StationAddress.Zh_tw,t.availableRent=this.availabilityMap[e].AvailableRentBikes,t.availableReturn=this.availabilityMap[e].AvailableReturnBikes,u().setSelectedBikeStation(t)},getRentReturnInfo(e){return this.availabilityMap[e]?this.isRent?this.availabilityMap[e].AvailableRentBikes:this.availabilityMap[e].AvailableReturnBikes:-1}}},N={style:{height:"100%",width:"100%"}},V=A(" \u4F60\u5728\u9019\u88E1 ");function P(e,t,o,s,r,p){const _=i("l-tile-layer"),g=i("l-control-layers"),d=i("l-icon"),m=i("l-marker"),f=i("l-popup"),b=i("l-map");return c(),h("div",N,[n(b,{modelValue:r.zoom,"onUpdate:modelValue":t[1]||(t[1]=a=>r.zoom=a),zoom:r.zoom,"onUpdate:zoom":t[2]||(t[2]=a=>r.zoom=a),center:o.location},{default:l(()=>[n(_,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),n(g),(c(!0),h(I,null,z(o.stations,a=>(c(),D(m,{key:a,"lat-lng":[a.StationPosition.PositionLat,a.StationPosition.PositionLon],onClick:j=>p.selectMarker(a.StationUID)},{default:l(()=>[n(d,null,{default:l(()=>[U("div",{class:$({dialogBox:!0,empty:this.getRentReturnInfo(a.StationUID)==0,rare:this.getRentReturnInfo(a.StationUID)>=1,enough:this.getRentReturnInfo(a.StationUID)>5})},x(this.getRentReturnInfo(a.StationUID)),3)]),_:2},1024)]),_:2},1032,["lat-lng","onClick"]))),128)),n(m,{"lat-lng":o.location,draggable:"",onMoveend:t[0]||(t[0]=a=>p.updateLocation(a))},{default:l(()=>[n(f,null,{default:l(()=>[V]),_:1})]),_:1},8,["lat-lng"])]),_:1},8,["modelValue","zoom","center"])])}var W=v(C,[["render",P]]);export{W as M};
