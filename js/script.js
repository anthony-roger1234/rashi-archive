function loadData() {
    fetch('data/sample.json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('output').textContent =
                JSON.stringify(data, null, 2);
        })
        .catch(error => {
            document.getElementById('output').textContent =
                "Error loading data.";
            console.error(error);
        });
}
