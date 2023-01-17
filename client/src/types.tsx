export interface IContext {
    sections: Array<string>,
    postsList: IPostList,
    setPostsList: React.Dispatch<React.SetStateAction<IPostList>>,
    activeSection: string, 
    setActiveSection: React.Dispatch<React.SetStateAction<string>>
}

type post = {
    id:number,
    title:string,
    body:string,
    userId:number,
    tags: Array<string>,
    reactions:number
}

export interface IPostList {
    posts:Array<post>,
    total:number,
    skip:number,
    limit:number
}

export interface ISectionTitleProps {
    text: string
}

export interface IArticleProps {
    postInfo: post
}