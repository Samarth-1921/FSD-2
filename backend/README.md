                        REST API Lab
 Setup Instructions

1. Create a virtual environment:

      > python3 -m venv virenv

2. Activate the virtual environment:

      > source virenv/bin/activate

3.   Install the required dependencies:

      > pip install -r requirements.txt

4.   Start the application:

      > python3 run.py

 Available Endpoints

1. GET /students – Retrieve all students

2. POST /students – Add a new student

3. GET /students/<id> – Retrieve a specific student by ID

4. PUT /students/<id> – Update student details by ID

5. DELETE /students/<id> – Remove a student by ID

Data Storage

Student data is stored temporarily in an in-memory list (students array). Data will be lost when the server is restarted.