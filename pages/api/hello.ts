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
  if (
      req.method === 'post'
  ){
    const customData = req.body.customData ? ':::: 커스텀데이터(' + req.body.customData + ')' : ''
    const text = `채팅 메세지 입니다${customData}`
    const centerLabel = `센터 라벨 입니다${customData}`

    res.status(200).json({ text, centerLabel })
    return;
  }

  res.status(200).json({ text: '센터라벨', centerLabel: '센터 라벨 입니다' })
}
