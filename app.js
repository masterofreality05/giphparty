
$('#submitButton').on("click", function(e){
    e.preventDefault()
    let searchQuery = $('#searchqueryinput').val()
    getGiph(searchQuery)
    

})

$('#removeButton').on("click", function(e){
    e.preventDefault() 
    $('#giphrow').empty()

})

async function getGiph(parameter) {
const monkeyImage = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=sP8vTea4s7bAPF5eiSQDZAoyl7XMM7c8&q=${parameter}&limit=25&offset=0&rating=g&lang=en`);

    let newImg = $('<img>')
    newImg.attr('src',monkeyImage.data.data[0].images.original.url)
    $('#giphrow').append(newImg)
    
 
}


$('body').addClass('bg-dark')


