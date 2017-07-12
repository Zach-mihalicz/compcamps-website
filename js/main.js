var favSongs = [
  {
    order: 1,
    song: "These days",
    artist: "Mike Stud"
  },
  {
    order: 2,
    song: "Tempature",
    artist: "Sean Paul"
  },
  {
    order: 3,
    song: "Glorious",
    artist: "Mackelmore"
  },
];
console.log(favSongs);
var tbody = document.querySelector("tbody");
for(var i in favSongs) {
  var tr = document.createElement("tr");

  for (var j in favSongs[i]) {
    var td1 = document.createElement("td");
    td1.innerHTML = favSongs[i][j];
  } else {
    td1.innertext = favSongs[i][j];
    tr.appendChild(td1);
  }
  tbody.appendChild(tr);
}

tbody.addEventListener('click', function(){
  tbody.style.color = '#000000';
});
