# Node.js TO-DO App

A simple TO-DO application built with Node.js, Express, and MongoDB.

## Features

- Add new tasks
- Mark tasks as completed
- Edit existing tasks
- Delete tasks
- View when tasks were completed or deleted

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [MongoDB](https://www.mongodb.com/) (You can use a local instance or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))
- [Git](https://git-scm.com/)

## Setup

1. **Clone the repository:**

    ```bash
    git clone https://github.com/ololadetemi/Nodejs_to_do_app.git
    cd Nodejs_to_do_app
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up environment variables:**

    Create a `.env` file in the root directory of the project and add your MongoDB URI and port information:

    ```env
    MONGODB_URI=your_mongodb_connection_string
    PORT=3000
    ```

4. **Start the application:**

    ```bash
    npm start
    ```

    The server should now be running on `http://localhost:3000`.

## Project Structure

- `app.js` - Main application file.
- `models/todotasks.js` - Mongoose schema and model for tasks.
- `routes/todoroutes.js` - Express routes for handling tasks.
- `views/index.ejs` - Main view file for the application.
- `public/styles.css` - CSS styles for the application.
- `public/scripts.js` - JavaScript for handling UI interactions.

## Usage

- **Add a new task:** Use the input field and "Add" button at the top of the page.
- **Mark a task as completed:** Check the checkbox next to the task.
- **Edit a task:** Click the "Edit" button next to the task, make your changes, and then click "Save".
- **Delete a task:** Click the "Delete" button next to the task.

## Contributing

Feel free to fork this repository, make changes, and submit pull requests. Contributions are welcome!

## License

This project is licensed under the MIT License.

## Contact

For any inquiries, please reach out to [ololadetemi](https://github.com/ololadetemi).

```

