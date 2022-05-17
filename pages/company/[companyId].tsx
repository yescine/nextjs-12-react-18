import { GetServerSideProps } from 'next';
import Rest from 'service/rest'
import {CompanyProfile} from 'api/company'

interface Props {
  company:CompanyProfile
}
const CompanyDetails = ({company}:Props) => {
  return (
    <>
      <h1>{company.name} </h1>
      <p>email: {company.email} </p>
      <p>adress: {company.adress} </p>
    </>
  );
}


export const getServerSideProps:GetServerSideProps = async (ctx) => {
  const {params}=ctx
  const company = await Rest.getCompany(params?.companyId)

  return {
    props:{
      company
    }
  }
}

export default CompanyDetails;