-- Users Table

CREATE TABLE users (
    user_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    username VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    profile_picture_filename TEXT,
    created_at DATE DEFAULT current_date
)

-- Posts Table

CREATE TABLE posts (
    post_id SERIAL PRIMARY KEY,
    username VARCHAR(255),
    title VARCHAR(500) UNIQUE NOT NULL,
    content TEXT NOT NULL,
    description VARCHAR(1000) NOT NULL,
    post_img_filename TEXT,
    category VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURERNT_TIMESTAMP,
    FOREIGN KEY (username) REFERENCES users (username),
    FOREIGN KEY (category) REFERENCES categories (category)
)

-- Category Table

CREATE TABLE categories (
    category VARCHAR(255) UNIQUE NOT NULL
)