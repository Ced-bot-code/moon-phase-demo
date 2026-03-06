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

// List of Moon phase names corresponding to the 8 phases
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

/**
 * getPhaseKey - Returns the phase name based on the phase value (0 to 1)
 * 
 * @param {number} - Phase value (0 to 1) where 0 is New Moon and 1 is just before the next New Moon
 * @returns {string} Phase name based on the phase value (0 to 1)
 * 
 */

function getPhaseKey(p) {
  let index = Math.floor(((p + 0.0625) % 1) * 8);
  return phaseNames[index];
}

/**
 * function drawMoon - Draws the Moon on a canvas based on the given parameters
 * 
 * @param {string} canvasId - The ID of the canvas element
 * @param {Object} sliders - The slider elements for adjusting Moon parameters
 * @param {number} apogee - The size of the Moon at apogee (default: 75)
 * @param {number} perigee - The size of the Moon at perigee (default: 95)
 * 
 */
function drawMoon(canvasId, sliders, apogee = 75, perigee = 95) {
  const canvas = document.getElementById(canvasId)
        , ctx = canvas.getContext("2d") 

        , p = parseFloat(sliders.phase.value)      // Phase (0 to 1)
        , angle = parseFloat(sliders.angle.value)  // Rotation angle in degrees
        , dist = parseFloat(sliders.distance.value)// Distance from Earth in km
        , alt = parseFloat(sliders.altitude.value) // Altitude in degrees

  const minRadius = apogee; // Size at Apogee
  const maxRadius = perigee; // Size at Perigee

  // Linear interpolation of radius based on distance (356,400 km to 406,700 km)
  const radius = maxRadius - ((dist - 356400) / (406700 - 356400)) * (maxRadius - minRadius);

  // Adjust brightness based on altitude (dim when below horizon)
  const light = alt < 0 ? "#444" : "#e1e2e3"; // Mas natural nga dimming
  const dark = alt < 0 ? "#050505" : "#222";

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const cx = canvas.width / 2;
  const cy = canvas.height / 2;

  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate(angle * Math.PI / 180);

  // Background Disk (Shadow part)
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, Math.PI * 2);
  ctx.fillStyle = dark;
  ctx.fill();

  // Primary Semi-circle (Light part)
  ctx.beginPath();

  // Depending on the phase, we draw the light part on the right or left side
                                   
  /**
   *  If the phase is <= 0.5, the light part is on the right side (from -90° to 90°) at Eastern part of horizon.
   *  Otherwise, the light part is on the left side (from 90° to -90°) at Western part of horizon.
   *  This creates the correct orientation for the Moon phases as they appear in the sky.
   *  The use of Math.PI / 2 and -Math.PI / 2 ensures that the light part is correctly positioned based on the phase value.
   *  The false parameter indicates that we are drawing in a clockwise direction, which is important for the correct rendering of the phases.
   *  
   *  For example:
   *  - At New Moon (p = 0), the light part is on the right side, creating a crescent shape.
   *  - At First Quarter (p = 0.25), the light part is exactly half of the circle, creating a half-moon shape.
   *  - At Full Moon (p = 0.5), the light part covers the entire circle, creating a full moon shape.
   *  - At Last Quarter (p = 0.75), the light part is on the left side, creating another half-moon shape but in reverse
   * 
   */

  const EasternPhase = [0, 0, radius, -Math.PI / 2, Math.PI / 2, false]
       , WesternPhase = [0, 0, radius, Math.PI / 2, -Math.PI / 2, false]
       , phaseElement = p <= 0.5 ? EasternPhase : WesternPhase;

  ctx.arc(...phaseElement)
  ctx.fillStyle = light;
  ctx.fill();

  // Terminator (The Ellipse that creates the phase effect)
  let s = Math.cos(p * 2 * Math.PI);
  let rx = Math.abs(s) * radius;

  ctx.beginPath();
  ctx.ellipse(0, 0, rx, radius, 0, 0, Math.PI * 2);
  
  if (p <= 0.25 || p >= 0.75) {
    ctx.fillStyle = dark; // For Crescent phases
  }
  else{
    ctx.fillStyle = light; // For Gibbous phases
  }
  ctx.fill();
  
  ctx.restore();

}