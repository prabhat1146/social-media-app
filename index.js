
const videoSection = document.querySelector("section");
const loader = document.querySelector('.loader-box');
function fetchDetails()
{
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=AIzaSyCT-KHNVblCwHtMl28oxQfSBFLGE7F7TuE&maxResults=100")
    .then((res) => res.json())
    .then((data) => {
        loader.style.display = 'none';
        data.items.forEach((element) => {
            videoSection.innerHTML += `<iframe width="498" height="280" src="https://www.youtube.com/embed/${element.id}?si=U5lR8GdcJyo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
        })
    })
    .catch((err) => {
        loader.style.display = 'none';
    });
}



fetchDetails();
{/* <img src="${element.snippet.thumbnails.maxres.url}"/> */}

// fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=AIzaSyCT-KHNVblCwHtMl28oxQfSBFLGE7F7TuE")
//     .then((res)=>res.json())
//     .then((data)=>{
//         console.log(data.items[0].id)
//     });
