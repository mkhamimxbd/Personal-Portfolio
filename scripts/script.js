 const text = "Hi, I am Hamim.";
  const speed = 100;
  let i = 0;

  function typeWriter() {
    if (i < text.length) {
      document.getElementById("typewriter").textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  window.onload = typeWriter;