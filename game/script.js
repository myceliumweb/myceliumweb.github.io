//variables
//loading part
var loadingScreen = document.getElementById("loading-screen");
var loadingAnimation = document.getElementsByTagName("h5")[0];
var more = document.getElementById("more");
//user info part
var user = {
	username: "Example_user",
  email: "Example_user@example.com",
  phone: "1234567890",
  timePlayed: "1748",
  browser: "Example browser",
  device: "Example computer",
  where: "Earth",
  mushrooms: "14",
  species: "3",
  income: "87.46",
  money: "23.00"
}
//in game part
var farm = document.getElementById("farm");
var inventory = document.getElementById("inventory");
var scavenge = document.getElementById("scavenge");
var finances = document.getElementById("finances");
var sell = document.getElementById("sell");
var purchases = document.getElementById("purchases");
var genetics = document.getElementById("genetics");
var achievements = document.getElementById("achievements");
var app = document.getElementById("app");
var about = document.getElementById("about");
var data = document.getElementById("data");
var settings = document.getElementById("settings");
var frames = document.getElementsByClassName("frame");
var menuButtons = document.getElementsByClassName("menu");
//page code
var farmPage = `<h6 class="light" style="text-align:center;">Your mushroom farm...</h6>`;
var inventoryPage = `
	<div style="text-align:center;width:80%;margin-left:10%;">
	<h4 class="dark bold" style="text-align:center;">Fungi inventory</h4>
  <h6 class="light">Coming soon...</h6>
  `;
var scavengePage = `
	<div style="text-align:center;width:80%;margin-left:10%;">
	<h4 class="dark bold" style="text-align:center;">Scavenge for mushrooms</h4>
  <h6 class="light">Coming soon...</h6>
  `;
var financesPage = `
	<div style="text-align:center;width:80%;margin-left:10%;">
	<h4 class="dark bold" style="text-align:center;">Manage finances</h4>
  <h6 class="light">Coming soon...</h6>
  `;
var sellPage = `
	<div style="text-align:center;width:80%;margin-left:10%;">
	<h4 class="dark bold" style="text-align:center;">Sell products</h4>
  <h6 class="light">Coming soon...</h6>
  `;
var purchasesPage = `
	<div style="text-align:center;width:80%;margin-left:10%;">
	<h4 class="dark bold" style="text-align:center;">Mycelium Store</h4>
  <h6 class="light">Coming soon...</h6>
  `;
var geneticsPage = `
	<div style="text-align:center;width:80%;margin-left:10%;">
	<h4 class="dark bold" style="text-align:center;">Genetic engineering</h4>
  <h6 class="light">Coming soon...</h6>
  `;
var achievementsPage = `
	<div style="text-align:center;width:80%;margin-left:10%;">
	<h4 class="dark bold" style="text-align:center;">Your achievements</h4>
  <h6 class="light">Coming soon...</h6>
  `;
var appPage = `
	<div style="text-align:center;width:80%;margin-left:10%;">
	<h4 class="dark bold" style="text-align:center;">Install the app!</h4>
  <h6 class="light">Install the free Mushroom Farm web app by clicking the button below or on the "Install" prompt in your browser's address bar.*</h6>
  <button class="button">Install app</button>
  <button class="menu" onclick="display(farm,farmPage,menuButtons[0])">No thanks</button>
  <br><br><br>
  <p class="light">*Only available on Google Chrome and Brave. Safari, Firefox, Edge, etc. do not support progressive web apps currently.</p>
  </div>
  `;
var aboutPage = `
	<div style="text-align:center">
	<h4 class="dark bold" style="text-align:center;">About the game</h4>
  <h6 class="light">Share the game with others!<br>
  <a href="sms:?&body=Try out this game for free! https://myceliumweb.github.io" target="_blank">
  	<button class="menu">Text a friend</button>
  </a>
  <a href="mailto:?subject=MUSHROOM FARM: grow your own mushrooms!&body=Try out this game for free! https://myceliumweb.github.io" target="_blank">
  	<button class="menu">Share by email</button>
  </a>
  </h6>
    <h6 class="light" style="width:80%;margin-left:10%;"><i class="dark">Mushroom Farm: a mycelium monstrocity</i>, created by Mycelium Games, is a free online, browser-based video game. Beginning the game with just one mushroom, you must scavenge for new varieties, collect fungi spores, harvest ever growing mushroom crops, and sell rare varieties to expand your mushroom empire. Collect a wide array of mushroom species, edible and poisonous, common or rare, and cultuvate them on your own mushroom farm. You'll never know if the next mushroom you discover will produce astronomical profits due to its exquisite culinary qualities or if it is a simple toadstool waiting to poison its next victim. <br><br><span class="dark">The only way to find out - try it yourself!</span><br>&nbsp;</h6>
  `;
