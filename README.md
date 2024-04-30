# RFID Door Access System API

## Introduction
This documentation provides an overview of a RFID door access system API built with Express.

## Setup

Create .env file:
```bash
touch .env
```

and fill it with your MongoDB connection string and database name:

```
CONNECTION_STRING=
DB_NAME=
```

then just run the app:

```
node app.js
```

## API Endpoints

### Get All Users
```
GET /user/all
```
Retrieves all users stored in the database.

### Get User by ID
```
GET /user/:id
```
Retrieves a user by their ID.

### Get All Access Logs
```
GET /door/all
```
Retrieves all access logs stored in the database.

### Get Access Logs by User ID
```
GET /door/:userId
```
Retrieves access logs for a specific user identified by their ID.

### Create User
```
POST /user/create
```
Creates a new user. Requires a JSON body.

```json
{
    "id": 1,
    "name": "Cezary Baryka"
}
```

### Log Access
```
POST /door/create
```
Logs a new access entry. Requires a JSON body with userId value.

```json
{
    "userId": 1
}
```
