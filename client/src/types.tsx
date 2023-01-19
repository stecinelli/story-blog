export interface IContext {
    sections: Array<string>,
    postsList: post[],
    setPostsList: React.Dispatch<React.SetStateAction<post[]>>,
    activeSection: string, 
    setActiveSection: React.Dispatch<React.SetStateAction<string>>
}

export type post = {
    id:number,
    title:string,
    body:string,
    userId:number,
    tags: Array<string>,
    reactions:number
}

// export interface IPostList {
//     posts:Array<post>,
//     total:number,
//     skip:number,
//     limit:number
// }

// export interface ISectionTitleProps {
//     text: string
// }

// export interface IArticleProps {
//     postInfo: post
// }