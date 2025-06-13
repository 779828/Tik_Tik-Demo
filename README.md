Watch Admin Panel
Overview
The Watch Admin Panel is a web application built using React.js with Vite as the bundler, designed to manage watch-related data and user interactions for a smartwatch ecosystem. It provides administrators with tools to oversee users, devices, straps, community features, exercises, notifications, firmware updates, and reports. The project uses Material-UI (MUI) for styling and React Router DOM for routing. This admin panel complements a mobile e-commerce app built with React Native, which allows users to browse and purchase watch-related products.
Features

Admin Dashboard: Centralized view for managing various aspects of the watch ecosystem.
User Management: View and manage user accounts.
Device Management: Oversee smartwatch devices and their statuses.
Straps and Accessories: Manage watch straps and related accessories.
Community and Exercise: Administer community features and exercise tracking functionalities.
Notifications and Firmware: Handle notifications and device firmware updates.
Reports: Generate and view reports on system usage and performance.
Responsive Design: Styled with MUI for a modern and responsive UI.
Routing: Seamless navigation using React Router DOM.

Tech Stack

React.js: Frontend framework for building the admin panel.
Vite: Fast and modern bundler for development and production builds.
Material-UI (MUI): Component library for styling and UI design.
React Router DOM: For client-side routing and navigation.
Supabase: Backend for authentication and data management (shared with the mobile app).

Installation

Clone the Repository:
git clone (https://github.com/779828/Tik_Tik-Demo)
cd watch-admin-panel

Install Dependencies:
npm install


Set Up Supabase:

Create a Supabase project at supabase.com.
Create a .env file in the root directory and add your Supabase credentials:
VITE_SUPABASE_URL=YOUR_SUPABASE_URL
VITE_SUPABASE_KEY=YOUR_SUPABASE_KEY

Ensure your Supabase tables (e.g., users, devices, straps) are set up as needed.

Run the App:

Start the development server:
npm run dev

Build for production:
npm run build

Usage

Access the Admin Panel:

Open the app in your browser (default: http://localhost:5173).
Log in with admin credentials (configured via Supabase authentication).


Navigate the Dashboard:

Use the sidebar to access sections like Users, Devices, Straps, Community, Exercise, Notifications, Device Firmware, and Reports.
Each section provides tools to manage the respective data.


Manage Data:

Add, edit, or delete users, devices, straps, and other entities.
Monitor community engagement, exercise tracking, and firmware updates.
Generate reports to analyze system performance.

Screens
Admin Dashboard :
![Admin Pannel](https://github.com/user-attachments/assets/c115e642-5c25-4d4b-8edf-462f3e66dbc9)
Admin User :
![Admin Pannel (3)](https://github.com/user-attachments/assets/3dacc9fb-f0c4-4341-bc9a-3f7f29be5c09)

Displays a sidebar with navigation options for managing the watch ecosystem.
Includes sections for Admin, Users, Devices, Straps, Community, Exercise, Notifications, Device Firmware, and Reports.
Provides a logout option for secure access.

Dependencies

React.js
Vite
Material-UI (MUI)
React Router DOM
Supabase

Contributing
Feel free to submit issues or pull requests to enhance the admin panel's functionality or fix bugs.
License
This project is licensed under the MIT License.

