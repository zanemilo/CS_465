# CS 465 - Full Stack Development

**Author:** Zane M Deso  
**Date:** 6-27-2025

---

## Table of Contents

- [Architecture](#architecture)
- [Functionality](#functionality)
- [Testing](#testing)
- [Reflection](#reflection)

---

## Architecture

Throughout building **Travlr Getaways**, I implemented and compared two different frontend development methods:

- **Server-Side Rendering (SSR) with Express & Handlebars:**  
    Provided a straightforward way to generate static HTML pages directly from the server. This approach is suitable for SEO and simple presentation tasks.

- **Client-Side Rendering (CSR) with Angular SPA:**  
    Delivered a richer, more interactive user experience using modular components, dynamic client-side routing, and real-time updates.

JavaScript played a critical role on both ends—enhancing interactivity in Express views and underpinning the entire component-driven architecture within Angular.

For the backend, I chose **MongoDB**, a NoSQL database, due to its flexibility in handling JSON-like documents. Its schema-less design made it ideal for rapid iteration, adaptability to changing requirements, and seamless integration with Node.js and Express.

---

## Functionality

- **JSON vs JavaScript:**  
    JSON (JavaScript Object Notation) is a data format for transmitting structured data, while JavaScript is a programming language for computation and logic. JSON enabled seamless data exchange between frontend and backend via HTTP requests and responses.

- **Refactoring & Maintainability:**  
    Refactoring was essential for improving functionality and maintainability. For example, standardizing the base URL in Angular services reduced redundancy and errors.  
    Reusable UI components (like `trip-card`) in Angular streamlined development, reduced code duplication, and improved maintainability.

---

## Testing

API testing involved verifying request and retrieval methods (`GET`, `POST`, `PUT`) across various endpoints:

- **Endpoints & Methods:**  
    Methods define actions (fetching or modifying data), and endpoints specify API routes.

- **Security:**  
    JWT-based authentication added complexity, requiring valid authentication headers for protected endpoints.

- **Tools:**  
    Used Postman and browser developer tools to test endpoints, confirm response statuses, data accuracy, and security.

- **Debugging:**  
    Involved examining headers, HTTP statuses, and JSON payloads. JWT authentication required careful token management, including storage, expiration, and automatic header inclusion via Angular’s `JwtInterceptor`.

---

## Reflection

Completing this full stack course significantly advanced my professional development goals:

- **Technical Skills:**  
    Mastered client-server application development, data flow management, and secure authentication integration.

- **Technologies Used:**  
    Node.js, Express, Angular, MongoDB, JWT authentication.

- **Best Practices:**  
    Emphasized iterative development, systematic debugging, and refactoring for clarity and efficiency.

These skills directly improve my marketability as a developer and give me confidence in building, securing, and deploying robust web applications.

---


