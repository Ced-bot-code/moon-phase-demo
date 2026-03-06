# 🌒 Moon Phase Visualizer

An interactive **Moon phase simulator** built with **JavaScript** and the **HTML Canvas API**.  
Adjust the Moon’s phase, rotation, distance, and altitude using intuitive sliders.  
The Moon dims automatically when placed below the horizon (altitude < 0°), mimicking its natural appearance.

## Features

- **Complete Lunar Phase Simulation** – Visualizes the Moon across its entire cycle, from New Moon to Full Moon, including waxing and waning phases.

- **Interactive Controls** – Interactive sliders allow users to adjust the Moon’s phase, rotation, distance, and altitude with immediate visual updates.

- **Illumination Indicator** – Displays the calculated percentage of the Moon’s illuminated surface.

- **Horizon Behavior Simulation** – The Moon gradually dims when its altitude falls below the horizon (altitude < 0°), simulating real observational conditions.

- **Responsive Interface** – Optimized to work smoothly on both desktop and mobile devices.

- **Lightweight JavaScript Engine** – Built entirely using vanilla JavaScript and the HTML Canvas API with no external libraries required.
  
## How It Works

- The Moon is drawn on an **HTML Canvas** using geometric shapes and shading techniques to simulate its appearance.
- The **Phase slider** adjusts the illuminated portion of the lunar disk to represent different Moon phases.
- The **Distance slider** changes the apparent size of the Moon, simulating how it may appear closer or farther away.
- The **Rotation slider** rotates the Moon’s orientation, allowing you to view the phase from different angles.
- The **Altitude slider** affects brightness — when the Moon goes below the horizon (altitude < 0°), its brightness decreases to imitate real viewing conditions.
  
## Getting Started

1. Clone or download the repository.
2. Open `index.html` in any modern web browser.
3. Use the sliders in the **control panel** to adjust the Moon’s appearance:
   - **Phase** – Changes the illuminated portion of the Moon.
   - **Rotation** – Rotates the Moon’s orientation.
   - **Distance** – Adjusts the Moon’s apparent size.
   - **Altitude** – Controls brightness; the Moon dims when placed below the horizon.
4. The Moon visualization updates instantly based on the selected slider values.

## Kickstarter

Want to use this Moon phase visualizer in your own project?

You can easily integrate the simulation into your application or website. Simply include the script and canvas element, then control the Moon’s appearance programmatically or through your own UI controls.

This project is lightweight, dependency-free, and designed to be easy to modify or embed in astronomy tools, educational apps, dashboards, or space-related visualizations.

## For Developers

If you're building an astronomy tool, educational project, or space-themed interface, you can integrate this Moon phase visualizer directly into your project.

The simulator is written in pure JavaScript and uses the HTML Canvas API, making it easy to customize, extend, or embed into existing web applications without external dependencies.

## Customization

The `drawMoon()` function acts as the core renderer of the Moon visualization and is intentionally kept simple so it can be easily modified.

Developers are encouraged to customize or extend the function to suit their own projects — whether by changing the rendering style, adding astronomical calculations, or integrating it into other visualization tools and applications.

## Technologies Used

- HTML5  
- CSS3  
- JavaScript (Canvas API)  

## Author

**Cedie Camomot** – Original implementation.  

## License

**BSD 2-Clause License** – See LICENSE file for full details.  
