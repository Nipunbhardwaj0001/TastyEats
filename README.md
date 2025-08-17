# 🍔 TastyEats: Your Ultimate Food Ordering App 🚀

TastyEats is a cutting-edge food ordering application built with React, Redux, and a host of other modern technologies. It allows users to browse restaurants, view menus, add items to their cart, and place orders seamlessly. This project aims to provide a smooth and efficient food ordering experience.

- Visit TastyEats
https://tasty-eats-app.vercel.app/

## 🚀 Key Features

- **Restaurant Browsing:** Browse a wide variety of restaurants with detailed information. 🏢
- **Menu Exploration:** Explore restaurant menus with categories and item details. 🍕
- **Cart Management:** Add, remove, and manage items in your cart. 🛒
- **Seamless Ordering:** Experience a smooth and user-friendly ordering process. ✅
- **Dynamic Routing:** Navigate through different sections of the app with React Router. 🗺️
- **State Management:** Efficiently manage application state with Redux. 🧰
- **Online Status:** Real-time online status indicator. 🌐
- **Error Handling:** Graceful error handling for a better user experience. ⚠️
- **Responsive Design:** Enjoy a consistent experience across devices. 📱💻

## 🛠️ Tech Stack

| Category      | Technology                | Description                                                              |
|---------------|---------------------------|--------------------------------------------------------------------------|
| **Frontend**  | React                     | Core UI library for building components.                               |
|               | React Router DOM          | For handling navigation and routing.                                     |
|               | Redux                     | State management library.                                                |
|               | Redux Toolkit             | Simplifies Redux development.                                            |
|               | Tailwind CSS              | For styling the components.                                              |
| **State Management** | Redux Toolkit         | Used for managing the application state.                               |
| **Data Fetching** | Fetch API               | Used for making API requests.                                          |
| **Build Tool**  | Parcel                    | Bundler for the application.                                             |
| **Other**     | JavaScript (ES6+)         | Programming language.                                                    |
|               | HTML5                     | Markup language for structuring the web page.                            |
|               | CSS3                      | Styling language for the web page.                                       |

## 📦 Getting Started / Setup Instructions

### Prerequisites

- Node.js (v16 or higher) installed on your machine.
- npm or yarn package manager.

### Installation

1.  Clone the repository:

    ```bash
    git clone <repository-url>
    ```

2.  Navigate to the project directory:

    ```bash
    cd tasty-eats
    ```

3.  Install dependencies:

    ```bash
    npm install  # or yarn install
    ```

### Running Locally

1.  Start the development server:

    ```bash
    npm start  # or yarn start
    ```

2.  Open your browser and navigate to `http://localhost:1234` (or the port specified in your terminal).

## 📂 Project Structure

```
tasty-eats/
├── index.html           # Main HTML file
├── src/
│   ├── app.js             # Main entry point for the React application
│   ├── components/        # React components
│   │   ├── About.js       # About page component
│   │   ├── Body.js        # Main body component displaying restaurants
│   │   ├── Cart.js        # Shopping cart component
│   │   ├── Error.js       # Error handling component
│   │   ├── Header.js      # Header component with navigation
│   │   ├── RestaurantCard.js # Component for displaying restaurant information
│   │   ├── RestaurantCategory.js # Component for rendering menu categories
│   │   ├── RestaurantMenu.js # Component for displaying restaurant menu
│   │   ├── Shimmer.js     # Loading state component
│   │   ├── UserClass.js   # User information component
│   │   └── ...
│   ├── utils/           # Utility functions and constants
│   │   ├── appStore.js    # Redux store configuration
│   │   ├── cartSlice.js   # Redux slice for cart management
│   │   ├── constants.js   # Constant values (API URLs, etc.)
│   │   ├── useOnlineStatus.js # Custom hook for checking online status
│   │   ├── useRestaurantMenu.js # Custom hook for fetching restaurant menu data
│   │   ├── UserContext.js # React Context for user information
│   │   └── ...
│   ├── style.css          # Global styles
│   └── ...
├── package.json         # Project dependencies and scripts
├── .gitignore           # Specifies intentionally untracked files that Git should ignore
└── README.md            # Project documentation
```

## 📸 Screenshots

<img width="1919" height="961" alt="image" src="https://github.com/user-attachments/assets/3750c98e-3fb8-4fef-8420-d4f70d88b349" />

<img width="1919" height="963" alt="image" src="https://github.com/user-attachments/assets/109d3dd4-5519-4707-8b0f-8b88065db9a2" />

<img width="1919" height="901" alt="image" src="https://github.com/user-attachments/assets/9d9cfa97-5f37-4e49-9c63-9b83e0f5f20c" />

<img width="1919" height="917" alt="image" src="https://github.com/user-attachments/assets/af0c499a-0a76-437e-8c3d-05a94f894f5e" />

## 📬 Contact

For questions or inquiries, please contact: bhardwajnipun49@gmail.com

## 💖 Thanks Message

Thank you for checking out TastyEats! We hope you find it helpful and enjoyable. Your feedback and contributions are highly appreciated!
