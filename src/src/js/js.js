
    function CustomAlert() {
      this.render = function(dialog) {
        var winW = window.innerWidth;
        var winH = window.innerHeight;
        var dialogoverlay = document.getElementById('dialogoverlay');
        var dialogbox = document.getElementById('dialogbox');
        dialogoverlay.style.display = "block";
        dialogoverlay.style.height = winH + "px";
        dialogbox.style.left = (winW / 2) - (550 * .5) + "px";
        dialogbox.style.top = "100px";
        dialogbox.style.display = "block"; 
        document.getElementById('dialogboxhead').innerHTML = "Реклама"; 
        document.getElementById('dialogboxbody').innerHTML = dialog;
        document.getElementById('dialogboxfoot').innerHTML = '<button onclick="Alert.ok()">OK</button>';
      }
      this.ok = function() {
        document.getElementById('dialogbox').style.display = "none";
        document.getElementById('dialogoverlay').style.display = "none";
      }
    }
    var Alertt = new CustomAlertt();
    //второй
    function CustomAlertt() {
      this.render = function(dialog) {
        var winW = window.innerWidth;
        var winH = window.innerHeight;
        var dialogoverlay_2 = document.getElementById('dialogoverlay_2');
        var dialogbox_2 = document.getElementById('dialogbox_2');
        dialogoverlay_2.style.display = "block";
        dialogoverlay_2.style.height = winH + "px";
        dialogbox.style.left = (winW / 2) - (550 * .5) + "px";
        dialogbox.style.top = "100px";
        dialogbox.style.display = "block"; 
        document.getElementById('dialogboxhead_2').innerHTML = "Реклама"; 
        document.getElementById('dialogboxbody_2').innerHTML = dialog;
        document.getElementById('dialogboxfoot_2').innerHTML = '<button onclick="Alert.ok()">OK</button>';
      }
      this.ok = function() {
        document.getElementById('dialogbox_2').style.display = "none";
        document.getElementById('dialogoverlay_2').style.display = "none";
      }
    }
    var Alert = new CustomAlert();

    

setInterval(() => {Alert.render("пейте чай с мёдом Master Honey")}, 150000);


document.getElementById("partners_link").onclick = function () {
  Alert.render("пейте чай с мёдом Master Honey");
};

  document.getElementById('buy_tea').onclick = function () {
    alert('К сожелению. Покупка данного товара сейчас невозможна.');
    };
    

  window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.nav_nav'),
    menuItem = document.querySelectorAll('.nav_link'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('nav_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('nav_active');
        })
    })
})

