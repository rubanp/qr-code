var h=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)};var c=(e,t,i)=>(h(e,t,"read from private field"),i?i.call(e):t.get(e)),l=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},u=(e,t,i,n)=>(h(e,t,"write to private field"),n?n.call(e,i):t.set(e,i),i);const p=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function i(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=i(o);fetch(o.href,r)}};p();const m=document.createElement("style");m.textContent="*,::after,::before{box-sizing:border-box}blockquote,body,dd,dl,figure,h1,h2,h3,h4,p{margin:0;padding:0}ol,ul{list-style:none}html:focus-within{scroll-behavior:smooth}body{width:100%;min-height:100vh;text-rendering:optimizeSpeed;line-height:1.5}a:not([class]){text-decoration-skip-ink:auto}img,picture{max-width:100%;display:block}button,input,select,textarea{font:inherit}@media (prefers-reduced-motion:reduce){html:focus-within{scroll-behavior:auto}*,::after,::before{animation-duration:0s!important;animation-iteration-count:1!important;transition-duration:0s!important;scroll-behavior:auto!important}}button{cursor:pointer}";m.setAttribute("id","css-reset");var s,a;class f extends HTMLElement{constructor(){super();l(this,s,"");l(this,a,"");this.attachShadow({mode:"open"}),this.style.width="360px"}connectedCallback(){u(this,a,this.getAttribute("data-description")),u(this,s,this.getAttribute("data-title"));const i=this.shadowRoot;i.innerHTML=`
    <style id='css-main'>
        #container {
            background-color: var(--white);
            border-radius: 20px;
            padding: 1.25em;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            box-shadow: 0px 0px 10px 10px rgba(190,190,190,0.2);
        }
        #caption {
            padding: 1.25em;
        }
        img {
            width: 100%;
            aspect-ratio: 1 / 1;
            border-radius: 20px;
            margin-bottom: 0.75em;
        }
        h1 {
            font-family:var(--font);
            font-weight:var(--bold-weight);
            font-size: 1.5rem;
            margin-bottom: 0.75em;
        }
        p {
            font-size: 1rem;
            font-family:var(--font);
            font-weight:var(--regular-weight);
            color: grey;
        }
    </style>
    <div id="container">
        <img src="./static/qr-code.png" alt="QR Code">
        <div id="caption">
            <h1>${c(this,s)}</h1>
            <p>${c(this,a)}</p>
        </div>
    </div>
    `,i.prepend(m)}}s=new WeakMap,a=new WeakMap;customElements.define("x-card",f);
