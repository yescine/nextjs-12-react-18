import {CompanyProfile} from 'api/company'
export default class Rest {

  static async getNews (){
    const posts = await (await fetch(`https://jsonplaceholder.typicode.com/posts/`)).json();
    return posts as any[]
  }

  static async getCompanies (){
    const data = (await (await fetch("http://localhost:3000/api/company")).json()) as CompanyProfile[];
    return data
  }

  static async getCompany (_id:string|string[]){
    const data = (await (await fetch(`http://localhost:3000/api/company/${_id}`)).json()) as CompanyProfile;
    return data
  }

}