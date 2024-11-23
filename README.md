Flight Ticket Booking API

This project provides an API and frontend for a flight ticket booking system. The backend is built using Django and Django REST Framework, while the frontend is a simple HTML form. Users can submit flight details via the frontend and view them, along with previously entered records.

Project Setup

Prerequisites
- Python 3.x
- Django
- Django REST Framework

Step 1: Clone the Repository
Clone this project repository to your local machine:

git clone https://github.com/ManikantaMallula/FlightTicketBooking.git
cd flight_task

Step 2: Set Up the Backend (Django API)

1. Install Dependencies:
   Install the necessary Python dependencies for the backend.

   pip install -r requirements.txt

2. Migrate the Database:
   Run the following commands to set up the database:

   python manage.py migrate

3. Run the Django Server:
   Start the Django development server by running:

   python manage.py runserver

   The backend API will be available at http://127.0.0.1:8000/api/.

Step 3: Set Up the Frontend (HTML Form)

There are two ways to run the frontend:

Option 1: Run in VS Code
1. Open VS Code.
2. In the VS Code terminal, navigate to the project folder containing the frontend directory:

   cd <project-directory>/frontend

3. Open the HTML file add-new-request.html in the browser from VS Code by right-clicking the file and selecting Open with Live Server. If you don't have the Live Server extension, you can install it from the VS Code marketplace.

   - Click Go Live at the bottom-right of the VS Code window to launch the file in your default browser.

   The form will appear, allowing you to enter flight details.

Option 2: Run Locally on Your Computer
1. Navigate to the frontend folder on your computer and locate the add-new-request.html file.
2. Double-click the add-new-request.html file to open it in your default web browser.
   
   The form will load in your browser, and you can start entering flight details.

Step 4: Using the Application

1. Submit a Flight Booking:
   After opening the form (add-new-request.html), you can enter the flight details such as:
   - Aircraft
   - Origin
   - Destination
   - Flight Time
   - Departure Date & Time
   - Arrival Date & Time

2. View Submitted Records:
   Once the form is submitted, the entered details will appear below the form. You can also click the Show Details button to see a list of all previous and newly entered records.

3. API:
   The API at http://127.0.0.1:8000/api/ is set up to receive and store flight details. You can interact with this API through the frontend or directly via HTTP requests.

Step 5: API Structure

The backend uses Django REST Framework to expose an API that handles the following operations:

- POST /api/:
  - Used to submit flight details (e.g., aircraft, origin, departure and arrival time).

- GET /api/:
  - Used to retrieve all flight records, including previously submitted ones.

The form sends a POST request to this API endpoint when submitting data, and a GET request is used to display all the records.

Step 6: Additional Notes

- Ensure that the Django server is running before submitting the form. You need to run python manage.py runserver in the Django application folder.
- The frontend and backend communicate via the API hosted on http://127.0.0.1:8000/api/.
