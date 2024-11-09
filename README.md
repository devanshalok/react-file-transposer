# React File Transposer

**React File Transposer** is a simple React-based web application that allows users to upload a PDF file, transpose the adjacent lines in the file, and download the modified version as a new file. This tool can be useful for various text manipulation tasks where line order adjustments are required.

## Features

- **Upload PDF**: Users can upload a PDF file.
- **Transpose Lines**: Automatically transposes adjacent lines in the text content of the PDF.
- **Download Modified PDF**: Save the transposed file as a new PDF.

## Prerequisites

- **Node.js**: Make sure Node.js is installed on your machine to run the server.

## Getting Started

Follow these steps to set up and run the project on your local machine.

### Installation

1. **Extract the Zip File**: Download and extract the zip file of this repository.

2. **Navigate to the Project Directory**:

   ```bash
   cd react-file-transposer
   ```

3. **Install Dependencies**:

   ```bash
   npm install --save
   ```

   This command installs all necessary dependencies for the project.

### Running the Project

1. **Start the Server**:

   In the root directory where the `server.js` file resides, run:

   ```bash
   node server.js
   ```

   Alternatively, you can use **nodemon** if you have it installed:

   ```bash
   nodemon server.js
   ```

2. **Open the Application in a Browser**:

   Go to [http://localhost:3000](http://localhost:3000) in your web browser to access the application.

   You should see the upload form in the browser. Use it to upload a PDF, transpose lines, and download the modified file.

## Usage

1. **Upload a PDF**: Select a PDF file to upload.
2. **Transpose Lines**: The app will process the file, transposing adjacent lines.
3. **Download**: Once processed, download the newly transposed PDF file.

## Built With

- **React.js** - Frontend framework for building the user interface
- **PDF Libraries** - For reading and modifying PDF files

## Contributing

Contributions are welcome! Please see the `CONTRIBUTING.md` file for our guidelines on submitting pull requests and reporting issues.

## Authors

- **Devansh Alok** - Initial work - [devanshalok](https://github.com/devanshalok)

## License

This project is licensed under the MIT License - see the `LICENSE.md` file for details.

## Acknowledgments

- Inspiration from document processing tools.
- Thanks to the open-source community for React and Node.js resources.
