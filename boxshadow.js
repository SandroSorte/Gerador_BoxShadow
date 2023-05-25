const box = document.querySelector('#square');
const hr = document.querySelector('#horizontal');
const vt = document.querySelector('#vertical');
const bl = document.querySelector('#blur');
const sp = document.querySelector('#spread');
const color = document.querySelector('#cor');
const colorf = document.querySelector('#rgb')
const code = document.querySelector('#code')
const hrf = document.querySelector('#horizontal-value')
const vtf = document.querySelector('#vertical-value');
const blf = document.querySelector('#blur-value');
const spf = document.querySelector('#spread-value');

function updateBoxShadow(){
    const all = `${hr.value}px ${vt.value}px ${bl.value}px ${sp.value}px ${color.value}`;

    code.value = all;
    hrf.value = hr.value
    vtf.value = vt.value
    blf.value = bl.value
    spf.value = sp.value
    colorf.value = color.value
    box.style.boxShadow = all;
}
[hr, vt, bl, sp, color].forEach(el =>{
    el.oninput = updateBoxShadow;
})
