export interface IContext {

}

export interface IPostList {
    posts:[
        {
            id:number,
            title:string,
            body:string,
            userId:number,
            tags:[string],
            reactions:number
        }
    ],
    total:number,
    skip:number,
    limit:number
}