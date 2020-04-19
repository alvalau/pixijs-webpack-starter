import * as PIXI from 'pixi.js';
import './style.scss';

const app = new PIXI.Application({
  width: window.innerWidth,
  height: window.innerHeight
});

document.body.appendChild(app.view);

const cat = PIXI.Sprite.from('./assets/images/cat.png');
// cat.anchor.set(0.5);
cat.x = 0;
cat.y = 0;

app.stage.addChild(cat);
