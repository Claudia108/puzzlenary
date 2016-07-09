import './main.css';
import Game from './game';
import Config from './config';


let game = new Game(Config.columns, Config.rows);
game.start();
