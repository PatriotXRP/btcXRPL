# $BTC - The Blockbuster of Crypto

A dynamic memecoin platform on XRPL that blends nostalgic Blockbuster-era design with cutting-edge crypto art and community engagement.

## 🎬 Features

- **Interactive Art Gallery**: Community-driven artwork submissions with approval system
- **Live Crypto Charts**: Real-time cryptocurrency price tracking
- **Blockbuster Themed Design**: Retro 90s aesthetic with VHS effects and nostalgic elements
- **XRPL Integration**: Built on XRP Ledger for fast, low-cost transactions
- **Mobile Responsive**: Optimized for both desktop and mobile devices
- **Object Storage**: Secure cloud storage for community artwork uploads
- **Content Moderation**: Built-in filtering and approval system for submissions

## 🚀 Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling with custom Blockbuster theme
- **Shadcn/ui** components for consistent UI
- **Framer Motion** for animations
- **React Query** for state management and API calls
- **Wouter** for client-side routing

### Backend
- **Express.js** with TypeScript
- **Drizzle ORM** for database operations
- **PostgreSQL** for data storage
- **Google Cloud Storage** for file uploads
- **Passport.js** for authentication
- **Zod** for validation

### Development Tools
- **TypeScript** for type safety
- **ESLint** and **Prettier** for code quality
- **Drizzle Kit** for database migrations
- **PostCSS** for CSS processing

## 📁 Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/         # Page components
│   │   ├── lib/           # Utility functions
│   │   └── hooks/         # Custom React hooks
│   └── index.html         # HTML template
├── server/                # Backend Express application
│   ├── db.ts             # Database connection
│   ├── routes.ts         # API routes
│   ├── storage.ts        # Storage interface
│   └── objectStorage.ts  # Cloud storage service
├── shared/               # Shared TypeScript types and schemas
│   └── schema.ts         # Drizzle database schema
├── attached_assets/      # Static assets (images, videos)
└── migrations/           # Database migration files
```

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd btc-memecoin-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file with:
   ```env
   DATABASE_URL=your_postgresql_connection_string
   NODE_ENV=development
   # Add other required environment variables
   ```

4. **Set up the database**
   ```bash
   npm run db:push
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run check` - Run TypeScript type checking
- `npm run db:push` - Push database schema changes

## 🎨 Key Features

### Art Gallery
- Community artwork submissions
- Admin approval system
- Secure file uploads to cloud storage
- Content moderation and filtering
- Mobile-optimized upload interface

### Video Integration
- Responsive video player with mobile support
- Automatic volume control based on viewport visibility
- Touch-friendly controls for mobile devices
- Smooth transitions and loading states

### Blockchain Integration
- XRPL token information and links
- FirstLedger integration for trading
- Real-time price tracking
- Secure contract address display

## 🔐 Security Features

- Input validation with Zod schemas
- Content moderation for inappropriate material
- Secure file upload with validation
- CSRF protection and secure headers
- Environment variable protection

## 📱 Mobile Optimization

- Responsive design for all screen sizes
- Touch-friendly interactions
- Mobile-specific video controls
- Optimized image loading and display
- Progressive Web App features

## 🎯 XRPL Integration

- Token: BTC.r39mx8HT42TVUsF25AffcaLdMPehdactJf
- Network: XRP Ledger
- Trading: Available on FirstLedger
- Wallet: Xaman (formerly Xumm) compatible

## 📄 License

MIT License - see LICENSE file for details

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

For questions or support, please open an issue on GitHub.

---

*$BTC - The obsolete giant vs the revolutionary future. Built with ❤️ on XRPL.*