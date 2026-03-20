/*
 * Copyright (C) 2026 Cedie Camomot
 * All rights reserved.
 *
 * Moon Phase Demo - A simple tool to visualize the Moon's phases based on adjustable parameters.
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

// List of Moon phase names corresponding to the 8 phases
const phaseNames = [
  '🌑 New Moon',
  '🌒 Waxing Crescent',
  '🌓 First Quarter',
  '🌔 Waxing Gibbous',
  '🌕 Full Moon',
  '🌖 Waning Gibbous',
  '🌗 Last Quarter',
  '🌘 Waning Crescent'
];

/**
 * getPhaseKey - Returns the phase name based on the phase value (0 to 1)
 * 
 * @param {number} - Phase value (0 to 1) where 0 is New Moon and 1 is just before the next New Moon
 * @returns {string} Phase name based on the phase value (0 to 1)
 * 
 */

function getPhaseKey(p) {
  // Formula is an approximate form, not intended for precise or high accurate calculation
  let index = Math.floor(((p + 0.0625) % 1) * 8);
 
  return phaseNames[index];
}

/**
 * function drawMoon - Draws the Moon on a canvas based on the given parameters
 * 
 * @param {string} canvasId - The ID value of the canvas element
 * @param {Object} inputs - The "inputs" elements for adjusting Moon parameters
 * @param {number} apogee - The size of the Moon at apogee (default: 75)
 * @param {number} perigee - The size of the Moon at perigee (default: 95)
 * 
 */

function drawMoonPhase(canvasId, inputs, apogee = 75, perigee = 95) {
  const canvas = document.getElementById(canvasId)
      , ctx = canvas.getContext("2d")

  // Parse the input values for phase, angle, distance, and altitude
      , phaseNum = parseFloat(inputs.phase.value)
      , rotation = parseFloat(inputs.rotation.value)
      , dist = parseFloat(inputs.distance.value)
      , alt = parseFloat(inputs.altitude.value);

  // Calculate the radius of the Moon based on its distance from Earth, interpolating between apogee and perigee sizes
  const radius = Math.round(perigee - ((dist - 356400) / (406700 - 356400)) * (perigee - apogee))

  // The Moon appears dimmer when it's below the horizon (altitude < 0°).
  // Moon's mean altitude at the below horizon
        , MOON_BELOW_HORIZON_ALTITUDE= -0.125
        , light = alt < MOON_BELOW_HORIZON_ALTITUDE ? "#333" : "#e1e2e3"
        , dark = alt < MOON_BELOW_HORIZON_ALTITUDE ? "#050505" : "#111";
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const cx = Math.round(canvas.width / 2);
  const cy = Math.round(canvas.height / 2);

  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate(rotation * Math.PI / 180);

  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, Math.PI * 2);
  ctx.fillStyle = dark;
  ctx.fill();

  // Draw the light part of the Moon based on the phase
  let phaseKNum = Math.cos(phaseNum * 2 * Math.PI);
 
  // Formula to calculate the horizontal radius of the Moon 
  let terminator_k = Math.round(Math.abs(phaseKNum) * radius);

  ctx.beginPath();
  
  const EASTERN_LIGHT = [0, 0, radius, -Math.PI / 2, Math.PI / 2, false] // (0 to 0.5) - Light begin at the Eastern side of horizon
      , WESTERN_LIGHT = [0, 0, radius, Math.PI / 2, -Math.PI / 2, false] // (0.5 to 1) - Light ends at the Western side of horizon
      , PORTION = phaseNum <= 0.5 ? EASTERN_LIGHT : WESTERN_LIGHT;
  
  ctx.arc(...PORTION);
  ctx.fillStyle = light;
  ctx.fill();
 
  // Draw the terminator (the line between the light and dark sides) as an ellipse to create a smoother transition
  ctx.beginPath();
  ctx.ellipse(0, 0, terminator_k, radius, 0, 0, Math.PI * 2);

  // Helpers
  const brightNess = (phaseNum <= 0.25 || phaseNum >= 0.75) ? dark : light;

  // Fill the terminator with the appropriate brightness to create a smoother transition between the light and dark sides of the Moon
  ctx.fillStyle = brightNess;
  ctx.fill();
  ctx.restore();

}
