import { NextApiRequest, NextApiResponse } from 'next';

import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  try {
    await sendgrid.send({
      to: 'callummailbox@gmail.com', // Change to your recipient
      from: 'callummailbox@gmail.com', // Change to your verified sender
      subject: 'Serverless Functions',
      text: 'Hello, world!',
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: '' });
};
