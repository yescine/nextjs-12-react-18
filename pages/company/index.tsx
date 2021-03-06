import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import { CompanyProfile } from "api/company";
import Link from "next/link";
import { getSession, signIn } from "next-auth/react";
import Rest from "service/rest";
interface Props {
  companies: CompanyProfile[];
}
const Comapny = ({ companies }: Props) => {
  const [state, setstate] = useState(companies);
  const saveCompany = async (number = 1) => {
    const resp = await (
      await fetch("/api/company", {
        method: "POST",
        body: JSON.stringify({ number }),
        headers: {
          "Content-Type": "application/json",
        },
      })
    ).json();
    return resp;
  };
  useEffect(() => {
    const secureLog = async () => {
      const session = await getSession();
      if (!session) signIn();
    };
    secureLog();
  }, []);

  return (
    <>
      <h1>List of company</h1>
      <input
        type="number"
        onBlur={async (evt) => {
          saveCompany(+evt.target.value);
          const companies = await Rest.getCompanies();
          setstate(companies);
        }}
      />
      <div>
        {state.map((company) => {
          return (
            <ul key={company._id}>
              <li>
                <Link href={`/company/${company._id}`}>
                  <a>
                    <h4 style={{ color: "darkcyan" }}>{company.name} </h4>
                  </a>
                </Link>
              </li>
            </ul>
          );
        })}
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const companies = await Rest.getCompanies();
  const session = await getSession(ctx);

  if (!session)
    return {
      redirect: {
        destination: `/api/auth/signin?callbackUrl=http://localhost:3000/company`,
        permanent: false,
      },
    };
  return {
    props: {
      companies: session ? companies : [],
    },
  };
};

export default Comapny;
