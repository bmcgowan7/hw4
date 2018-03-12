let convertToJSON = function(rawData) { return rawData.json(); }
let displayError = function(error) { console.debug(error); }

var date = new Date()
var months = ['January','February','March']
var days = ['Sunday','Monday']

let updatedate = function(data) {
  var dateScript = (days[date.getDay()]+ ', ' + months[date.getMonth()] + ', ' + date.getDate() + ', ' + (date.getYear()+1900) )
  $("#date").text(dateScript)
}

let googlenews = function(event) {
  let googlenews = 'https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=f42aae19c9d140a7ae2cb406bd902b34'
  $.ajax(googlenews).then(google).catch(displayError);
}

let google = function(data){
  a = data.articles[0].title
  b = data.articles[0].description
  c = data.articles[0].urlToImage
  d = data.articles[0].url
  $("#headline").text(a)
  $("#mainArticle").text(b)
  $("#pic").attr('src',c)
  $("#mainArticle").attr('href',d)
}

let AP = function(event) {
  let ap = 'https://newsapi.org/v2/top-headlines?sources=associated-press&apiKey=f42aae19c9d140a7ae2cb406bd902b34'
  $.ajax(ap).then(APnews).catch(displayError);
}

let APnews = function(data){
  console.log(data)
  a = data.articles[0].title
  b = data.articles[0].description
  c = data.articles[0].urlToImage
  d = data.articles[0].url
  $("#pcenter-title").text(a)
  $("#pcenter").text(b)
  $("#pcenter-title").attr('href',d)
  a1 = data.articles[1].title
  b1 = data.articles[1].description
  c1 = data.articles[1].urlToImage
  d1 = data.articles[1].url
  $("#pcenter-title1").text(a1)
  $("#pcenter1").text(b1)
  $("#pcenter-title1").attr('href',d1)
}

let HP = function(event) {
  let hp = 'https://newsapi.org/v2/top-headlines?sources=the-huffington-post&apiKey=f42aae19c9d140a7ae2cb406bd902b34'
  $.ajax(hp).then(HPnews).catch(displayError);
}

let HPnews = function(data){
  console.log(data)
  a = data.articles[0].title
  b = data.articles[0].description
  c = data.articles[0].urlToImage
  d = data.articles[0].url
  $("#pleft-title").text(a)
  $("#pleft").text(b)
  $("#pleft-title").attr('href',d)
  a1 = data.articles[1].title
  b1 = data.articles[1].description
  c1 = data.articles[1].urlToImage
  d1 = data.articles[1].url
  $("#pleft-title1").text(a1)
  $("#pleft1").text(b1)
  $("#pleft-title1").attr('href',d1)

}
let FX = function(event) {
  let fx = 'https://newsapi.org/v2/top-headlines?sources=fox-news&apiKey=f42aae19c9d140a7ae2cb406bd902b34'
  $.ajax(fx).then(FXnews).catch(displayError);
}

let FXnews = function(data){
  console.log(data)
  a = data.articles[0].title
  b = data.articles[0].description
  c = data.articles[0].urlToImage
  d = data.articles[0].url
  $("#pright-title").text(a)
  $("#pright").text(b)
  $("#pright-title").attr('href',d)
  a1 = data.articles[1].title
  b1 = data.articles[1].description
  c1 = data.articles[1].urlToImage
  d1 = data.articles[1].url
  $("#pright-title1").text(a1)
  $("#pright1").text(b1)
  $("#pright-title1").attr('href',d1)
}

let sports = function(event) {
  let sports = 'https://newsapi.org/v2/top-headlines?sources=espn&apiKey=f42aae19c9d140a7ae2cb406bd902b34'
  $.ajax(sports).then(sportsnews).catch(displayError);
}

let sportsnews = function(data){
  console.log(data)
  a = data.articles[0].title
  b = data.articles[0].description
  c = data.articles[0].urlToImage
  d = data.articles[0].url
  $("#eleft-title").text(a)
  $("#eleft").text(b)
  $("#eleft-title").attr('href',d)

}

let hollywood = function(event) {
  let hollywood = 'https://newsapi.org/v2/top-headlines?sources=buzzfeed&apiKey=f42aae19c9d140a7ae2cb406bd902b34'
  $.ajax(hollywood).then(hollywoodnews).catch(displayError);
}

let hollywoodnews = function(data){
  console.log(data)
  a = data.articles[0].title
  b = data.articles[0].description
  c = data.articles[0].urlToImage
  d = data.articles[0].url
  $("#ecenter-title").text(a)
  $("#ecenter").text(b)
  $("#ecenter-title").attr('href',d)
}
let tech = function(event) {
  let tech = 'https://newsapi.org/v2/top-headlines?sources=techradar&apiKey=f42aae19c9d140a7ae2cb406bd902b34'
  $.ajax(tech).then(technews).catch(displayError);
}

let technews = function(data){
  console.log(data)
  a = data.articles[0].title
  b = data.articles[0].description
  c = data.articles[0].urlToImage
  d = data.articles[0].url
  $("#eright-title").text(a)
  $("#eright").text(b)
  $("#eright-title").attr('href',d)
}



https://secure-ds.serving-sys.com/BurstingRes/Site-131741/Type-0/1a59c1e7-075c-4545-87b6-a70eebe0dcef.png

//////////////////////Scripts Running//////////////////////////

$("#date").text(updatedate())
$("#ad1").attr('src','https://s0.2mdn.net/8239039/TY17_Max-Deduction-DM_300x250.png')
$("#ad2").attr('src','https://secure-ds.serving-sys.com/BurstingRes/Site-131741/Type-0/1a59c1e7-075c-4545-87b6-a70eebe0dcef.png')
googlenews()
AP()
HP()
FX()
sports()
hollywood()
tech()
