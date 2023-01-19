# story-blog

<br>
<br>
<br>
<br>

## Story Blog review by Alex

The use of createContext hook was a very smart choice for passing data through different components.

Because of the useContext you were able to make an efficient seperation between the articles and navigation while keeping a smooth comunnication of data between the two.

Good use of types an interfaces in typescript. This gave a clear understanding of what data was being used. Having the context be of an interface type was a good idea since it gave a clear understanding of what data was needed and what data was supposed to be changed. This was a perfect example of when typescript gives an advantage.

The styling was good. I would maybe change the font. The use of picsum photos was a good idea and made the page more alive. The pictures could've been a bit smaller maybe.
<br>
<br>
I tried to document some improvements that could be made as follows:

1. Main.tsx

    When declaring the PostsList useState variable dummy data was passed. This could be avoided. The total, skip and limit attributes in the IPostList interface is never used in the code, thus the IPostList interface could be removed and replaced by an array of post types instead.

    Fetching the data could be made more compact by putting the getData function inside the useEffect hook.

    The body component could be removed since it only contains a section component. Not sure if I messed up some styling though removing it. &lt;body&gt; was also changed into a &lt;div&gt; since &lt;body&gt; cannot appear as a child of &lt;main&gt;.

2. Section.tsx

    The postsList.posts.filter was replaced by postsList.filter since the IPostList interface was removed.

    The SectionTitle component was removed and replace by the content inside it. The setActiveSection context attribute had to be declared. Each article recieved a key prop of the post id.

3. Article.tsx

    Instead of using the IArticleProps interface just the post type was used as a prop. An id for the picsum photo was added so each article would have a unique photo.

4. Context.tsx

    The postList dummy data was removed an replaced by an empty array.

6. Nav.tsx

    The SectionTitle component was removed and replaced by an h3. Each mapped h3 recieved a key of the index it was mapped from. setActiveSection was imported. Styling was added to highlight which section was active (my styling could be made better it was just border bottom).

5. Types.tsx

    The postsList in the IContext interface was replaced by an array of post instead of IPostList since it was removed. setPostList respectivly.
    The post type was exported.
    The IPostList, IArticleProps and ISectionTitleProps was removed.

I did not delete the SectionTitle.tsx or Body.tsx file but they are not used.