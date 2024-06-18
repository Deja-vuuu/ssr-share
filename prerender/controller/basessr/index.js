async function basessr(req, res) {
  const resData = await fetch("https://pokeapi.co/api/v2/pokemon/1");

  const data = await resData?.json();
  console.log("data", data.name);

  const html = `
   <html>
    <link rel="stylesheet" href="http://localhost:8080/basessr.css" />
      <body>
      <h2 class='text'> ${data?.name}</h2>
      <img src="${data?.sprites?.other?.["official-artwork"]?.front_default}" />
      </body>
      <script src="http://localhost:8080/basessr.js"></script>
   </html>
  `;

  res.send(html);
}

export default basessr;
