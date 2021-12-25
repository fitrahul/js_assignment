async function getData(url) {
    var res = await fetch(url);
    var data = await res.json();
    return data;
}

function showReceipe (data,place) {
    data.forEach((el) => {
        let div = document.createElement("div");
        let p_name = document.createElement("p");
        p_name.innerText = "NAME: "+el.strMeal;
        let p_category = document.createElement("p");
        p_category.innerText = "CATEGORY: "+el.strCategory;
        let image = document.createElement("img");
        image.src = el.strMealThumb;
        div.append(image,p_name,p_category);
        place.append(div);
    })
}

export {getData,showReceipe};