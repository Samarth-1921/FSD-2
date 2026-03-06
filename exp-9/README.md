Initialize Virtual Environment: Create and enter a clean workspace to avoid dependency conflicts.

python3 -m venv venv

source venv/bin/activate

Install Dependencies: Use the requirements file to fetch all necessary Flask and security libraries.

pip install -r requirements.txt

Launch the App: Start the Flask development server.

python app.py

1. Basic Authentication
This is the most straightforward method. You pass your credentials directly with the request.

Route: /basic-protected

Action: Use curl with the -u flag to provide your username and password.

2. Token & JWT Authentication
These methods require a two-step process because they are "stateless."

Step A (The Handshake): Send your credentials to the login endpoint (/token-login or /jwt-login). The server will respond with a unique string (the token).

Step B (The Access): Copy that token and include it in the Authorization Header when requesting the protected routes (/token-protected or /jwt-protected).