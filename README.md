# IP Locator by Mikolaj Mielczarek

IP Locator is a web application that allows users to retrieve geolocation information based on IP addresses or URLs. The application provides visual representation on a map and detailed information about the specified location.

## Features

- **User Location:**
  - Display the geolocation information of the user's IP address.
  - Visualize the user's location on an interactive map.

- **Search by IP or URL:**
  - Enter an IP address or URL to retrieve corresponding geolocation details.
  - Supports both IPv4 addresses and URLs.

- **Search History:**
  - Keep track of previous searches.
  - View a list of all searches made during the session.

- **Marker Interaction:**
  - Click on a marker on the map to copy the latitude and longitude values of the selected location.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- Redux: A predictable state container for managing application state.
- Material-UI: A React UI framework for designing responsive web applications.
- Leaflet: An open-source JavaScript library for interactive maps.
- TypeScript: A superset of JavaScript that adds static typing.

## Getting Started

1. **Installation:**
   ```bash
   yarn install
2. **Run the application:**
    Before You run locally application please create .env.local and add two env:
    REACT_APP_IPSTACK_API_KEY= HERE IS A PLACE FOR YOUR KEY
    REACT_APP_START_COMMAND=react-scripts start

   ```bash
   yarn start
3. **InstaTestingllation:**
   ```bash
   yarn test

   # Expanding the Application

Feel free to enhance the IP Locator application by adding new features and improvements. Here are some suggestions to help you get started:

## Clear Search History Button

Add a button or functionality to clear the search history list. This feature will provide users with the option to start fresh and remove the clutter of previous searches.

## Dark Mode

Implement a dark mode option for the application to enhance user experience, especially during low-light conditions. This can be achieved by introducing a toggle switch or an automatic mode based on the system preferences.

## Additional Geolocation Details

Enhance the geolocation information display by including additional details such as time zone, ISP (Internet Service Provider), and more. This can provide users with a comprehensive overview of the specified location.

## Share Geolocation Information

Implement a feature that allows users to share geolocation information. This can be achieved through shareable links or social media integration, making it easy for users to share interesting locations with others.

## Error Handling Improvements

Enhance error handling mechanisms by providing clear and user-friendly error messages. Consider implementing a more robust error notification system to inform users about issues and guide them on possible solutions.

## Mobile Responsiveness

Ensure that the application is fully responsive on various devices, with a focus on mobile devices. Optimize the layout and design to provide a seamless user experience across different screen sizes.

## IP Range Search

Extend the search capabilities to support IP range searches. This can be useful for users who want to explore geolocation information for a range of IP addresses.

## User Authentication

Implement user authentication to allow users to create accounts and customize their experience. Authenticated users could benefit from personalized settings, saved preferences, and a more tailored user interface.
