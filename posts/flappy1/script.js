const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let bird = { x: 80, y: 250, radius: 15, velocity: 0, gravity: 0.4, lift: -8 };
let pipes = [];
let frame = 0;
let score = 0;
let best = localStorage.getItem("best") || 0;
let gameOver = false;

document.getElementById("best").innerText = best;

function flap() {
  if (gameOver) resetGame();
  else bird.velocity = bird.lift;
}

document.addEventListener("keydown", e => {
  if (e.code === "Space") flap();
});
canvas.addEventListener("click", flap);

function drawBird() {
  ctx.beginPath();
  const grd = ctx.createRadialGradient(bird.x, bird.y, 5, bird.x, bird.y, 20);
  grd.addColorStop(0, "#ffeb3b");
  grd.addColorStop(1, "#ff9800");
  ctx.fillStyle = grd;
  ctx.arc(bird.x, bird.y, bird.radius, 0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();
  // Eye
  ctx.fillStyle = "#000";
  ctx.beginPath();
  ctx.arc(bird.x + 6, bird.y - 5, 3, 0, Math.PI * 2);
  ctx.fill();
}

function drawPipes() {
  ctx.fillStyle = "#2ecc71";
  pipes.forEach(pipe => {
    ctx.fillRect(pipe.x, 0, pipe.width, pipe.top);
    ctx.fillRect(pipe.x, pipe.bottom, pipe.width, canvas.height - pipe.bottom);
  });
}

function update() {
  if (gameOver) return;

  frame++;
  bird.velocity += bird.gravity;
  bird.y += bird.velocity;

  if (frame % 90 === 0) {
    const gap = 130;
    const top = Math.random() * (canvas.height / 2);
    pipes.push({
      x: canvas.width,
      width: 60,
      top: top,
      bottom: top + gap
    });
  }

  pipes.forEach(pipe => {
    pipe.x -= 2.5;

    if (pipe.x + pipe.width === Math.floor(bird.x)) {
      score++;
      document.getElementById("score").innerText = score;

      if (score === 20) showRedeemCode();
    }

    // collision
    if (
      bird.x + bird.radius > pipe.x &&
      bird.x - bird.radius < pipe.x + pipe.width &&
      (bird.y - bird.radius < pipe.top || bird.y + bird.radius > pipe.bottom)
    ) {
      gameOver = true;
      endGame();
    }
  });

  // bird hits ground or ceiling
  if (bird.y + bird.radius > canvas.height || bird.y - bird.radius < 0) {
    gameOver = true;
    endGame();
  }

  pipes = pipes.filter(pipe => pipe.x + pipe.width > 0);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBird();
  drawPipes();
}

function loop() {
  update();
  draw();
  requestAnimationFrame(loop);
}

function endGame() {
  best = Math.max(best, score);
  localStorage.setItem("best", best);
  document.getElementById("best").innerText = best;

  ctx.fillStyle = "rgba(0,0,0,0.6)";
  ctx.fillRect(0, canvas.height / 2 - 40, canvas.width, 80);
  ctx.fillStyle = "#fff";
  ctx.textAlign = "center";
  ctx.font = "22px Poppins";
  ctx.fillText("Game Over! Click or Space to Retry", canvas.width / 2, canvas.height / 2);
}

function resetGame() {
  pipes = [];
  score = 0;
  bird.y = 250;
  bird.velocity = 0;
  gameOver = false;
  document.getElementById("score").innerText = score;
}

function showRedeemCode() {
  const code = genCode();
  localStorage.setItem("lastCode", code);
  document.getElementById("redeemCode").innerText = code;
  document.getElementById("popup").classList.remove("hidden");
}

function genCode() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let code = "";
  for (let i = 0; i < 16; i++) {
    if (i % 4 === 0 && i !== 0) code += "-";
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}

function closePopup() {
  document.getElementById("popup").classList.add("hidden");
}

loop();
