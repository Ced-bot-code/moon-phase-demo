# 🌙 Moon Phase Visualizer

An interactive **Moon phase simulator** built entirely with **JavaScript** and the **HTML Canvas API**. Observe how the Moon looks at different phases, rotations, distances, and altitudes in real-time. The visualizer also dims the Moon automatically when it is below the horizon (altitude < 0°), simulating its natural appearance.

## Features

- **Visualize All Moon Phases** – From New Moon to Full Moon, including waxing and waning phases.  
- **Interactive Sliders** – Adjust phase, rotation, distance, and altitude to see immediate visual changes.  
- **Illumination Display** – Shows the percentage of the Moon’s surface that is illuminated.  
- **Horizon Simulation** – Moon dims automatically when below the horizon (altitude < 0°).  
- **Responsive Design** – Works on desktop and mobile devices.  
- **Pure JavaScript Implementation** – No frameworks or external libraries needed.  

## How It Works

- The Moon is drawn on a **Canvas element** with shapes and shading.  
- **Phase slider** controls the illuminated fraction of the Moon.  
- **Distance slider** affects the Moon’s apparent size.  
- **Rotation slider** changes the Moon’s orientation.  
- **Altitude slider** changes brightness: when the Moon is below the horizon, it appears dimmed or dark, mimicking reality.  

## Getting Started

1. Clone or download the repository.  
2. Open `index.html` in a modern web browser.  
3. Use the sliders under the **controls panel** to adjust:
   - **Phase** – Set the Moon’s phase.  
   - **Rotation** – Rotate the Moon.  
   - **Distance** – Adjust apparent size.  
   - **Altitude** – Dim or brighten the Moon based on elevation (below horizon = darker).  
4. Watch the Moon update in real-time with phase, illumination, and horizon effects.

## Technologies Used

- HTML5  
- CSS3  
- JavaScript (Canvas API)  

## Author

**Cedie Camomot** – Original implementation. License details in repository.

## License

[MIT License](LICENSE) – Free to use, modify, and share.
