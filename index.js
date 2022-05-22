import emoji from './emoji.js';
import data from './data.js';
import colors from 'colors';

const style = colors.setTheme({
    nm: ['rainbow', 'bold'],
    txt: ['white', 'bold'],
    emj: ['yellow'],
    box: ['white'],
    cld: ['white','bold'],
    link: ['brightRed'],
    miniText: ['america','strikethrough']
});

export const fpart = `
 ${emoji.box_top.cld}
${emoji.box_left.cld} ${data.Name.nm}      ${emoji.box_right.cld}
${emoji.box_left.cld} ${data.Work.nm}   ${emoji.box_right.cld}
${emoji.box_left.cld} ${data.Age.nm}         ${emoji.box_right.cld}
 ${emoji.box_down.cld}
                        \\
                          ${emoji.good.emj}\n`;
export const spart = `
 ${emoji.box_top.box}${emoji.box_top.box}
${emoji.sbox_left.box}                                            ${emoji.sbox_right.box}
${emoji.sbox_left.box} E-mail: ${data.Email.link}   ${emoji.sbox_right.box}
${emoji.sbox_left.box} Github: ${data.Github.link}                            ${emoji.sbox_right.box}
${emoji.sbox_left.box} Linkedin: ${data.Linkedin.link}       ${emoji.sbox_right.box}
${emoji.sbox_left.box}                                            ${emoji.sbox_right.box}
 ${emoji.box_down.box}${emoji.box_down.box}
\n`.txt;

export const tpart = '                                 ' + emoji.secret.emj +` Domingo eu fiz 22 anos\n`.miniText;

export const fopart = `\n\nObrigada por visitar meu card! ${emoji.happy.emj}`.txt;

