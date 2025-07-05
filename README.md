📦 RESTful API with Node.js, Express, and MongoDB
This project is a simple RESTful API built using Node.js, Express, and MongoDB. It supports full CRUD operations (Create, Read, Update, Delete) and connects to MongoDB Atlas for database storage.

🚀 Features
✅ Create, Read, Update, Delete items

✅ MongoDB Atlas integration

✅ Express routing and middleware

✅ Environment variable config with .env

✅ Modular structure (routes, controllers, models)

📁 Folder Structure
bash
Copy
Edit
/Restful-API
│
├── index.js              # Main server file
├── models/
│   └── Item.js           # Mongoose schema
├── routes/
│   └── itemRoutes.js     # API routes
├── .env                  # MongoDB connection string
├── .gitignore
├── package.json
└── README.md 

⚙️ Installation
Clone the repo:

bash
Copy
Edit
git clone https://github.com/<your-username>/restful-api.git
cd restful-api
Install dependencies:

bash
Copy
Edit
npm install
Set up your .env file:

Create a .env file in the root and add your MongoDB URI:

env
Copy
Edit
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/rest-api-app?retryWrites=true&w=majority
Run the server:

bash
Copy
Edit
npm run start 

🔌 API Endpoints
Method	Endpoint	Description
GET	/api/items	Get all items
POST	/api/items	Create new item
PUT	/api/items/:id	Update item by ID
DELETE	/api/items/:id	Delete item by ID

🌐 Tools Used
Node.js

Express.js

MongoDB Atlas

Mongoose

dotenv


📌 Future Improvements
✅ Add frontend UI (React or HTML)

✅ Deploy to Render or Railway

⏳ Add authentication (JWT)

✅ Author
Vaishnavi Bage
GitHub: @vaishnavibage