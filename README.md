# 🎧 Podcast Explorer

In this project, I built a simple, responsive React application that fetches and displays a collection of podcasts from an external API. Users can browse, search, and filter podcasts by title and genre in a clean, user-friendly interface. The goal of this project was to create an intuitive experience that responds to user input in real time while maintaining consistent and seamless navigation throughout.

---

## 🚀 Features

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

## How To Use

### Search

- Type in the name of your podcast. As you type, it will start to show options corresponding to your search.

### Genre filter

- Click on the dropdown icon.
- A list of genre options will be displayed, from which you can select.
- After selecting a genre, the grid will automatically update to show podcasts of that genre.

### Sort filter

- Click on the dropdown icon.
- A list of sorting options will be displayed, from which you can choose.
- Select how you want the podcasts to be sorted.
- The grid will then update based on your selected sorting method.
