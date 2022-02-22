mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/dark-v10', // style URL
    center: gym.geometry.coordinates,
    zoom: 6 // starting zoom
});

map.addControl(new mapboxgl.NavigationControl());

new mapboxgl.Marker()
    .setLngLat(gym.geometry.coordinates)
    .setPopup(
        new mapboxgl.Popup({ offset: 50 })
            .setHTML(
                `<h6>${gym.title}</h6><p>${gym.location}</p>`
            )
    )
    .addTo(map);