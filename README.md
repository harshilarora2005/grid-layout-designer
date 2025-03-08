# React Layout Designer

A React-based layout designer that allows users to create a customizable grid, add draggable and resizable items, and snap them to the nearest grid cell.

## Features
- Define an `n x m` grid with adjustable gaps
- Add and remove items dynamically by clicking on grid cells
- Drag items freely with a red shadow indicating the snap location
- Snap to the nearest grid cell when dragging stops
- Resize items with grid snapping and collision detection
- Generates html and css code to add the same to your website

## Installation

Ensure you have [Node.js](https://nodejs.org/) installed on your system.

1. Clone the repository or extract the zip file.
2. Navigate to the project directory:
   ```sh
   cd react-layout-designer
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

## Dependencies
The project requires the following npm packages:
- `react`
- `react-dom`
- `react-rnd`
- `tailwindcss`
- `material-tailwind`

To install them manually, run:
```sh
npm install react react-dom react-rnd tailwindcss @material-tailwind/react
```

## Running the Project
To start the development server:
```sh
npm run dev
```

Then, open `http://localhost:5173/` (or the provided local address) in your browser.

## Folder Structure
```
react-layout-designer/
│── src/
│   ├── components/
│   │   ├── GridCell.js
│   │   ├── GridContainer.js
│   │   ├── GridControls.js
|   |   ├── GridGenerator.js
|   |   ├── GridItem.js
|   |   ├── utils.jsx
│   ├── App.js
│   ├── index.js
|   ├── style.css
│── public
|   ├── index.html
│── package.json
│── README.md
```

## Usage
- Click on a grid cell to add/remove an item.
- Drag items freely; they will snap to the nearest cell upon release.
- Resize items using the bottom-right corner.
- Adjust grid size and gap using the control panel.

## License
This project is open-source and available under the MIT License.

---

Enjoy designing your layouts! 🎨

