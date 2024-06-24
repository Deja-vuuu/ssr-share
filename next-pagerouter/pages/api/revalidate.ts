
import { log } from 'console';
import type { NextApiRequest, NextApiResponse } from 'next'


export default async function revalidate(req: NextApiRequest,
    res: NextApiResponse<any>) {
    try {
        await res.revalidate(`/isr/1`);
        return res.json({
            revalidated: true,
        });
    } catch (err) {
        console.error(err);
        // If there was an error, Next.js will continue
        return res.status(500).send("Error revalidate");
    }
}