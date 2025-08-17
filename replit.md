# Overview

This is a React + Express.js full-stack web application for $BTC (Beta Test Coin), a meme cryptocurrency token built on the XRP Ledger (XRPL). The project presents itself as "The Blockbuster of Crypto" - drawing parallels between Bitcoin's perceived outdated technology and Blockbuster's obsolete business model, while promoting XRP as the modern alternative. The application features a marketing website with token information, live DexScreener charts, and a community art gallery where users can upload and view artwork submissions.

## Key Features
- Blockbuster/Netflix nostalgic theme with retro blue/yellow color scheme
- Live DexScreener chart integration for real-time token data
- Community art gallery with object storage for user uploads
- Direct links to XRPL wallets and DEX platforms for token trading
- Contract address copy functionality for trustline setup
- Social media integration (Twitter, Telegram)

## Token Details
- Contract Address: r39mx8HT42TVUsF25AffcaLdMPehdactJf
- Total Supply: 1 Million tokens
- DexScreener URL: https://dexscreener.com/xrpl/btc.r39mx8ht42tvusf25affcaldmpehdactjf_xrp
- Buy Link: https://firstledger.net/token/r39mx8HT42TVUsF25AffcaLdMPehdactJf/BTC

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **React with TypeScript**: Modern component-based UI using functional components and hooks
- **Wouter**: Lightweight client-side routing alternative to React Router
- **Tailwind CSS + shadcn/ui**: Utility-first styling with a comprehensive component library
- **TanStack Query**: Server state management and caching for API interactions
- **Custom Theme**: Retro "Blockbuster" aesthetic with blue/yellow color scheme and VHS-inspired styling

## Backend Architecture
- **Express.js**: RESTful API server with TypeScript
- **In-Memory Storage**: Simple storage implementation using Maps for development/testing
- **Modular Route Handling**: Centralized route registration with structured API endpoints
- **Custom Middleware**: Request logging, error handling, and JSON parsing

## Data Storage Solutions
- **PostgreSQL Database**: Production-ready database with Drizzle ORM for type-safe operations
- **Database Schema**: Artwork submissions table with approval system for content moderation
- **Security Features**: Input validation, sanitization, and approval workflow for user content

## File Upload & Storage
- **Google Cloud Storage Integration**: Object storage for user-uploaded artwork
- **Uppy File Uploader**: Modern file upload UI with drag-and-drop, progress tracking, and multi-file support
- **Custom ACL System**: Object-level access control policies for file permissions
- **Replit Sidecar Authentication**: Seamless integration with Replit's cloud storage infrastructure

## Third-Party Integrations
- **XRPL Integration**: Built for XRP Ledger ecosystem with direct wallet and DEX integration
  - Wallets: Xaman (xumm.app), Joey (joeywallet.xyz)
  - DEXes: FirstLedger, X Magnetic, XPMarket (Sologenic removed)
- **DexScreener**: Embedded live chart functionality showing market cap and liquidity data
- **Social Media**: Twitter (@betatestcoin), Telegram (BetaTestCoinX) - Discord removed

## Security & Privacy Features
- **Content Moderation**: All artwork submissions require approval before public display
- **Community Guidelines**: Artwork must relate to $BTC, crypto, or Blockbuster themes; no nudity allowed; graphic content and swear words permitted if project-related
- **Secure File Upload**: Direct-to-cloud storage with presigned URLs and file type restrictions
- **Privacy Protection**: No personal information stored beyond artist name and artwork title
- **Input Validation**: Server-side validation and sanitization of all user inputs
- **Object ACL**: Access control for uploaded files with approval-based visibility

## External Dependencies

- **@neondatabase/serverless**: PostgreSQL database connectivity
- **@google-cloud/storage**: Cloud file storage and management
- **@uppy/**: File upload interface and AWS S3 integration
- **@tanstack/react-query**: Client-side data fetching and caching
- **@radix-ui/**: Accessible UI component primitives
- **drizzle-orm**: Type-safe database operations
- **wouter**: Lightweight React routing
- **tailwindcss**: Utility-first CSS framework
- **vite**: Build tool and development server
- **express**: Node.js web application framework