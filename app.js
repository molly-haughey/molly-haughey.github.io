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