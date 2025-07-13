# 🎧 Podcast Explorer

A simple, responsive React application that fetches and displays a collection of podcasts from an external API. Users can browse, search, and filter podcasts by title and genre in a clean, user-friendly interface.

---

## 📸 Demo

![Podcast Explorer Screenshot](./screenshot.png)
*_(Add a screenshot of the app here if available)_*

---

## 🚀 Core Features

- 🔄 **API Integration** – Fetches live podcast data from a remote API.
- 🔍 **Search Functionality** – Instantly filter podcasts by title.
- 🎨 **Genre Filtering** – Displays categories using a genre filter section.
- ⚠️ **Loading & Error Handling** – Displays friendly messages for loading or API issues.
- 🧩 **Modular Components** – Cleanly organized component structure for easy maintenance.

---

## 🛠️ Technologies Used

- **React**
- **JavaScript (ES6+)**
- **CSS Modules**
- **Custom Utilities (search & filtering)**

---

## 🧠 How It Works
On mount, the app calls ** fetchPodcasts() ** to retrieve data from an API.
While data is loading, a spinner and message are shown.
If fetching fails, an error message appears.
After successful fetch:

- <Header /> displays the top bar.
- <Filtersection /> shows genre filters.
- <Searchsection /> allows searching by title.
- Podcasts matching the search appear in the grid.











# DSJ04 React Podcast App: Search, Sort, Filter, and Pagination

## Project Overview

In this project, you will build an advanced podcast browsing experience that allows users to dynamically **search**, **sort**, **filter**, and **paginate** a list of podcast shows. The goal is to create an intuitive interface that responds to user input in real time and maintains a consistent, seamless experience throughout navigation.

This project will test your ability to manage complex UI state, synchronise multiple user interactions, and maintain clean, scalable code.

## Core Objectives

### Search Functionality

- Implement a flexible search that matches any part of the podcast title.
- Results should update dynamically as the user types or upon submission.
- Ensure that search results integrate with current filters, sorts, and pagination without resetting them.

### Sorting Options

- Allow sorting podcasts by:
  - Newest first (based on last updated date).
  - Title A–Z and Z–A.
- Sorting must work in tandem with any search or filter criteria.

### Filtering

- Enable genre-based filtering using a dropdown or multi-select input.
- Ensure filters work alongside current search, sort, and pagination state.
- Maintain selected filters when navigating between pages or updating the list.

### Pagination

- Display podcasts in manageable chunks using pagination, load-more, or infinite scroll.
- Ensure that pagination respects the currently active search, filter, and sort state.
- Keep all UI selections intact while navigating pages.

### State Synchronisation

- Maintain a centralised and cleanly organised state using React state, context, or a state management library.
- Ensure that all controls (search, sort, filter, pagination) reflect changes immediately and stay in sync.

### Code Quality & Maintainability

- Use JSDoc to document all major functions and modules.
- Apply consistent formatting and naming conventions.
- Keep logic modular and components reusable.

### API Endpoints

Data can be called via a `fetch` request to the following endpoint.

| URL                               |                             |
| --------------------------------- | --------------------------- |
| `https://podcast-api.netlify.app` | Returns an array of PREVIEW |

### Genre Titles

Since the podcast preview information fetched from the API only exposes genres by their IDs, the actual genre details (such as titles) are not included in the API response. These details are instead provided in the data.js file found in this repository. Therefore, it is recommended that you include the mapping between genre ID values and their corresponding titles in your code using this file.

## Project Deliverables

- A fully functional React app that:

  - Fetches and displays podcast data.
  - Allows live searching, sorting, filtering, and pagination.
  - Maintains consistent state across all UI interactions.

- **Clean Codebase** with:

  - Reusable, modular components.
  - Clear and consistent formatting across all files.
  - JSDoc comments for functions/modules.

- **README.md** with:

  - Project overview and purpose.
  - Setup and usage instructions.
  - Descriptions of key features (search, filter, sort, pagination).

- **Version Control (GitHub)**:
  - Clear, meaningful commit messages.
  - Incremental commits reflecting development progress.

## Success Criteria

- No console errors or broken UI on load.
- All features work correctly and together without losing state.
- Clean, maintainable codebase with documentation.
- A polished user experience with responsive layout and real-time updates.

---
