import { NextApiRequest, NextApiResponse } from 'next';
import {data} from './index'


export default (req:NextApiRequest, res:NextApiResponse) => {
  const {companyId} = req.query

  const company = data.find(elem=>elem._id===companyId)
  res.send({company})
}