# Hair Salon Template

This is a React site template with functional routing and appointment booking using React, Vite, Node, and MongoDB. Note that the project contains a separate Client and Server.

## Installation

1. Install the Server packages in the root directory.

```bash
cd hair_salon
npm i
```
2. In the root, create a .env file and insert your MongoDB connection string as a variable. 

```bash
mkdir .env
```

```javascript
MONGODB_URI=`mongodb+srv://...`
```

**Note: check the server.js file and edit mongoose.connect to import your FULL connection string. For educational purposes, it currently only imports the password. I would suggest replacing the whole thing with an environment variable.**

```javascript
mongoose.connect(MONGODB_URI) 
```

3. Install the Client packages in the Client directory.

```bash
cd client
npm i
```

4. Start the server.

```bash
cd ..
node server.js
```
5. Look for the success message.

```bash
Server is running on port 5000
Connected to MongoDB
```

6. Start the client.
```bash
cd client
npm run dev
```

## Usage

This template is free for unlimited use by anyone for personal or business purposes. Tag me on Twitter @mayanwolfe if you build something cool!