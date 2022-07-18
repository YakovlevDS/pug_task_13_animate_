let pen_socialbutton_items = ["ZEzMpdj", "ZEzMpdj", "ZEzMpdj","ZEzMpdj", "LYPqaME", "OBPJKK", "KKPeOPm", "qBWVMop", "PoYepvR", "bpxgWZ", "evxZpZ", "MJKNJZ", "XPQyMo", "JXVpgp", "YNPaaQ", "QmXOOR", "MQRGOe", "zBLGYN", "mGGPXj", "VEZvdg", "XNQaym", "oXpWbd", "oPOVOL", "bqjBMv", "bvpprw", "oaWdOm", "bvgWrO", "ZMbLNM", "eZQKEr", "xywaoW", "yKOMmV", "YNyKpd", "ygNVYM", "QpwZqJ", "rNBZZqv", "gPmNwv", "pJjOGW", "Kxygqv", "QyBKvW", "azVXym", "obyLPe", "dNKKOw", "VPLgaV", "pNZzMg", "qJNRaL", "yNvKpp", "wgwdzr", "WNeEgZx", "LYPBQvW", "GRgZExW", "YzPxWyW", "LYEjxyG", "dyRjmmV", "ZEydQPx", "wvBEOYj", "abzegbx", "gOpvGwV", "GRJvoJR", "bGNKmBR", "ZEYoKBw", "WNbMjEW","wvBPvby","zYxdRQy","dyzyNQX","vYdyGOm","XWZgZxx","YzeYjbK"];
let pen_socialbutton_num = ["one", "two", "three", "four", "five", "six"];
let pen_socialbutton_randomItem = `<a class="u-random" href="https://${pen_socialbutton_items[Math.floor(Math.random() * pen_socialbutton_items.length)]}" target="_blank" style="background:white"><div class="u-card fas fa-dice-${pen_socialbutton_num[Math.floor(Math.random() * pen_socialbutton_num.length)]}"></div></a>`
let pen_socialbutton_theme_needed = document.body.parentNode.classList.contains(`theme_switchable`);
let pen_socialbutton_theme = pen_socialbutton_theme_needed ? (window.matchMedia(`(prefers-color-scheme: dark)`).matches ? `dark` : `light` ) : `none`;
document.body.className = pen_socialbutton_theme

let pen_socialbutton_theme_buttons = {
   none: {},
   light: {
      style:`border:none; background:#323133; color:white;`,
      innerHTML:`<i class="fas fa-lightbulb-slash"></i>`,
      title:`Use dark theme`
   },
   dark:{
      style:`border:none; background:white; color:#323133;`,
      innerHTML:`<i class="fas fa-lightbulb-on"></i>`,
      title:`Use light theme`
   }
}
var pen_socialbutton_button = pen_socialbutton_button || false;

const pen_socialbutton_theme_switch = () => {
   const el = document.getElementById(`theme_button`);
   pen_socialbutton_theme = pen_socialbutton_theme == `dark` ? `light` : `dark`;
   el.setAttribute(`style`, pen_socialbutton_theme_buttons[pen_socialbutton_theme].style)
   el.setAttribute(`title`, pen_socialbutton_theme_buttons[pen_socialbutton_theme].title)
   el.innerHTML = pen_socialbutton_theme_buttons[pen_socialbutton_theme].innerHTML
   
   document.body.className = pen_socialbutton_theme
}

let pen_socialbutton_re_hide_notification_timeout = null;



