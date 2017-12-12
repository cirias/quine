setTimeout(() => {
  console.log(s, JSON.stringify(s) + ';');
});

var s = "setTimeout(() => {\n  console.log(s, JSON.stringify(s) + ';');\n});\n\nvar s =";
