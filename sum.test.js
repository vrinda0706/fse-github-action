function add(a, b) {
  return a + b;
}

if (add(2, 3) === 5) {
  console.log("Test passed");
} else {
  console.log("Test failed");
  process.exit(1);
}