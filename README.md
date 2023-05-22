# How to Build an Authentication API with JWT Token in Node.js
In this tutorial, we will learn how to use JWT in Node.js to secure endpoints and even authenticate users.

It’s pretty simple to write code and develop applications. Yet, how do we deal with authentication, and most likely, authorization?

# What is authentication and authorization
Authentication and authorization are used in security, particularly when it comes to getting access to a system. Yet, there is a significant distinction between gaining entry into a house (authentication) and what you can do while inside (authorization).

# What is JWT
JSON Web Tokens (JWT) are an RFC 7519 open industry standard for representing claims between two parties. For example, you can use jwt.io to decode, verify, and produce JWT.

JWT specifies a compact and self-contained method for communicating information as a JSON object between two parties. Because it is signed, this information can be checked and trusted. JWTs can be signed using a secret (using the HMAC algorithm) or an RSA or ECDSA public/private key combination. In a moment, we’ll see some examples of how to use them.

# Prerequisites
To follow along with this tutorial, you will need:
1. A working knowledge of JavaScript.
2. A good understanding of Node.js.
3. A basic understanding of MongoDB or any database of your choice.
4. Postman and some knowledge on how to use Postman.

our file needs some environment variables. You can create a new .env file if you haven’t and add your variables before starting our application.

In our .env.
-API_PORT=<4001>
-MONGO_URI=<Your mongoDb connection URI>
-TOKEN_KEY=<ANY Random String>
