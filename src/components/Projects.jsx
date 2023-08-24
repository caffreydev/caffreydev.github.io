export const Projects = () => {
   
const mobileText = window.innerWidth <= 450 ? "Tip: Looks like you're on a mobile - this page will look better in landscape" : ""


    return (
        <>
        <header>
        <h1>Projects Links</h1>
        <h3>See an overview and links to some of my projects below</h3>
        </header>
        <main>
        <p className="mobile-only-text">{mobileText}</p>
            <table className="projects-table">
                <tr>
                    <th>Project</th>
                    <th>Github Repo</th>
                    <th>Hosted Location</th>
                    <th>Description</th>
                </tr>
                <tr>
                    <td>This Site</td>
                    <td><a target="_blank" href="https://github.com/caffreydev/caffreydev.github.io"><img src="/github-mark.png" alt="github logo"/></a></td>
                    <td><a target="_blank" href="https://joemccaffrey.dev">joemccaffrey.dev</a></td>
                    <td>The site you are navigating now.  A React app built with Vite.  See the linked repo for source code.  </td>
                </tr>
                <tr>
                    <td>NC News Front End</td>
                    <td><a target="_blank" href="https://github.com/caffreydev/nc-news"><img src="/github-mark.png" alt="github logo"/></a></td>
                    <td><a href="https://joemccaffrey.dev/nc-news" target="_blank">joemccaffrey.dev/nc-news</a></td>
                    <td>This is a project piece built in React, representing a social news site, with ability to view, comment, and vote on articles.  Built as part of my work at Northcoders.</td>
                </tr>
                <tr>
                    <td>NC News Back End</td>
                    <td><a target="_blank" href="https://github.com/caffreydev/nc_news_beProj"><img src="/github-mark.png" alt="github logo"/></a></td>
                    <td><a href="https://nc-news-jm.onrender.com" target="_blank">nc-news-jm.onrender.com</a></td>
                    <td>This is a hosted API server, consumed by the front end project described above.  A variety of end points, methods and queries are available.  With full list and descriptions on the GET /api endpoint</td>
                </tr>
                <tr>
                    <td>CodeClan</td>
                    <td><a target="_blank" href="https://github.com/caffreydev/codeclan"><img src="/github-mark.png" alt="github logo"/></a></td>
                    <td><a href="https://codeclan-six.vercel.app/" target="_blank">codeclan-six.vercel.app</a></td>
                    <td>This is a social coding kata site where users can practice coding, and find pairs to work with. Built as a final
                        project on my Northcoders bootcamp as part of a team of 5 in which I took a leading role.
                    </td>
                </tr>

            </table>
        </main>
        </>
    )
}