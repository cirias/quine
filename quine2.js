const b = () => {
  return JSON.stringify(a) + ';\nconsole.log(a, b());';
};
const a = "const b = () => {\n  return JSON.stringify(a) + ';\\nconsole.log(a, b());';\n};\nconst a =";
console.log(a, b());
