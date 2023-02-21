const menu = document.querySelector('.menu')
const navigation = document.querySelector('.navigation')
const newses = document.querySelector('.newses')
const search = document.querySelector('.searchBtn')
const apiKey = '477c51b7f3664b56b22c1fdcae57063c';
const topic = 'world';
const input = document.querySelector('.searchInput')
const list = document.querySelectorAll('li')
const link = document.querySelectorAll('.link')
const apiUrl = `https://newsapi.org/v2/everything?q=${topic}&apiKey=${apiKey}`;


menu.addEventListener('click', function(){
    navigation.classList.toggle('show')
})


function fetchFirst(){
fetch(`https://newsapi.org/v2/everything?q=${topic}&apiKey=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
    const articles = data.articles;
    const firstNews = document.createElement('div')
    firstNews.setAttribute('class', 'first-news')
    firstNews.innerHTML = `<img class="first-img" src="${articles[0].urlToImage}" alt="" srcset="">
    <div class="first-text">
        <h1 class="first-title">${articles[0].title}</h1>
        <p class="first-desc">${articles[0].description}</p>
        <small class="first-author">${articles[0].author}</small>
        <a class="first-link" href="${articles[0].url}"><button class="first-btn">See more</button></a>
    </div>`
    newses.appendChild(firstNews)
    
    for(let i = 1; i < 20; i++){
      const news = document.createElement('div')
       news.setAttribute('class', 'news')
       news.innerHTML = `<img class="image" src="${articles[i].urlToImage}" alt="" srcset="">
       <div class="text">
           <p class="description">${articles[i].description}</p>
           <a class="more-link" target="_blank" href="${articles[i].url}"><button class="more-info">See more</button></a>
       </div>`
       newses.appendChild(news)
    }})

    .catch(error => console.log(error));

}

fetchFirst()







list.forEach(item => {
    
    item.addEventListener('click', () => {
        const input = document.querySelector('.searchInput')
        const itemCase = item.innerText
        const apiKey = '477c51b7f3664b56b22c1fdcae57063c';
        const navigation = document.querySelector('.navigation')
        const newses = document.querySelector('.newses')
        navigation.classList.toggle('show')
        input.value = ''

        newses.innerHTML = ''

            fetch(`https://newsapi.org/v2/everything?q=${itemCase}&apiKey=${apiKey}`)
            .then(response => response.json())
            .then(data => {
            const articles = data.articles;
            const firstNews = document.createElement('div')
            firstNews.setAttribute('class', 'first-news')
            firstNews.innerHTML = `<img class="first-img" src="${articles[0].urlToImage}" alt="" srcset="">
            <div class="first-text">
                <h1 class="first-title">${articles[0].title}</h1>
                <p class="first-desc">${articles[0].description}</p>
                <small class="first-author">${articles[0].author}</small>
                <a class="first-link" href="${articles[0].url}"><button class="first-btn">See more</button></a>
            </div>`
            newses.appendChild(firstNews)
            
            for(let i = 1; i < 20; i++){
            const news = document.createElement('div')
            news.setAttribute('class', 'news')
            news.innerHTML = `<img class="image" src="${articles[i].urlToImage}" alt="" srcset="">
            <div class="text">
                <p class="description">${articles[i].description}</p>
                <a class="more-link" target="_blank" href="${articles[i].url}"><button class="more-info">See more</button></a>
            </div>`
            newses.appendChild(news)
            }})

            .catch(error => console.log(error));


    })
})


search.addEventListener('click', function(){
    const apiKey = '477c51b7f3664b56b22c1fdcae57063c';
    const input = document.querySelector('.searchInput')
    const topic = input.value.trim()
    const newses = document.querySelector('.newses')
    newses.innerHTML = ''
    input.value= ''

    fetch(`https://newsapi.org/v2/everything?q=${topic}&apiKey=${apiKey}`)
    .then(response => response.json())
    .then(data => {
    const articles = data.articles;
    const firstNews = document.createElement('div')
    firstNews.setAttribute('class', 'first-news')
    firstNews.innerHTML = `<img class="first-img" src="${articles[0].urlToImage}" alt="" srcset="">
    <div class="first-text">
        <h1 class="first-title">${articles[0].title}</h1>
        <p class="first-desc">${articles[0].description}</p>
        <small class="first-author">${articles[0].author}</small>
        <a class="first-link" href="${articles[0].url}"><button class="first-btn">See more</button></a>
    </div>`
    newses.appendChild(firstNews)
    
    for(let i = 1; i < 20; i++){
      const news = document.createElement('div')
       news.setAttribute('class', 'news')
       news.innerHTML = `<img class="image" src="${articles[i].urlToImage}" alt="" srcset="">
       <div class="text">
           <p class="description">${articles[i].description}</p>
           <a class="more-link" target="_blank" href="${articles[i].url}"><button class="more-info">See more</button></a>
       </div>`
       newses.appendChild(news)
    }})

    .catch(error => console.log(error));

})


link.forEach(item => {
    

    item.addEventListener('click', () => {
        const input = document.querySelector('.searchInput')
        const itemCase = item.innerText
        const apiKey = '477c51b7f3664b56b22c1fdcae57063c';
        const newses = document.querySelector('.newses')
        input.value = ''
        newses.innerHTML = ''

            fetch(`https://newsapi.org/v2/everything?q=${itemCase}&apiKey=${apiKey}`)
            .then(response => response.json())
            .then(data => {
            const articles = data.articles;
            const firstNews = document.createElement('div')
            firstNews.setAttribute('class', 'first-news')
            firstNews.innerHTML = `<img class="first-img" src="${articles[0].urlToImage}" alt="" srcset="">
            <div class="first-text">
                <h1 class="first-title">${articles[0].title}</h1>
                <p class="first-desc">${articles[0].description}</p>
                <small class="first-author">${articles[0].author}</small>
                <a class="first-link" href="${articles[0].url}"><button class="first-btn">See more</button></a>
            </div>`
            newses.appendChild(firstNews)
            
            for(let i = 1; i < 20; i++){
            const news = document.createElement('div')
            news.setAttribute('class', 'news')
            news.innerHTML = `<img class="image" src="${articles[i].urlToImage}" alt="" srcset="">
            <div class="text">
                <p class="description">${articles[i].description}</p>
                <a class="more-link" target="_blank" href="${articles[i].url}"><button class="more-info">See more</button></a>
            </div>`
            newses.appendChild(news)
            }})

            .catch(error => console.log(error));


    })
})
