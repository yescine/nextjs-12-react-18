import { NextApiRequest, NextApiResponse } from 'next';
import data from 'db/company.json'

export default (req:NextApiRequest, res:NextApiResponse) => {
  const {companyId} = req.query

    const company = data.find(elem=>elem._id==companyId)
    console.log(companyId,company)
    res.send(company)

}