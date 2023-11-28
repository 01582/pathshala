import { db } from "@/lib/db";

async function checkTokenInDb(token: string) {
  try {
    const user = await db.user.findUnique({
      where: { token },
    });

    return user !== null; // Returns true if the user with the token exists
  } catch (error) {
    console.error('Error checking token in the database:', error);
    throw error;
  }
}

export default checkTokenInDb;
