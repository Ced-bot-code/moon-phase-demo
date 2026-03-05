/*
 * Moon Phase Visualizer
 * Copyright (C) 2026 Cedie Camomot
 * All rights reserved.
 *
 * Built with JavaScript and HTML Canvas.
 * Allows adjustable phase, rotation, distance, and altitude.
 * The Moon dims when below the horizon (altitude < 0°).
 *
 * This code is designed to be flexible. Developers may modify,
 * extend, or integrate it into their own projects.
 * 
 * Licensed under the BSD 2-Clause License.
 * Please refer to the full license terms for usage and distribution details.
 *
 */

const phaseNames = [
   'New Moon',
  'Waxing Crescent',
  'First Quarter',
  'Waxing Gibbous',
  'Full Moon',
  'Waning Gibbous',
  'Last Quarter',
  'Waning Crescent'
];

function getPhaseKey(p) {
  let index = Math.floor(((p + 0.0625) % 1) * 8);
  return phaseNames[index];
}

function drawMoon() {
  const p = parseFloat(sliders.phase.value);
  const angle = parseFloat(sliders.angle.value);
  const dist = parseFloat(sliders.distance.value);
  const alt = parseFloat(sliders.altitude.value);

  const radius = 85 - ((dist - 31.44) / (32.55 - 31.44)) * 10;
  const light = alt < 0 ? "#686869" : "#e1e2e3";
  const dark = alt < 0 ? "#111" : "#222";

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const cx = canvas.width / 2;
  const cy = canvas.height / 2;

  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate(angle * Math.PI / 180);

 
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, Math.PI * 2);
  ctx.fillStyle = dark;
  ctx.fill();
  ctx.beginPath();

  if(p <= 0.5){
    ctx.arc(0, 0, radius, -Math.PI / 2, Math.PI / 2, false); // Right side
  }
  else{
    ctx.arc(0, 0, radius, Math.PI / 2, -Math.PI / 2, false); // Left side
  }

  ctx.fillStyle = light;
  ctx.fill();

  
  let s = Math.cos(p * 2 * Math.PI);
  let rx = Math.abs(s) * radius;

  ctx.beginPath();

  ctx.ellipse(0, 0, rx, radius, 0, 0, Math.PI * 2);

  if(p <= 0.25 || p >= 0.75){
    ctx.fillStyle = dark;
  }
  else{
    ctx.fillStyle = light;
  }

  ctx.fill();

  ctx.restore();

  // Logic for Labels and Info
  const key = getPhaseKey(p);
  const illum = p <= 0.5 ? (p / 0.5) * 100 : ((1 - p) / 0.5) * 100;
  disp.innerHTML = `${key}`;
  details.innerHTML = `
    Illumination: <strong>${illum.toFixed(2)}%</strong><br>
    Distance: <strong>${(dist * 11782).toFixed(0)} km</strong><br>
    Altitude: <strong>${alt}°</strong>
  `;
}
