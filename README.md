# Groq AI Chatbot

A modern, high-speed AI chatbot powered by Groq's lightning-fast inference API. Built with React, Vite, and featuring a stunning neon-noir design system.

## Features

- **Lightning-Fast Responses**: Powered by Groq's state-of-the-art inference engine
- **Neon-Noir Design**: Dark theme with electric pink and cyan accents
- **Real-Time Chat**: Instant message delivery and streaming responses
- **Message History**: Persistent conversation tracking with timestamps
- **Error Handling**: Graceful error states and user feedback
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Production Ready**: Optimized for Vercel deployment

## Tech Stack

- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 4 + Custom CSS
- **UI Components**: shadcn/ui
- **API**: Groq Chat Completions API
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ (recommended: 20+)
- pnpm (or npm/yarn)
- Groq API Key (get one at [console.groq.com](https://console.groq.com))

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/groq-chatbot.git
   cd groq-chatbot
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the project root:
   ```env
   VITE_GROQ_API_KEY=your_groq_api_key_here
   ```

4. **Start the development server**
   ```bash
   pnpm dev
   ```

   The app will be available at `http://localhost:5173`

5. **Build for production**
   ```bash
   pnpm build
   ```

## Deployment to Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push to GitHub**
   ```bash
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Select your GitHub repository
   - Vercel will auto-detect the Vite framework

3. **Set Environment Variables**
   - In Vercel project settings, go to "Environment Variables"
   - Add `GROQ_API_KEY` with your Groq API key

4. **Deploy**
   - Click "Deploy"
   - Your app will be live in seconds!

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy
vercel

# Set environment variables when prompted
# Your app will be deployed and you'll get a live URL
```

## Environment Variables

### Required for Vercel Deployment

- `GROQ_API_KEY`: Your Groq API key (get it from [console.groq.com](https://console.groq.com))

### Optional

- `VITE_GROQ_API_URL`: Custom Groq API endpoint (defaults to official Groq API)

## Project Structure

```
groq-chatbot/
├── client/
│   ├── src/
│   │   ├── components/        # React components
│   │   │   └── ChatInterface.tsx
│   │   ├── lib/              # Utility functions
│   │   │   └── groq-client.ts
│   │   ├── pages/            # Page components
│   │   │   └── Home.tsx
│   │   ├── App.tsx           # Main app component
│   │   ├── main.tsx          # React entry point
│   │   └── index.css         # Global styles & design tokens
│   ├── index.html
│   └── public/
├── server/
│   └── index.ts              # Express server (for local dev)
├── package.json
├── vite.config.ts
├── vercel.json               # Vercel configuration
├── tsconfig.json
└── README.md
```

## Groq API Models

The chatbot currently uses `llama-3.3-70b-versatile`, a production-grade model optimized for quality and speed. You can change it in `client/src/lib/groq-client.ts`:

```typescript
export async function sendChatMessage(
  messages: ChatMessage[],
  model: string = 'llama-3.3-70b-versatile'  // Change this
): Promise<ChatResponse> {
  // ...
}
```

**Available Production Models:**
- `llama-3.3-70b-versatile` - High-quality, versatile model (recommended)
- `llama-3.1-8b-instant` - Fast, lightweight model
- `openai/gpt-oss-120b` - Flagship open-weight model
- `openai/gpt-oss-20b` - Fastest open-weight model

For the latest models, visit [Groq Console](https://console.groq.com/docs/models)

## Performance

- **First Load**: ~2-3 seconds
- **Chat Response**: <500ms average (Groq's speed)
- **Bundle Size**: ~165KB gzipped

## Troubleshooting

### "CORS Error" or "API Key Invalid"
- Verify your Groq API key is correct
- Ensure the key is set in environment variables
- Check that the API key has proper permissions

### Build Fails on Vercel
- Ensure `pnpm` is selected as package manager in Vercel settings
- Check that all environment variables are set
- Review build logs in Vercel dashboard

### Slow Responses
- Groq is very fast, but network latency can add 100-200ms
- Check your internet connection
- Try a different Groq model if needed

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Support

- **Groq Docs**: https://console.groq.com/docs
- **Vercel Docs**: https://vercel.com/docs
- **React Docs**: https://react.dev

## Author

Built with ❤️ using Groq API and Vercel

---

**Ready to deploy?** Click the button below to deploy to Vercel in one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyourusername%2Fgroq-chatbot&env=GROQ_API_KEY&envDescription=Your%20Groq%20API%20Key&envLink=https%3A%2F%2Fconsole.groq.com)
