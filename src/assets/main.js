const API = 'https://youtube138.p.rapidapi.com/channel/videos/?id=UCJ5v_MCY6GNUBTO8-D3XoAg&hl=en&gl=US'
const content = null || document.getElementById('content')
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9b7faac421mshe532bcb8a2a2454p1fab9ejsn005baeb91384',
		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
	}
};

async function fecthData(urlapi){
    const response = await fetch(urlapi,options);
    const data = await response.json();
    return data;
}
(async () =>{
    try{
        const videos = await fecthData(API);

        console.log(videos);
        let view = `
        ${videos.contents.map(video => `
            <div class="group relative">
            <div
                class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img src="${video.video.thumbnails[0].url}" alt="" class="w-full">
            </div>
            <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700">
                <span aria-hidden="true" class="absolute inset-0"></span>
                ${video.video.title}
                </h3>
            </div>
            </div>
        `).slice(0,8).join('')}
            
            `;
        content.innerHTML = view;
    }catch(error){
        console.log(error);
    }
})();