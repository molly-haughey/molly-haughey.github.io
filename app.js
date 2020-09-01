$.ajax({
    url:'https://pokeapi.co/api/v2/pokemon/ditto'
}).then(
    (data)=>{
        console.log(data);
    },
    ()=>{
        console.log('bad request');
    }
);

$(()=>{
    $.ajax({
        url:'https://pokeapi.co/api/v2/pokemon/ditto'
    }).then(
        (data)=>{
            console.log(data);
        },
        ()=>{
            console.log('bad request');
        }
    );
})

$(()=>{
    $.ajax({
        url:'https://pokeapi.co/api/v2/pokemon/ditto'
    }).then(
        (data)=>{
            $('##abilities').html(data.Abilities);
            $('#forms').html(data.Forms);
            $('#moves').html(data.Moves);
            $('#species').html(data.Species);
            $('#stats').html(data.Stats)
        },
        ()=>{
            console.log('bad');
        }
    );
})

$(() => {
    let currentImgIndex = 0;
    let numOfImages = $('.carousel-images').children().length - 1;

    // console.log(numOfImages);
  
    $('.next').on('click', () => {
        $('.carousel-images').children().eq(currentImgIndex).hide();
      if (currentImgIndex < numOfImages) {
        currentImgIndex++;

        console.log(currentImgIndex);
      } else {
        currentImgIndex = 0
      }
      $('.carousel-images').children().eq(currentImgIndex).show();
    })
  
    $('.previous').on('click', () => {
      $('.carousel-images').children().eq(currentImgIndex).hide();
      if (currentImgIndex > 0) {
        currentImgIndex--;
      } else {
        currentImgIndex = numOfImages;
      }
      $('.carousel-images').children().eq(currentImgIndex).show();
    })
  })


$("button").on("click", function(clickevent) {
    console.log(clickevent)
    pokemon = clickevent.target.textContent;
    $.ajax({
        url: "https://pokeapi.co/api/v2/pokemon/ditto",
        type: "GET",
        data: {
          "$limit" : 5000,
        }
     }).then(function(data) {
       console.log(data);

let abilitiesText = data.abilities[0].ability.name + "; " + data.abilities[1].ability.name
$('#abilities').text(abilitiesText)   

let formsText = data.forms[0].name
$('#forms').text(formsText) 

let movesText = data.moves[0].move.name
$('#moves').text(movesText)

let speciesText = data.species.name
$('#species').text(speciesText)

let statsText = data.stats[0].stat.name + "; " + data.stats[1].stat.name + "; " + data.stats[2].stat.name + "; " + data.stats[3].stat.name + "; " + data.stats[4].stat.name + "; " + data.stats[5].stat.name
$('#stats').text(statsText)

    });
})

// 