var dataPage = `
	<div style="text-align:center;width:80%;margin-left:10%;">
	<h4 class="dark bold" style="text-align:center;">Data and privacy</h4>
  <h6 class="light">Mycelium Games takes online privacy seriously and does not collect any usage data on anyone remotely. All data collected by the Mushroom Farm game is stored privately, only in your browser, to ensure a better playing experience and save in-game progress. Clearing site data on this website will therefore erase all progress in the game and reset all settings to default. To protect your privacy, all information relating to you is not available to anyone else, not even Mycelium Games. <br><br> <span class="dark">Provided below is a summary of all private data associated with the game:</span><br>
  	<span style="text-align:left;">
    Username: ${user.username}<br>
    Email: ${user.email}<br>
    Phone: ${user.phone}<br>
  	Time played: ${user.timePlayed} seconds<br>
    Browser used: ${user.browser}<br>
    Device type: ${user.device}<br>
    Location: ${user.where}<br>
    Total mushrooms grown: ${user.mushrooms}<br>
    Total species discovered: ${user.species}<br>
    Total overall income: $${user.income}<br>
    Current funds: $${user.money}
    </span>
  </h6>
  </div>
`;
var settingsPage = `
	<div style="text-align:center;width:80%;margin-left:10%;">
	<h4 class="dark bold" style="text-align:center;">Game settings</h4>
  <h6 class="light">All game settings are currently restricted to default, more updates coming soon...</h6>
`;

//loading animation
var percent = 0;
setInterval(function() {
	loadingAnimation.innerHTML = loadingAnimation.innerHTML.split("<br>")[0] + "<br>" + percent + "%";
  percent++;
  if (percent > 100) {
  		loadingAnimation.innerHTML = loadingAnimation.innerHTML.split("<br>")[0] + "<br>100%";
      setTimeout(function(){loadingScreen.remove();},500);
  }
},20);
//loadingScreen.remove();

//hide and show
function hide(elmnt) {
	elmnt.style.visibility = "hidden";
}
function show(elmnt) {
	elmnt.style.visibility = "visible";
}

//toggle menu
more.style.visibility = "hidden";

function toggleMore(sourceButton) {
	if (more.style.visibility == "hidden") {
  	more.style.visibility = "visible";
    sourceButton.innerHTML = "Less <"
  } else {
  	more.style.visibility = "hidden";
    sourceButton.innerHTML = "More >"
  }
}

//display pages
function display(page,content,clicked) {
	for (let i = 0; i < frames.length; i++) {
  	frames[i].style.visibility = "hidden";
  }
  page.style.visibility = "visible";
  page.innerHTML = content;
  for (let i = 0; i < menuButtons.length; i++) {
  	menuButtons[i].style.textDecoration = "none";
  }
  clicked.style.textDecoration = "underline";
}

//MUSHROOM GENERATOR
var mushroom = {
	morel: "rgb(240, 169, 64)/rgb(240, 169, 64)",
  toadstool: "tomato/lightgrey",
  magic: "rgb(240, 169, 64)/white"
}

function generateMushroom(specifications,placement) {
	var capHeight = Math.floor(Math.random() * 125);
	var stemWidth = 20 + Math.floor(Math.random() * 10);
  var mushroomScale = (50 + Math.floor(Math.random() * 50)) / 100;
	var container = document.createElement("div");
  container.style.width = "100px";
  container.style.height = "150px";
  container.style.transform = "scale(" + mushroomScale + ")";
  container.innerHTML = `
  	<style>
    #cap {
    	margin: 0px;
      height: ${capHeight}px;
      width: 100px;
      border-radius: 50% 50% 5px 5px;
      background: ${specifications.split("/")[0]};
      overflow: hidden;
      animation: sway 15s infinite;
    }
    #highlight {
    	width: 50px;
      height: 50px;
      filter: blur(15px);
      z-index: 1;
      background: white;
      margin-left: 50%;
    }
    #shadow {
    	width: 50px;
      height: 50px;
      filter: blur(22.5px);
      z-index: 1;
      background: black;
      margin-top: ${capHeight - 80}px;
      margin-left: -10px;
    }
    #stem {
      margin-left: ${(100 - stemWidth) / 2}px;
      height: ${150 - capHeight}px;
      width: ${stemWidth}px;
      background: ${specifications.split("/")[1]};
      background-image: linear-gradient(to bottom right, rgb(0, 0, 0, 0.75), transparent);
      border-radius: 0px 0px 5px 5px;
    }
    @keyframes sway {
    	0% {transform: rotate(0deg) translateY(0px);}
      25% {transform: rotate(2deg) translateY(2px);}
      75% {transform: rotate(-2deg) translateY(4px);}
      100% {transform: rotate(0deg) translateY(0px);}
    }
    </style>
    <div id="cap">
    	<div id="highlight"></div>
      <div id="shadow"></div>
    </div>
    <div id="stem">
    </div>
  `;
  placement.appendChild(container);
}

display(about,aboutPage,menuButtons[10]);