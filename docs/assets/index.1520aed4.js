var m=(t,e,o)=>{if(!e.has(t))throw TypeError("Cannot "+o)};var d=(t,e,o)=>(m(t,e,"read from private field"),o?o.call(t):e.get(t)),l=(t,e,o)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,o)},u=(t,e,o,n)=>(m(t,e,"write to private field"),n?n.call(t,o):e.set(t,o),o);const h=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function o(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=o(i);fetch(i.href,r)}};h();const p=document.createElement("style");p.textContent="*,::after,::before{box-sizing:border-box}blockquote,body,dd,dl,figure,h1,h2,h3,h4,p{margin:0;padding:0}ol,ul{list-style:none}html:focus-within{scroll-behavior:smooth}body{width:100%;min-height:100vh;text-rendering:optimizeSpeed;line-height:1.5}a:not([class]){text-decoration-skip-ink:auto}img,picture{max-width:100%;display:block}button,input,select,textarea{font:inherit}@media (prefers-reduced-motion:reduce){html:focus-within{scroll-behavior:auto}*,::after,::before{animation-duration:0s!important;animation-iteration-count:1!important;transition-duration:0s!important;scroll-behavior:auto!important}}button{cursor:pointer}";var a,s;class f extends HTMLElement{constructor(){super();l(this,a,"");l(this,s,"");this.attachShadow({mode:"open"})}connectedCallback(){u(this,s,this.getAttribute("data-description")),u(this,a,this.getAttribute("data-title"));const o=this.shadowRoot,n=document.createElement("div");n.innerHTML=`
    <style>
        .container {
            background-color: var(--white);
            border-radius: 20px;
            padding: 1.25em;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            box-shadow: 0px 0px 5px 4px rgba(150,150,150,0.2);
        }
        .caption {
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
    <div class="container">
        <img src="./static/qr-code.png" alt="QR Code">
        <div class="caption">
            <h1>${d(this,a)}</h1>
            <p>${d(this,s)}</p>
        </div>
    </div>
    `,o.appendChild(n),o.prepend(p)}}a=new WeakMap,s=new WeakMap;customElements.define("x-card",f);
