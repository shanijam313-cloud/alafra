export default async function handler(req: any, res: any) {
  res.status(200).json({ 
    message: "Welcome to the Al Afra Online Islamic Academy API!",
    timestamp: new Date().toISOString()
  });
}