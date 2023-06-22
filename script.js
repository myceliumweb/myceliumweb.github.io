				var message = document.getElementById("message");
        var textBox = document.getElementById("message-text");
        var shadow = document.getElementById("shadow");
            
        function hide(elmnt) {
        	elmnt.style.visibility = "hidden";
        }
        function show(elmnt) {
        	elmnt.style.visibility = "visible";
        }
        function notify(text) {
        	textBox.innerHTML = text;
          show(shadow);
          show(message);
        }
var createAccount = `
	Create a new Mycelium Games account
  <br>
  Enter a new username:
  <input type="text" placeholder="Username" autocomplete="off">
  <br>
  Enter a new password:
  <input type="password" placeholder="Password" autocomplete="off">`;
var signIn = `
	Mycelium Games sign in / [<span class="link" onclick="notify(createAccount)">Create account</span>]
  <br>
  Enter your username:
  <input type="text" placeholder="Username" autocomplete="off">
  <br>
  Enter your password:
  <input type="password" placeholder="Password" autocomplete="off">
`;