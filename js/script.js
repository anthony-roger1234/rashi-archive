function cleanImageLink(link) {
    return link.replace("[img]", "").replace("[/img]", "").trim();
}

function goHome() {
    window.location.href = "index.html";
}

// Load homepage albums
if (document.getElementById("gallery")) {

    fetch('data/albums.json')
        .then(res => res.json())
        .then(data => {

            const gallery = document.getElementById("gallery");

            data.albums.forEach(album => {

                const card = document.createElement("div");
                card.className = "card";

                const cover = cleanImageLink(album.cover);

                card.innerHTML = `
                    <img src="${cover}" alt="${album.title}">
                    <h3>${album.title}</h3>
                    <button onclick="viewAlbum('${album.id}')">VIEW</button>
                `;

                gallery.appendChild(card);
            });
        });
}

function viewAlbum(id) {
    window.location.href = `album.html?id=${id}`;
}

// Load album page
if (document.getElementById("album-grid")) {

    const params = new URLSearchParams(window.location.search);
    const albumId = params.get("id");

    fetch('data/albums.json')
        .then(res => res.json())
        .then(data => {

            const album = data.albums.find(a => a.id === albumId);
            document.getElementById("album-title").textContent = album.title;

            const grid = document.getElementById("album-grid");

            album.images.forEach(img => {

                const image = document.createElement("img");
                image.src = cleanImageLink(img);
                grid.appendChild(image);

            });
        });
}
