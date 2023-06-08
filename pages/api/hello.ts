// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  text: string,
  centerLabel: string;
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
  res.status(200).json({ text: '센터라벨', centerLabel: '센터 라벨일에요' })
}
