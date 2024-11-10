# (MedAid) Medical Record Help System

## Description
The **MedAid** is designed to streamline the storage, retrieval, and management of patients' medical records, enhancing efficiency and accessibility for healthcare providers. This system provides secure data access, role-based permissions, and streamlined information sharing among medical professionals.

## Table of Contents
- [Live Website Url](#deployment)
- [Figma-design](#figma-design)
- [Problem Statement](#problem-statement)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Technology Stack](#technology-stack)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Live Website
Click this following link to visit our MedAid website: [here](https://medaid-frontend.onrender.com/)

## Figma-design
You can view the project design in Figma [here](https://www.figma.com/design/huGWLLeXqRMV6y9IEQ27Me/Medaid--UI-Design?node-id=0-1&node-type=canvas&t=kWeYV5yBga8QQHTM-0)

## Problem Statement
The healthcare industry requires a centralized system to manage patient records securely, support data access among authorized personnel, and improve patient care quality by providing comprehensive data insights.

For more details, refer to the [Problem Statement Document](https://github.com/InternLay-HG/Problem-Statements/blob/main/P10%20%20%20%20Medical-Record-Help-System-srs.md).

## Features
- **Secure Medical Record Storage**: Encrypts and stores patient information securely.
- **Role-Based Access Control**: Grants access based on user roles like doctors, nurses, and administrative staff.
- **Efficient Record Retrieval**: Allows quick and easy access to patient records.

## Installation

### Prerequisites
Ensure you have the following software installed:
- Node.js
- MongoDB

### Setup Steps
1. **Fork the Repository**:
   ```bash
   <https://github.com/InternLay-HG/MedAid_Innovators>

2. **Clone the Repository**:
   clone your forked repository
   ```bash
   git clone <repository-url>

3. **Make Changes(in develop branch)**

4. **Navigate to the Project Directory:**
    Navigate to backend or frontend directory in which you want to work 
    ```bash
    cd backend

5. **Install dependencies**:
    ```bash
    npm install
    npm install express mongoose multer bcrypt cloudinary cors dotenv jsonwebtoken nodemon validator

6. **Set Up Environment Variables**:
    Create a .env file in the project root and add necessary configurations (e.g., database connection string, JWT secret).

7. **Start the server**:
    npm run server

## Usage

1. **Running the Application:**
    After completing installation steps, run the server using npm start and access the web interface via your local host.

1. **Access the Application:**
    Open a browser and go to http://localhost:<PORT> (default: 4000).

## API Documentation

This section provides an overview of the available API endpoints in the Medical Record Help System. Each endpoint includes details on the method, URL, description, request parameters, and example responses.

| Endpoint                   | Method | Description                               |
|----------------------------|--------|-------------------------------------------|
| `/api/admin/login`         | POST   | Admin login                               |
| `/api/admin/add-doctor`    | POST   | For adding-doctor/nurse                   |
| `/api/user/register`       | POST   | For patient registaration                 |
| `/api/user/login`          | PUT    | For patient login                         |

## Technology Stack

- Frontend: React.js
- Backend: Node.js, Express
- Database: MongoDB
- Authentication: JWT (JSON Web Token) for secure login and access control

## Contributing

To contribute to this project:
1. **Fork the Repository**: Click on the fork button on GitHub and clone your forked repository.

2. **Select develop branch**:
    ```bash
    git checkout develop
    git branch

3. **Make Changes**:  Implement your changes or additions.

4. **Commit Changes**: Write clear and concise commit messages.

5. **Push to Your Branch**: 
    ```bash
    git push

6. **Open a Pull Request**:
    Submit your pull request for review.

## License:
  This project is licensed under the MIT License. See the LICENSE file for details.

## Contact
  For any questions, suggestions, or issues,create an issue in the repository.