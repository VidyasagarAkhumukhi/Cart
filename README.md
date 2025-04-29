# React Shopping Cart with Context API & useReducer

This project is a functional shopping cart interface built with React, demonstrating robust state management using the Context API and the `useReducer` hook. It fetches product data from an external API and allows users to manage cart items effectively. Key features include adding items (implicitly via fetched data), removing items, adjusting item quantities (increase/decrease), and clearing the entire cart. The application efficiently manages the cart state using a JavaScript `Map` data structure for optimized item lookups and updates. It also calculates and displays the total number of items and the total cost in real-time.

## ✨ Features

* **Fetch Cart Data:** Initializes the cart by fetching product data from an API (`course-api.com`).
* **Display Cart Items:** Renders the list of items currently in the cart.
* **Quantity Adjustment:** Increase or decrease the quantity of individual items in the cart.
* **Remove Item:** Remove specific items from the cart.
* **Clear Cart:** Remove all items from the cart at once.
* **Total Calculation:** Dynamically calculates and displays the total number of items and the total cost.
* **State Management:** Uses React Context API and `useReducer` for centralized and predictable state management.
* **Efficient Data Structure:** Employs a `Map` to store cart items, allowing for efficient access and modification.
* **Loading State:** Displays a loading indicator while fetching initial cart data.

## 🚀 Live Demo

[Link to Live Demo](https://cartnoto.netlify.app/) 

## 🛠️ Technologies Used

* **Frontend:** React.js (Hooks: `useState`, `useContext`, `useReducer`, `useEffect`)
* **State Management:** React Context API & `useReducer` Hook
* **Data Structure:** JavaScript `Map`
* **Data Fetching:** Browser Fetch API
* **Icons:** `react-icons`
* **Styling:** CSS

## ⚙️ Setup and Installation

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/VidyasagarAkhumukhi/Cart
    cd <your-repository-directory>
    ```

2.  **Install dependencies:**
    Make sure you have Node.js and npm (or yarn) installed.
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    This will typically open the application in your default browser at `http://localhost:5173` (or another port specified by Vite).

## 📖 Usage

1.  Upon loading, the application fetches initial cart items from the API and displays them.
2.  Use the `▲` (up chevron) button next to an item to increase its quantity.
3.  Use the `▼` (down chevron) button next to an item to decrease its quantity. If the quantity reaches 1, clicking decrease again will remove the item from the cart.
4.  Click the "remove" button below an item's price to remove it from the cart entirely.
5.  The total number of items in the cart is displayed in the Navbar.
6.  The total cost of all items is displayed at the bottom of the cart.
7.  Click the "clear cart" button to remove all items from the cart.

## 💡 Technical Approach: State Management

* **Context API:** Provides a way to pass data (state and dispatch function) through the component tree without prop drilling. `AppContext` is created and `AppProvider` wraps the application.
* **`useReducer` Hook:** Chosen for managing the cart state because it involves multiple related actions (add, remove, increase, decrease, clear, load). It centralizes the state logic in a `reducer` function, making state transitions more predictable and easier to manage than multiple `useState` calls. Action types are defined in `actions.js`.
* **`Map` Data Structure:** The cart state uses `new Map()` instead of an array or plain object. This is beneficial for shopping carts because:
    * It allows using the unique item `id` as the key for direct access (O(1) average time complexity for get, set, delete).
    * It simplifies updating or removing specific items without needing to iterate through an array.
    * It avoids potential prototype chain issues inherent in using plain objects as hash maps.
    * The `reducer` logic leverages Map methods like `get`, `set`, and `delete` for efficient state updates. Cart items are converted to an array using `Array.from(cart.entries())` only when needed for rendering in `CartContainer`.

## 🏗️ Project Structure

* `src/`: Main source code directory.
    * `App.jsx`: Main application component, handles loading state and renders `Navbar` and `CartContainer`.
    * `context.jsx`: Defines `AppContext`, `AppProvider` (manages state with `useReducer`, fetches data, provides context value), and `useGlobalContext` hook.
    * `reducer.js`: Contains the reducer function that handles all cart state transitions based on dispatched actions.
    * `actions.js`: Defines action type constants used by the reducer and context.
    * `utils.jsx`: Utility functions, including `getTotals` to calculate total amount and cost from the cart Map.
    * `Navbar.jsx`: Displays the application title and the total item count from the context.
    * `CartContainer.jsx`: Renders the list of `CartItem` components or an "empty cart" message. Displays total cost and the "Clear Cart" button. Converts the Map to an array for iteration.
    * `CartItem.jsx`: Renders a single item in the cart, including image, title, price, amount, and buttons for increasing/decreasing quantity and removing the item. Dispatches actions via context functions.
    * `data.jsx`: (Potentially used for initial/fallback data, though the primary source is the API).
    * `main.jsx`: Entry point of the React application, wraps `App` with `AppProvider`.
    * `index.css`: Contains the CSS styling for the application.
* `public/`: Static assets.
* `package.json`: Project dependencies and scripts.

## 🤝 Contributing

Contributions are welcome! Please follow standard fork, branch, and pull request workflows.

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/your-feature-name`).
3.  Make your changes.
4.  Commit your changes (`git commit -m 'Add some feature'`).
5.  Push to the branch (`git push origin feature/your-feature-name`).
6.  Open a Pull Request.
