(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(81),r=n.n(o),s=n(645),a=n.n(s)()(r());a.push([e.id,"* {\n    font-size: 20px;\n    background-color: rgb(170, 221, 241);\n    text-align: center;\n    transition-duration: 0.2s;\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n\na {\n    text-decoration: none;\n}\n\nh1 {\n    font-size: 32px;\n}\n\nbutton {\n    background-color: whitesmoke;\n    color: black;\n    border: 2px solid #555555;\n    border-radius: 12px;\n    transition-duration: 0.4s;\n    width: 16%;\n    height: 70px;\n    margin-top: 10px;\n    margin-left: 1%;\n    margin-right: 1%;\n    cursor: pointer;\n}\n\nbutton:hover {\n    background-color: #555555;\n    color: white;\n}\n\n#headers {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n}\n\n#content {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n}\n\n.left, .right {\n    display: flex;\n    flex-direction: column;\n}\n\n.row {\n    display: flex;\n    flex-direction: row;\n}\n\n.box {\n    padding: 20px;\n    border: 1.5px black solid;\n}",""]);const i=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,s){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var i=0;i<this.length;i++){var l=this[i][0];null!=l&&(a[l]=!0)}for(var d=0;d<e.length;d++){var c=[].concat(e[d]);o&&a[c[0]]||(void 0!==s&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=s),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),r&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=r):c[4]="".concat(r)),t.push(c))}},t}},81:e=>{e.exports=function(e){return e[1]}},654:(e,t,n)=>{n.r(t),n.d(t,{default:()=>b});var o=n(379),r=n.n(o),s=n(795),a=n.n(s),i=n(569),l=n.n(i),d=n(565),c=n.n(d),h=n(216),u=n.n(h),p=n(589),m=n.n(p),f=n(426),g={};g.styleTagTransform=m(),g.setAttributes=c(),g.insert=l().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=u(),r()(f.Z,g);const b=f.Z&&f.Z.locals?f.Z.locals:void 0},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var s={},a=[],i=0;i<e.length;i++){var l=e[i],d=o.base?l[0]+o.base:l[0],c=s[d]||0,h="".concat(d," ").concat(c);s[d]=c+1;var u=n(h),p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)t[u].references++,t[u].updater(p);else{var m=r(p,o);o.byIndex=i,t.splice(i,0,{identifier:h,updater:m,references:1})}a.push(h)}return a}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var s=o(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<s.length;a++){var i=n(s[a]);t[i].references--}for(var l=o(e,r),d=0;d<s.length;d++){var c=n(s[d]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}s=l}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var s=n.sourceMap;s&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var s=t[o]={id:o,exports:{}};return e[o](s,s.exports,n),s.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{function e(e,t){const n=e.gameboard;n.allShips=[];const o=[2,3,3,4,5];for(let e=0;e<o.length;e++){let t=r(o[e]);const s=t[0],a=t[1];n.placeShip(o[e],s,a)}function r(e){let t=Math.floor(10*Math.random()),o=Math.floor(Math.random()*(10-e)),s=Math.random()>.5,a=!0;for(let r=o;r<o+e;r++)s?""!==n.board[t][r].hasShip&&(a=!1):""!==n.board[r][t].hasShip&&(a=!1);return a?s?[[t,o],s]:[[o,t],s]:r(e)}}function t(){const e=document.getElementById("left"),t=document.getElementById("right");e.textContent="",t.textContent="";for(let n=0;n<10;n++){const n=document.createElement("div");n.className="row";const o=document.createElement("div");o.className="row";for(let e=0;e<10;e++){const e=document.createElement("div");e.className="box";const t=document.createElement("div");t.className="box",n.appendChild(e),o.appendChild(t)}e.appendChild(n),t.appendChild(o)}}class o{constructor(e,t){this.length=e,this.shipId=t,this.hits=[],this.sunk=!1}hit(e){this.hits.push(e)}isSunk(){return this.sunk=this.hits.length==this.length,this.sunk}}class r{constructor(){this.board=[],this.allShips=[],this.createBoard()}createBoard(){for(let e=0;e<10;e++){this.board[e]=[];for(let t=0;t<10;t++)this.board[e][t]={hasShip:"",isShot:!1}}}placeShip(e,t,n){const r=this.allShips.length,s=new o(e,r);this.allShips.push(s);let a=t[0],i=t[1];for(let t=0;t<e;t++)n?this.board[a][i+t].hasShip=r:this.board[a+t][i].hasShip=r}receiveAttack(e){let t=e[0],n=e[1];if(!this.board[t][n].isShot&&(this.board[t][n].isShot=!0,""!==this.board[t][n].hasShip)){const o=this.allShips[this.board[t][n].hasShip];o.hit(e),o.isSunk()&&console.log("ship sunk")}return this.checkAllSunk()}checkAllSunk(){for(let e=0;e<this.allShips.length;e++)if(!this.allShips[e].sunk)return!1;return!0}}class s{constructor(){this.gameboard=new r,this.movesMade=[]}attack(e,t,n){e.gameboard.receiveAttack([t,n])}}function a(e){const t=document.getElementById("left");for(let n=0;n<10;n++){const o=t.childNodes[n];for(let t=0;t<10;t++){const r=o.childNodes[t];""!==e.gameboard.board[n][t].hasShip?r.style.backgroundColor="grey":r.style.backgroundColor="transparent"}}}n(654);const i=document.getElementById("main"),l=document.createElement("h1");l.textContent="Battleship",i.appendChild(l);const d=document.createElement("headers");d.id="headers";const c=document.createElement("p");c.textContent="Your Board",d.appendChild(c);const h=document.createElement("p");h.textContent="Enemy's Board",d.appendChild(h),i.appendChild(d);const u=document.createElement("div");u.id="content",u.className="content",i.appendChild(u);const p=document.createElement("button");p.id="randomize",p.className="randomize",p.textContent="Randomize",p.addEventListener("click",(()=>{m.disabled=!1,m.style.cursor="pointer",g.textContent="Press play to begin.",N=new s,C=new s,t(),e(N),e(C),a(N)})),i.appendChild(p);const m=document.createElement("button");m.id="play",m.className="play",m.textContent="Play",m.disabled=!0,m.style.cursor="not-allowed",i.appendChild(m),m.addEventListener("click",(()=>{m.style.cursor="not-allowed",m.disabled=!0,p.style.cursor="not-allowed",p.disabled=!0,function(e,t){const n=document.getElementById("message"),o=document.getElementById("left"),r=document.getElementById("right");i(),n.textContent="Click on the enemy's grid to fire upon their ships.";for(let e=0;e<r.childNodes.length;e++){const o=r.childNodes[e];for(let r=0;r<o.childNodes.length;r++){let l=o.childNodes[r];function d(){""!==t.gameboard.board[e][r].hasShip?l.style.backgroundColor="lightgreen":l.style.backgroundColor="rgb(255, 25, 25)";const o=t.gameboard.receiveAttack([e,r]);a(),o&&(n.textContent="You won! All enemy ships sunk.",i()),l.outerHTML=l.outerHTML,s()}t.gameboard.board[e][r].isShot||(l.addEventListener("click",d),l.addEventListener("mouseover",(()=>{l.style.backgroundColor="lightgrey"})),l.addEventListener("mouseout",(()=>{l.style.backgroundColor="transparent"})))}}function s(){let t=Math.floor(10*Math.random()),r=Math.floor(10*Math.random());if(e.gameboard.board[t][r].isShot)s();else{const s=e.gameboard.receiveAttack([t,r]);""!==e.gameboard.board[t][r].hasShip?o.childNodes[t].childNodes[r].style.backgroundColor="lightgreen":o.childNodes[t].childNodes[r].style.backgroundColor="rgb(255, 25, 25)",function(){const t=e.gameboard.allShips;for(let n=0;n<t.length;n++)if(t[n].sunk)for(let t=0;t<o.childNodes.length;t++){const r=o.childNodes[t];for(let o=0;o<r.childNodes.length;o++)e.gameboard.board[t][o].hasShip===n&&(r.childNodes[o].style.backgroundColor="green")}}(),s&&(n.textContent="You Lost! All your ships sunk.",i())}}function a(){const e=t.gameboard.allShips;for(let n=0;n<e.length;n++)if(e[n].sunk)for(let e=0;e<r.childNodes.length;e++){const o=r.childNodes[e];for(let r=0;r<o.childNodes.length;r++)t.gameboard.board[e][r].hasShip===n&&(o.childNodes[r].style.backgroundColor="green")}}function i(){for(let e=0;e<r.childNodes.length;e++){const t=r.childNodes[e];for(let e=0;e<t.childNodes.length;e++){const n=t.childNodes[e];n.outerHTML=n.outerHTML}}}}(N,C)}));const f=document.createElement("button");f.id="reset",f.className="reset",f.textContent="Reset",f.addEventListener("click",(()=>{m.style.cursor="not-allowed",m.disabled=!0,p.style.cursor="pointer",p.disabled=!1,x()})),i.appendChild(f);const g=document.createElement("p");g.id="message",g.className="message",g.textContent="temp",i.appendChild(g);const b=document.createElement("p");b.id="info",b.className="message",b.textContent="Ship Piece [Size] : Carrier [5] | Battleship [4] | Destroyer [3] | Submarine [3] | Patrol Boat [2]",i.appendChild(b);const y=document.createElement("div");y.className="left",y.id="left",u.appendChild(y);const v=document.createElement("div");v.className="right",v.id="right",u.appendChild(v);let N=new s,C=new s;function x(){g.textContent="Place Your Battleships or Randomize. Right click in your grid to rotate ship.",N=new s,C=new s,t(),function(e){const t=document.getElementById("play"),n=document.getElementById("left"),o=document.getElementById("message"),r=e.gameboard,s=[5,4,3,3,2];function i(){for(let e=0;e<n.childNodes.length;e++){const t=n.childNodes[e];for(let e=0;e<t.childNodes.length;e++){const n=t.childNodes[e];n.outerHTML=n.outerHTML}}a(e)}let l=!0;!function d(c){if(i(),c===s.length)a(e),o.textContent="Press play to begin.",t.style.cursor="pointer",t.disabled=!1;else{const t=s[c];function o(e){e.preventDefault(),l=!l,i(),n.removeEventListener("contextmenu",o),d(c)}function h(){i();for(let s=0;s<n.childNodes.length;s++){const i=n.childNodes[s];for(let h=0;h<i.childNodes.length;h++){const u=i.childNodes[h];let p=!0;for(let n=h;n<h+t;n++)if(n>=10||""!==e.gameboard.board[s][n].hasShip){p=!1;break}p&&(u.addEventListener("click",(()=>{r.placeShip(t,[s,h],l);for(let e=h;e<h+t;e++)i.childNodes[e].style.backgroundColor="grey";n.removeEventListener("contextmenu",o),d(c+1)})),u.addEventListener("mouseover",(()=>{for(let e=h;e<h+t;e++)i.childNodes[e].style.backgroundColor="lightgrey"})),u.addEventListener("mouseout",(()=>{for(let e=h;e<h+t;e++)i.childNodes[e].style.backgroundColor="transparent";a(e)})))}}}function u(){i();for(let s=0;s<n.childNodes.length;s++){const i=n.childNodes[s];for(let h=0;h<i.childNodes.length;h++){const u=i.childNodes[h];let p=!0;for(let n=s;n<s+t;n++)if(n>=10||""!==e.gameboard.board[n][h].hasShip){p=!1;break}p&&(u.addEventListener("mouseover",(()=>{for(let e=s;e<s+t;e++)n.childNodes[e].childNodes[h].style.backgroundColor="lightgrey"})),u.addEventListener("mouseout",(()=>{for(let e=s;e<s+t;e++)n.childNodes[e].childNodes[h].style.backgroundColor="transparent";a(e)})),u.addEventListener("click",(()=>{r.placeShip(t,[s,h],l);for(let e=s;e<s+t;e++)n.childNodes[e].childNodes[h].style.backgroundColor="grey";n.removeEventListener("contextmenu",o),d(c+1)})))}}}n.addEventListener("contextmenu",o),l?h():u()}}(0)}(N),e(C),a(N)}x()})()})();