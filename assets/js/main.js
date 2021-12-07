let output = ""

fetch("https://picsum.photos/v2/list")
    .then(res => res.json())
    .then(json => {
        console.log(json)
        json.forEach(elt => {
            output += `
            <figure>
	        <img src="${elt.download_url}">
	        <figcaption>"${elt.author}"</figcaption>
            </figure>
            `
        })
        document.body.innerHTML = output
    })