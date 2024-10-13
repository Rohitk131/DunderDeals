import axios from 'axios';
import * as cheerio from 'cheerio';

export async function scrapeAmazonProduct(url: string) {
  if (!url) return;

  const username = process.env.BRIGHT_DATA_USERNAME as string;
  const password = process.env.BRIGHT_DATA_PASSWORD as string;
  const port = 22225;
  const session_id = Math.floor(1000000 * Math.random());
  const options = {
    auth: {
      username: `${username}-session-${session_id}`,
      password,
    },
    host: 'brd.superproxy.io',
    port,
    rejectUnauthorized: false,
  };

  try {
    const response = await axios.get(url, options);
    const $ = cheerio.load(response.data);
    const title = $('#productTitle').text().trim();
    const currentTitle = 
    console.log({ title });
  } catch (error: any) {
    throw new Error(`Failed to scrape product: ${error.message}`);
  }
}
