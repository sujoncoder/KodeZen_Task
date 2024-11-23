# Color Management Interface

This project is a simple **React-based color management interface** that allows users to manage a list of colors by performing various actions such as **adding**, **editing**, **duplicating**, **deleting**, and **reordering** colors.

---
![alt text](https://i.ibb.co.com/P5m3qdT/color-edit.png)

### Links
1. [Live Link](https://kode-zen-task.vercel.app/) - `https://kode-zen-task.vercel.app/`
2. [Code Link](https://github.com/sujoncoder/KodeZen_Task) -`https://github.com/sujoncoder/KodeZen_Task`





## Features

- **Display Color List:** View a list of colors with their names and corresponding color values.
- **Add Color:** Add a new color with a custom name and color value.
- **Edit Color:** Modify the name and value of an existing color.
- **Duplicate Color:** Create a copy of an existing color.
- **Delete Color:** Remove a color from the list.
- **Reorder Colors:** Drag and drop items to reorder the list.

---

## Tech Stack

- **Frontend Framework:** React
- **Styling:** TailwindCSS
- **Dependencies:**  
  - `react-sortable-hoc`: For draggable and sortable lists.  
  - `array-move`: For managing reordering of items.  
  - `react-icons`: For adding icons to the UI.  
  - `react-color`: For a user-friendly color picker interface.

---

## Project Structure

- **`app.jsx`:** The main application entry point integrating all components.
- **`tabs.jsx`:** A tabbed navigation component for switching between different views or sections.
- **`ColorsItems.jsx`:** The main component managing the color list and interactions.
- **`SortableList.jsx`:** A reusable component for rendering the draggable list of colors.
- **`ThreeDotMenu.jsx`:** A dropdown menu component for additional actions such as duplicate or delete.
- **`EditModal.jsx`:** A modal component for editing or adding colors.

---