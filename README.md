# Contractor - AI-Powered Contract Analysis Tool

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![Next.js](https://img.shields.io/badge/Next.js-14.2.14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)](https://www.typescriptlang.org/)
[![Express](https://img.shields.io/badge/Express-4.x-lightgrey)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-8.x-green)](https://www.mongodb.com/)
[![Stripe](https://img.shields.io/badge/Stripe-Integration-blue)](https://stripe.com/)
[![Gemini AI](https://img.shields.io/badge/Gemini-AI-blueviolet)](https://ai.google.dev/)
[![Deployment Status](https://img.shields.io/badge/Deployment-Vercel%20%2B%20Render-success)](https://vercel.com/)

![GitHub last commit](https://img.shields.io/github/last-commit/Saksham-Goel1107/contractor)
![GitHub repo size](https://img.shields.io/github/repo-size/Saksham-Goel1107/contractor)

An advanced contract analysis platform that leverages AI to identify risks, opportunities, and provide comprehensive insights on legal documents.

## 🌟 Features

- **Contract Analysis**: AI-powered analysis of legal documents to identify risks and opportunities
- **Risk Assessment**: Identification and severity rating of potential contractual risks
- **Opportunity Detection**: Highlighting beneficial clauses and suggestions for improvement
- **Contract Summaries**: Comprehensive overviews of key contract terms and conditions
- **Contract Chat**: Ask questions about your contracts and get AI-powered answers
- **User Dashboard**: Track and manage all your analyzed contracts
- **Secure Storage**: Encrypted storage of all contract documents
- **Subscription Plans**: Free tier and Premium membership options
- **Google Authentication**: Secure user authentication through Google OAuth

## 📸 Screenshots

<div align="center">
  <img src="https://via.placeholder.com/800x450.png?text=Dashboard+Screenshot" alt="Dashboard" width="80%"/>
  <p><em>Dashboard interface showing analyzed contracts</em></p>
  
  <img src="https://via.placeholder.com/800x450.png?text=Contract+Analysis+Screenshot" alt="Contract Analysis" width="80%"/>
  <p><em>Detailed contract analysis with risk and opportunity assessment</em></p>
</div>

## 🛠️ Tech Stack

### Frontend
- **Next.js** - React framework with server-side rendering
- **TypeScript** - Type safety for JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn UI** - Reusable UI components
- **Zustand** - State management
- **React Query** - Data fetching and caching
- **Stripe.js** - Payment processing

### Backend
- **Node.js** - JavaScript runtime
- **Express** - Web framework
- **TypeScript** - Type safety
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **Passport.js** - Authentication middleware
- **Google Gemini AI** - AI model for contract analysis
- **Multer** - File upload handling
- **PDF.js** - PDF processing
- **Resend** - Email service
- **Stripe API** - Payment processing

### Deployment
- **Vercel** - Frontend hosting
- **Render** - Backend hosting
- **MongoDB Atlas** - Cloud database

## 🚀 Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn
- MongoDB (local or Atlas connection)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Saksham-Goel1107/contractor.git
   cd contractor
   ```

2. **Setup environment variables**
   
   Create `.env` files in both client and server directories based on the provided examples:

   **Client (.env)**
   ```
   NEXT_PUBLIC_API_URL=http://localhost:8080
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   ```

   **Server (.env)**
   ```
   NODE_ENV=development
   PORT=8080
   MONGODB_URI=mongodb://your_mongodb_uri
   SESSION_SECRET=your_session_secret
   CLIENT_URL=http://localhost:3000
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   UPSTASH_REDIS_REST_URL=your_upstash_redis_url
   UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token
   STRIPE_SECRET_KEY=your_stripe_secret_key
   STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
   GEMINI_API_KEY=your_gemini_api_key
   RESEND_API_KEY=your_resend_api_key
   ```

3. **Install dependencies**

   ```bash
   # Install server dependencies
   cd server
   npm install

   # Install client dependencies
   cd ../client
   npm install
   ```

4. **Run the development servers**

   ```bash
   # Start the backend server
   cd server
   npm run dev

   # In a new terminal, start the frontend
   cd client
   npm run dev
   ```

5. **Access the application**
   
   Open your browser and navigate to:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8080

## 🌐 Deployment

### Frontend (Vercel)
1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy using the Vercel dashboard

### Backend (Render)
1. Create a new Web Service in Render
2. Connect your GitHub repository
3. Set build command: `npm install && npm run build`
4. Set start command: `npm start`
5. Configure environment variables

### Database (MongoDB Atlas)
1. Create a cluster on MongoDB Atlas
2. Configure network access and database user
3. Replace the MongoDB URI in your backend environment variables

## 📝 API Documentation

### Authentication Endpoints
- `GET /auth/google` - Initiate Google OAuth flow
- `GET /auth/google/callback` - Google OAuth callback
- `GET /auth/current-user` - Get current authenticated user
- `GET /auth/logout` - Log out current user

### Contract Endpoints
- `POST /contracts/upload` - Upload a new contract for analysis
- `GET /contracts/user-contracts` - Get all contracts for current user
- `GET /contracts/:id` - Get specific contract details
- `POST /contracts/detect-type` - Analyze contract type

### Payment Endpoints
- `GET /payments/membership-status` - Check user membership status
- `GET /payments/create-checkout-session` - Create Stripe checkout session

## 🔒 Security

- All contracts are encrypted at rest
- HTTPS enforced for all communications
- CSRF protection implemented
- Session management with secure cookies
- OAuth 2.0 for authentication
- Input validation and sanitization

## 🧪 Testing

```bash
# Run server tests
cd server
npm test

# Run client tests
cd client
npm test
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Saksham Goel**

- GitHub: [@Saksham-Goel1107](https://github.com/Saksham-Goel1107)
- LinkedIn: [Saksham Goel](https://linkedin.com/in/sakshammgoel)

## 🙏 Acknowledgements

- [Next.js Documentation](https://nextjs.org/docs)
- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Google Gemini API](https://ai.google.dev/docs)
- [Shadcn UI](https://ui.shadcn.com/)
- [Stripe Documentation](https://stripe.com/docs)
