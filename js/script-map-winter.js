let map = L.map('map').setView([64.943434, 43.719561], 7);
L.tileLayer('https://cdn.lima-labs.com/{z}/{x}/{y}.png?api=demo', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

let kmlLayer = new L.KML("/kml/geo.kml", {
    async: true,
});
                                                                  
kmlLayer.on("loaded", function(e) { 
    map.fitBounds(e.target.getBounds());
});


map.addLayer(kmlLayer);


let LeafIcon = L.Icon.extend({
    options: {
        iconSize:     [40, 40],
        iconAnchor:   [20, 40],
        popupAnchor:  [0, -40]
    }
});


let redIcon = new LeafIcon({iconUrl: '/images/red.svg'});
let greenIcon = new LeafIcon({iconUrl: '/images/green.svg'});
let trIcon = new LeafIcon({iconUrl: '/images/transparent.svg'})


let palenga = L.marker(
    [64.161122, 42.297571], 
    {icon:  palGp > 0 ? greenIcon : redIcon}).bindPopup(palGp > 0 ? 'р. Пинега, переправа открыта' : 'р. Пинега, переправа закрыта').addTo(map);

//ППУ
let pinega = L.marker(
    [64.713112, 43.520262], 
    {icon:  pinGp > 0 ? greenIcon : redIcon}).bindPopup(pinGp > 0 ? 'р. Пинега, переправа открыта' : 'р. Пинега, переправа закрыта').addTo(map);
let pocha = L.marker(
    [64.544512, 43.939191], 
    {icon:  pocGp > 0 ? greenIcon : redIcon}).bindPopup(pocGp > 0 ? 'р. Поча, переправа открыта' : 'р. Поча, переправа закрыта').addTo(map); 

//МПУ
let mezengl = L.marker(
    [65.591189, 44.619157], 
    {icon:  mezGlGp > 0 ? greenIcon : redIcon}).bindPopup(mezGlGp > 0 ? 'р. Мезень, переправа открыта' : 'р. Мезень, переправа закрыта').addTo(map); // АБПКМ Мезень
let pezagl = L.marker(
    [65.624215, 44.607320], 
    {icon: pezGp > 0 ? greenIcon : redIcon}).bindPopup(pezGp > 0 ? 'р. Пеза, переправа открыта' : 'р. Пеза, переправа закрыта').addTo(map); // АБПКМ Пеза
let mezkamenka = L.marker(
    [65.828404, 44.197913], {icon: mezKamGp > 0 ? greenIcon : redIcon}).bindPopup(mezKamGp > 0 ? 'р. Мезень, переправа открыта' : 'р. Мезень, переправа закрыта').addTo(map); //Каменка
let mezrazvilka = L.marker(
    [65.661164, 44.774100], 
    {icon: mezRazvGp > 0 ? greenIcon : redIcon}).bindPopup(mezRazvGp > 0 ? 'р. Няфта, переправа открыта' : 'р. Няфта, переправа закрыта').addTo(map); //Развилка - Бычье
let mezrazvilka2 = L.marker(
    [65.782181, 45.034288], 
    {icon: mezRazvGp2 > 0 ? greenIcon : redIcon}).bindPopup(mezRazvGp2 > 0 ? 'п. Пеза, переправа открыта' : 'п. Пеза, переправа закрыта').addTo(map); // Развилка - Бычье

//КПУ
var pinegayas = L.marker([64.029511, 44.111923], {icon: greenIcon}).bindPopup('р. Пинега').addTo(map); //Ясный
var pinegashot = L.marker([63.991281, 44.350056], {icon: greenIcon}).bindPopup('р. Пинега').addTo(map); //Шотова
var pinegapirin = L.marker([64.220137, 44.227682], {icon: greenIcon}).bindPopup('р. Мезень').addTo(map); //Пиринемь


//ЛПУ
var mezlesh = L.marker([64.921430, 45.686322], {icon: greenIcon}).bindPopup('р. Мезень').addTo(map); //Мельничный
var vashlesh = L.marker([64.902496, 45.787128], {icon: greenIcon}).bindPopup('р. Вашка').addTo(map); //ЛОК 1
var vash = L.marker([64.610565, 46.075832], {icon: greenIcon}).bindPopup('р. Вашка').addTo(map); //ЛОК 2
var pilema = L.marker([64.993264, 46.003790], {icon: greenIcon}).bindPopup('р. Пылема').addTo(map); //Пылема
var irasa = L.marker([65.007676, 46.126537], {icon: greenIcon}).bindPopup('р. Ираса').addTo(map); //Ираса
var cebuga = L.marker([64.954722, 46.415513], {icon: greenIcon}).bindPopup('р. Цебьюга').addTo(map); //Цебьюга 
var mezkima = L.marker([64.833919, 47.498884], {icon: greenIcon}).bindPopup('р. Мезень').addTo(map); //Усть-Кыма
var vibor = L.marker([64.542024, 48.003236], {icon: greenIcon}).bindPopup('руч. Выбор').addTo(map); //Выбор
var ezhuga = L.marker([64.934973, 45.607621], {icon: greenIcon}).bindPopup('р. Ёжуга').addTo(map); //Ежуга
var mezkiss = L.marker([64.644088, 47.854013], {icon: greenIcon}).bindPopup('р. Мезень').addTo(map); //Кысса
var mezzas = L.marker([64.667425, 47.803456], {icon: greenIcon}).bindPopup('р. Мезень').addTo(map); //Засулье
var pizhma = L.marker([64.510809, 48.536664], {icon: greenIcon}).bindPopup('р. М. Пижма').addTo(map); //Пижма
var mezzub = L.marker([64.507169, 48.486107], {icon: greenIcon}).bindPopup('р. Мезень').addTo(map); //Зубово

//назначаем прозрачную иконку для якоря метки из html
function markerMitTr(pos,txt) {
    var markerMitTr = L.marker(pos, {icon:trIcon})
              .addTo(map);
    markerMitTr.bindPopup(txt);
    markerMitTr.openPopup();
    map.panTo(new L.LatLng(pos[0],pos[1]));
}
