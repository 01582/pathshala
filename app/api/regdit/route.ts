import checkTokenInDb from '../path/to/auth';

export default async function handler(req, res) {
  const { token } = req.body;

  try {
    const tokenExists = await checkTokenInDb(token);

    if (tokenExists) {
      // Token is valid, proceed with your logic
      res.status(200).json({ message: 'Token is valid' });
    } else {
      // Token does not exist in the database
      res.status(401).json({ error: 'Invalid token' });
    }
  } catch (error) {
    // Handle database query error
    res.status(500).json({ error: 'Internal server error' });
  }
}
