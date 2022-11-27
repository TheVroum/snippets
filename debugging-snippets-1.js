One liner (useable in console) :
document.querySelectorAll("*").forEach(e=>e.style.backgroundColor = `hsl(${Math.random()}turn ${Math.random() < 0.3 ? "60%" : "100%"} 50% / .7)`);

