
# Book Search Engine - MERN Stack

## Description

This is a full-stack MERN application that allows users to search for books using the Google Books API. Users can create an account, log in, and save books to their personal reading list. This project utilizes a GraphQL API powered by Apollo Server, replacing the traditional RESTful API architecture. The application is built with a React front end, MongoDB database, Node.js/Express.js server, and handles user authentication.

## Features

- Search for books using the Google Books API.
- User authentication (Signup, Login, Logout).
- Save books to a personal reading list.
- Remove books from the saved list.
- Fully functional GraphQL API with queries and mutations for book management.
- Responsive and polished user interface.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [License](#license)
- [Screenshots](#screenshots)
- [Deployment](#deployment)
- [Contributing](#contributing)

## Installation

To run this project locally:

1. Clone the repository.
   ```bash
   git clone https://github.com/jerrietkuo/BookSearchEngine.git
   ```
2. Navigate to the project directory.
   ```bash
   cd BookSearchEngine
   ```
3. Install the dependencies.
   ```bash
   npm install
   ```
4. Set up environment variables. Create a `.env` file in the root of your project with the following:

   ```
   MONGODB_URI=<your-mongo-uri>
   JWT_SECRET=<your-jwt-secret>
   ```

5. Start the server.
   ```bash
   npm run develop
   ```

## Usage

After completing the installation steps:

- Open the browser and navigate to `http://localhost:3000`.
- Sign up for a new account or log in if you already have one.
- Use the search bar to find books using the Google Books API.
- Save books to your personal list by clicking on "Save This Book!".
- View or remove books from your saved list under "My Books".

## Technologies Used

- **MongoDB**: NoSQL database for storing user and book data.
- **Express.js**: Back-end framework for Node.js.
- **React.js**: Front-end library for building user interfaces.
- **Node.js**: JavaScript runtime for the back end.
- **GraphQL**: Query language for the API.
- **Apollo Server**: Server to handle GraphQL queries and mutations.
- **JWT**: JSON Web Token for secure authentication.

## License

This project is licensed under the MIT License.

## Screenshots

Here are some visuals of the application in action:

- **Home Page**: User can search for books and view results.
  ![Home Page](./Assets/img01.png)
  
- **Saved Books**: Displays all books saved by the user.
  ![Saved Books](./Assets/img02.png)

## Deployment

You can access the live version of the application [here](https://your-app-url.com).

To deploy the application yourself, follow the steps provided in the [Deploy with Render and MongoDB Atlas](https://coding-boot-camp.github.io/full-stack/mongodb/deploy-with-render-and-mongodb-atlas) guide.

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request with your changes. Ensure your code follows the best practices and is properly documented.

1. Fork the project.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a pull request.

## Contact

If you have any questions or feedback, feel free to reach out:

- **Email**: [Jerriet Kuo](mailto:jerrietkuo@gmail.com)
- **GitHub**: [Github: Jerriet](https://github.com/jerrietkuo)

---

© 2024 Book Search Engine. All Rights Reserved.
