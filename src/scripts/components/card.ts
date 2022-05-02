import minireset from '../minireset';

class Card extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(minireset);
    const component = document.createElement('div') as HTMLDivElement;
    component.innerHTML = `
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
        <img src="./assets/qr-code.png" alt="QR Code">
        <div class="caption">
            <h1>Improve your front-end skills by building projects</h1>
            <p>Scan the QR code to visit Frontend
            Mentor and take your coding skills to
            the next level</p>
        </div>
    </div>
    `;
    shadow.appendChild(component);
  }
}
export default Card;
