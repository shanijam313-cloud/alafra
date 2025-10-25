import { createServer } from "./index";

// Create the Express app
const app = createServer();

// Vercel requires exporting a 'default' function for serverless functions
export default app;

// For local development
if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}