
export default class Rest {

  static async getNews (){
    const posts = await (await fetch(`https://jsonplaceholder.typicode.com/posts/`)).json();
    return posts as any[]
  }
}