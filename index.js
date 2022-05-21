import emoji from './emoji.js';
import data from './data.js';
import style from './style.js';

export const ftext =  data.title.stl + " " + data.named.tl + " " + emoji.happy.em + "\n" + data.subtitle.stl + "\n";
export const stext = "\n" + data.body_head.bdf + "\n" + data.body_main.bdf  +  emoji.cute.em + "\n";
export const ttext = "\n" + data.body_footer.bdt + "\n" + data.footer.bdt + "\n" + emoji.bye.em + "\n";
export const fotext = "\n" + data.contact.ctt;