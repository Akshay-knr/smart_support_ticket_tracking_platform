# 🎫 Smart Support Ticket Tracking Platform

A Full-Stack Web Application built using **Spring Boot, MySQL, HTML, CSS, and JavaScript** for managing and tracking customer support tickets.
A beginner-friendly full-stack support ticket management system demonstrating REST API integration and CRUD operations.

---

## 🚀 Features

- Create Support Tickets
- View All Tickets
- Update Ticket Status & Priority
- Delete Tickets
- REST API Integration
- Clean UI with Navigation
- MVC Architecture (Backend)
- JPA + Hibernate Integration

---

## 🛠️ Tech Stack

### Backend
- Java
- Spring Boot
- Spring Data JPA
- MySQL
- Maven

### Frontend
- HTML
- CSS
- JavaScript (Fetch API)

---

## 📂 Project Structure
smart_support_ticket_tracking_platform/
│
├── backend/ → Spring Boot REST API
├── frontend/ → Static HTML, CSS, JS
└── README.md
---

## 🗄️ Database Setup

1. Install MySQL
2. Create database:
CREATE DATABASE inventory_db;

3. Update application.properties:
spring.datasource.url=jdbc:mysql://localhost:3306/inventory_db
spring.datasource.username=your_username
spring.datasource.password=your_password

## ⚙️ How to Run Backend

1. Navigate to backend folder: cd backend
2. Run the application: mvn spring-boot:run
3. Server runs at: http://localhost:8080
---

## 🌐 How to Run Frontend

1. Open frontend/index.html with Live Server
2. Make sure backend is running
3. API endpoint: http://localhost:8080/api/tickets
---

📡 API Endpoints

| Method | Endpoint          | Description       |
| ------ | ----------------- | ----------------- |
| GET    | /api/tickets      | Get all tickets   |
| POST   | /api/tickets      | Create new ticket |
| GET    | /api/tickets/{id} | Get ticket by ID  |
| DELETE | /api/tickets/{id} | Delete ticket     |


## 📌 Author

Developed by **Akshay_knr**

---

## 📈 Future Improvements

- Authentication & Login
- Role-based Access (Admin/User)
- Dashboard Analytics
- Deployment (Render / Railway)