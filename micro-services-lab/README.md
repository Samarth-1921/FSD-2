Key Learnings
Microservices architecture splits a system into small, independent services.

Each service runs separately (on different ports) and handles a specific responsibility.

Built APIs using the Flask framework.

Understood HTTP methods:

GET → Retrieve data

PUT → Update data

Used in-memory storage with Python dictionaries (no database).

Data is temporary and lost when the server restarts.

APIs communicate via URLs (routes).

Tested APIs using Postman, emphasizing correct routes, methods, and ports.

Practical Implementation
Developed two Flask-based microservices:

Customer Service (Port 5000)

Provides customer details and their orders

Order Service (Port 5001)

Retrieves order details

Updates order status

Implemented API routes:

GET /customers/<id>/orders

GET /orders/<id>

PUT /orders/<id>

Tested functionality in Postman:

Sent GET requests to fetch data

Sent PUT requests to update order status