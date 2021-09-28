const wrap = document.querySelector('.wrap');

const zoom = size => wrap.className = `wrap at${size}`;

setTimeout(() => {
  console.log($('iframe').contents());
}, 4000);