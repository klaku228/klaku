document.getElementById('fetchNewsButton').addEventListener('click', function() {
    const newsContainer = document.getElementById('newsContainer');
    newsContainer.innerHTML = "Loading...";

    fetch('https://newsapi.org/v2/everything?q=cryptocurrency&apiKey=YOUR_API_KEY')
        .then(response => response.json())
        .then(data => {
            newsContainer.innerHTML = ""; // Очистить контейнер новостей
            data.articles.forEach(article => {
                const newsItem = document.createElement('div');
                newsItem.className = 'news-item';
                newsItem.innerHTML = `
                    <h3><a href="${article.url}" target="_blank">${article.title}</a></h3>
                    <p>${article.description}</p>
                    <p><small>Source: ${article.source.name} | ${new Date(article.publishedAt).toLocaleString()}</small></p>
                `;
                newsContainer.appendChild(newsItem);
            });
        })
        .catch(error => {
            newsContainer.innerHTML = "Error fetching news.";
            console.error('Error fetching data:', error);
        });
});
