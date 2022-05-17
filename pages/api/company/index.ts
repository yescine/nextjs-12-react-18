// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import ch from "chance";

const chance = new ch();

export type CompanyProfile = {
  _id: string;
  name: string;
  adress: string;
  email: string;
  isActive?: boolean;
};

const createCompany = () => ({
  _id: chance.guid(),
  name: chance.company(),
  adress: chance.address(),
  email: chance.email(),
  isActive: chance.bool(),
});

export const data = Array.from(Array(10).keys()).map((elem): CompanyProfile => createCompany());

export default function handler(req: NextApiRequest, res: NextApiResponse<CompanyProfile[]>) {
  switch (req.method) {
    case "GET":
      res.status(200).json(data);
      break;
    case "POST":
      const {  number } = req.body;
      const newComp = Array.from(Array(number).keys()).map((elem): CompanyProfile => createCompany());
      data.push(...newComp);

    default:
      break;
  }
}
