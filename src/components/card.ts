import minireset from '../scripts/minireset';

class Card extends HTMLElement {
  #title: string = '';

  #description: string = '';

  #imgSource: string = '';

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.style.width = '360px';
  }

  connectedCallback() {
    this.#description = this.getAttribute('data-description') as string;
    this.#title = this.getAttribute('data-title') as string;
    this.#imgSource = this.getAttribute('data-img-src') as string;
    const shadow = this.shadowRoot as ShadowRoot;
    shadow.innerHTML = `
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
        <img src="${this.#imgSource}" alt="QR Code to https://www.frontendmentor.io/">
        <div id="caption">
            <h1>${this.#title}</h1>
            <p>${this.#description}</p>
        </div>
    </div>
    `;
    shadow.prepend(minireset);
  }
}
export default Card;
