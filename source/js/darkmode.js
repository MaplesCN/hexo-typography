var d='<i class="fa-solid fa-lightbulb"></i>',m='<i class="fa-solid fa-moon"></i>',t="dark-toggler";$(function(){"on"===localStorage.getItem("darkMode")?(document.getElementById(t).innerHTML=d,$("html").addClass("dark-mode")):document.getElementById(t).innerHTML=m,$("#dark-toggler").click(function(){$("html").addClass("toggler"),$("html").toggleClass("dark-mode"),"on"===localStorage.getItem("darkMode")?(document.getElementById(t).innerHTML=m,localStorage.setItem("darkMode","off")):(document.getElementById(t).innerHTML=d,localStorage.setItem("darkMode","on"))})});