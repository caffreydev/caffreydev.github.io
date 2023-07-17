export const Socials = () => {
  return  (
    <>
    <header>
        <h1>My Social Links</h1>
    </header>
    <main>

<table className="socials-table">
<tr>
    <th>Site</th>
    <th>My Username</th>
    <th>Link Button</th>
</tr>
<tr>
    <td>Github</td>
    <td>caffreydev</td>
    <td><a href="https://github.com/caffreydev" ><img src="/src/assets/github-mark.png"/></a></td>
</tr>
<tr>
    <td>Linkedin</td>
    <td>Joe McCaffrey</td>
    <td><a href="https://www.linkedin.com/in/joe-mccaffrey/" ><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png"/></a></td>
</tr>
</table>

    </main>
    </>
    )
}