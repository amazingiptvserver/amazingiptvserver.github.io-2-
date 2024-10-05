const searchBar = document.getElementById("searchBar");
const channelNames = document.getElementsByClassName("name");
const submit = document.getElementById("submit");
const clear = document.getElementById("clear");
const searchFailed = document.getElementById("searchFailed");
const h2 = document.querySelectorAll("h2"); 
const cat1 = document.getElementsByClassName("cat1");
const cat2 = document.getElementsByClassName("cat2");
const cat3 = document.getElementsByClassName("cat3");
const cat4 = document.getElementsByClassName("cat4");
const cat5 = document.getElementsByClassName("cat5");
const cat6 = document.getElementsByClassName("cat6");
const cat7 = document.getElementsByClassName("cat7");
const cat8 = document.getElementsByClassName("cat8");

for(const item of h2){
    item.addEventListener("click", function(){
        if(item.textContent === "National & Major TV Channels ▲"){
            for(let i = 0; i < cat1.length; i++){
                for(const object of cat1){
                    object.style.display = "none";
                    item.textContent = "National & Major TV Channels ▼";
                }
            }
        }
        else if(item.textContent === "National & Major TV Channels ▼"){
            for(let i = 0; i < cat1.length; i++){
                for(const object of cat1){
                    object.style.display = "block";
                    item.textContent = "National & Major TV Channels ▲";
                }
            }
        }
        else if(item.textContent === "News Channels ▲"){
            for(let i = 0; i < cat2.length; i++){
                for(const object of cat2){
                    object.style.display = "none";
                    item.textContent = "News Channels ▼";
                }
            }
        }
        else if(item.textContent === "News Channels ▼"){
            for(let i = 0; i < cat2.length; i++){
                for(const object of cat2){
                    object.style.display = "block";
                    item.textContent = "News Channels ▲";
                }
            }
        }
        else if(item.textContent === "Regional & Local Channels ▲"){
            for(let i = 0; i < cat3.length; i++){
                for(const object of cat3){
                    object.style.display = "none";
                    item.textContent = "Regional & Local Channels ▼";
                }
            }
        }
        else if(item.textContent === "Regional & Local Channels ▼"){
            for(let i = 0; i < cat3.length; i++){
                for(const object of cat3){
                    object.style.display = "block";
                    item.textContent = "Regional & Local Channels ▲";
                }
            }
        }
        else if(item.textContent === "Kids & Family Channels ▲"){
            for(let i = 0; i < cat4.length; i++){
                for(const object of cat4){
                    object.style.display = "none";
                    item.textContent = "Kids & Family Channels ▼";
                }
            }
        }
        else if(item.textContent === "Kids & Family Channels ▼"){
            for(let i = 0; i < cat4.length; i++){
                for(const object of cat4){
                    object.style.display = "block";
                    item.textContent = "Kids & Family Channels v";
                }
            }
        }
        else if(item.textContent === "International Channels ▲"){
            for(let i = 0; i < cat5.length; i++){
                for(const object of cat5){
                    object.style.display = "none";
                    item.textContent = "International Channels ▼";
                }
            }
        }
        else if(item.textContent === "International Channels ▼"){
            for(let i = 0; i < cat5.length; i++){
                for(const object of cat5){
                    object.style.display = "block";
                    item.textContent = "International Channels ▲";
                }
            }
        }
        else if(item.textContent === "Niche & Specialized Channels ▲"){
            for(let i = 0; i < cat6.length; i++){
                for(const object of cat6){
                    object.style.display = "none";
                    item.textContent = "Niche & Specialized Channels ▼";
                }
            }
        }
        else if(item.textContent === "Niche & Specialized Channels ▼"){
            for(let i = 0; i < cat6.length; i++){
                for(const object of cat6){
                    object.style.display = "block";
                    item.textContent = "Niche & Specialized Channels ▲";
                }
            }
        }
        else if(item.textContent === "Sports Channels ▲"){
            for(let i = 0; i < cat7.length; i++){
                for(const object of cat7){
                    object.style.display = "none";
                    item.textContent = "Sports Channels ▼";
                }
            }
        }
        else if(item.textContent === "Sports Channels ▼"){
            for(let i = 0; i < cat7.length; i++){
                for(const object of cat7){
                    object.style.display = "block";
                    item.textContent = "Sports Channels ▲";
                }
            }
        }
        else if(item.textContent === "Other ▲"){
            for(let i = 0; i < cat8.length; i++){
                for(const object of cat8){
                    object.style.display = "none";
                    item.textContent = "Other ▼";
                }
            }
        }
        else if(item.textContent === "Other ▼"){
            for(let i = 0; i < cat8.length; i++){
                for(const object of cat8){
                    object.style.display = "block";
                    item.textContent = "Other ▲";
                }
            }
        }
    })
}

searchBar.addEventListener("click", function(){
    for(let i = 1; i < 9; i++){
        Array.from(eval(`cat${i}`)).forEach(item => item.style.display = "block");
    }
})

submit.addEventListener("click", function(){ // Στα ελληνικά κανάλια βάλτε τόνο
    const searchedChannel = searchBar.value.toLowerCase();
    let nonSearchedChannels = [];

    console.log(channelNames);
    h2.forEach(item => item.style.display = "none");
    for(const channel of channelNames){
        searchFailed.style.display = "none";
        if(!(channel.innerHTML.toLowerCase().includes(searchedChannel))){
            nonSearchedChannels.push(channel);
            channel.parentElement.style.display = "none";
            if(nonSearchedChannels.length === 53){
                searchFailed.style.display = "block";
            }
        }
        else{
            if (channel.innerHTML.toLowerCase().includes(searchedChannel)) {
                channel.parentElement.style.display = "flex";
                channel.innerHTML = channel.innerHTML.replace(
                    new RegExp(`(${searchedChannel})`, "gi"),
                    `<span id="span" style="background-color: orange; font-weight: bold;">$1</span>`
                );
            }
        }
    }
})

clear.addEventListener("click", function(){
    const spans = document.querySelectorAll("#span");

    h2.forEach(item => item.style.display = "block");
    for(const channel of channelNames){
        channel.parentElement.style.display = "flex";
        try{
            spans.forEach(span => {
                span.style.backgroundColor = "";
                span.style.fontWeight = "normal";
            });
        }
        catch(error){
            console.error(error);
        }
    }
    searchBar.value = "";
})