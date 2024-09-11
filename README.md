# MarunGPT

MarunGPT is an AI-powered chatbot developed to assist students at Marmara University with various tasks, from providing answers to frequently asked questions to handling complex problem-solving requests. Built using modern web technologies, MarunGPT is designed to be scalable and accessible to both campus students and the general public.

## Tech Stack

### **Frontend**
- **Framework:** [Next.js](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/), [Framer Motion](https://www.framer.com/motion/) for animations
- **State Management:** React Context API (or Redux, if necessary)
- **Deployment:** [Vercel](https://vercel.com/)

### **Backend**
- **Framework:** [FastAPI](https://fastapi.tiangolo.com/) (or Flask)
- **Deployment:** [AWS Lambda](https://aws.amazon.com/lambda/)
- **Testing:** [Postman](https://www.postman.com/)

### **Database**
- **Database:** [MongoDB](https://www.mongodb.com/)
- **ORM/ODM:** [Motor](https://motor.readthedocs.io/en/stable/) (asynchronous MongoDB driver) or `pymongo`
- **Cloud DB:** MongoDB Atlas

### **Authentication & Authorization**
- **JWT (JSON Web Tokens)** for user authentication
- **OAuth** (optional) for third-party login (Google, GitHub, etc.)

### **DevOps & CI/CD**
- **Version Control:** [GitHub](https://github.com/)
- **CI/CD:** [GitHub Actions](https://github.com/features/actions)
- **Containerization:** [Docker](https://www.docker.com/)

### **Monitoring & Logging**
- **Error Monitoring:** [Sentry](https://sentry.io/)
- **Performance Monitoring:** [New Relic](https://newrelic.com/) or [Datadog](https://www.datadoghq.com/)

## Features
- AI-powered chatbot using GPT and NLP technologies
- Real-time messaging and interaction with students
- Question-answer functionality with contextual understanding
- Authentication system for campus students and public users
- Admin panel for chatbot and user management

## Project Setup

### **Prerequisites**
Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 14 or higher)
- [Python](https://www.python.org/) (version 3.8 or higher)
- [MongoDB](https://www.mongodb.com/)
- [Docker](https://www.docker.com/) (optional, but recommended)

### **Frontend Setup**
1. Clone the repository:
   ```bash
   git clone https://github.com/erdemmgunal/MarunGPT.git
   cd MarunGPT
