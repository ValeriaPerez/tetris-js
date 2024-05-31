(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const y of s.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&r(y)}).observe(document,{childList:!0,subtree:!0});function n(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(t){if(t.ep)return;t.ep=!0;const s=n(t);fetch(t.href,s)}})();const x="/tetris-js/assets/tetris-3uvX0fkN.mp3",w=new window.Audio(x);function M(){w.volume=.2,w.play().catch(o=>{console.error("Error al reproducir el audio:",o)})}function O(){w.muted=!0}const c=[[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0]],d={down:"ArrowDown",left:"ArrowLeft",right:"ArrowRight",rotate:"ArrowUp"},u=[[[1,1],[1,1]],[[1,0],[1,0],[1,1]],[[1],[1],[1]],[[1]],[[1],[1]],[[1,1,0],[0,1,1]],[[0,1,1],[1,1,0]],[[1,1,1,1]],[[1,1,1],[0,1,0]],[[1,1,1],[1,0,0]],[[1,1,1],[0,0,1]]],p=20,h=14,S=30,l=document.querySelector("canvas"),f=l.getContext("2d");l.width=p*h;l.height=p*S;f.scale(p,p);let g=0;const e={position:{x:6,y:0},shape:u[Math.floor(Math.random()*u.length)]};let m=0,E=1e3;function A(o=0){const i=o-E;E=o,m+=i,m>1e3&&(e.position.y++,m=0,a()&&(e.position.y--,L(),v())),I(),window.requestAnimationFrame(A)}function I(){f.fillStyle="#000",f.fillRect(0,0,l.width,l.height),c.forEach((o,i)=>{o.forEach((n,r)=>{n===1&&(f.fillStyle="#fff",f.fillRect(r,i,1,1))})}),e.shape.forEach((o,i)=>{o.forEach((n,r)=>{n&&(f.fillStyle="red",f.fillRect(r+e.position.x,i+e.position.y,1,1))})}),document.querySelector("strong").innerHTML=g}document.addEventListener("keydown",o=>{if(o.key===d.left&&(e.position.x--,a()&&e.position.x++),o.key===d.right&&(e.position.x++,a()&&e.position.x--),o.key===d.down&&(e.position.y++,a()&&(e.position.y--,L(),v())),o.key===d.rotate){const i=e.shape[0].map((n,r)=>e.shape.map(t=>t[r]).reverse());e.shape=i,a()&&(e.shape=e.shape[0].map((n,r)=>e.shape.map(t=>t[r])))}});function a(){return e.shape.find((o,i)=>o.find((n,r)=>{var t;return n!==0&&((t=c[i+e.position.y])==null?void 0:t[r+e.position.x])!==0}))}function L(){e.shape.forEach((o,i)=>{o.forEach((n,r)=>{n===1&&(c[i+e.position.y][r+e.position.x]=1)})}),e.shape=u[Math.floor(Math.random()*u.length)],e.position.x=Math.floor(h/2)-Math.floor(e.shape[0].length/2),e.position.y=0,a()&&(window.alert("Game Over"),c.forEach((o,i)=>{c[i]=new Array(h).fill(0)}))}function v(){c.forEach((o,i)=>{o.every(n=>n!==0)&&(c.splice(i,1),c.unshift(new Array(h).fill(0)),g+=10)})}const P=document.querySelector("section"),R=document.getElementById("idStart"),B=document.getElementById("idMuted");R.addEventListener("click",()=>{P.remove(),M(),A()});B.addEventListener("click",()=>{O()});