front_image_left = document.getElementById("front-default-left");
front_image_right = document.getElementById("front-default-right")

battle_type = document.getElementById("type")

hp = document.getElementById('hp')
attack = document.getElementById('attack')
defence = document.getElementById('defence')
sp_attack = document.getElementById('spattack')
sp_defence = document.getElementById('spdefence')
speed = document.getElementById('speed')


hpvalue = document.getElementById('hpvalue')
attackvalue = document.getElementById('attackvalue')
defencevalue = document.getElementById('defencevalue')
sp_attackvalue = document.getElementById('spattackvalue')
sp_defencevalue = document.getElementById('spdefencevalue')
speedvalue = document.getElementById('speedvalue')



fetch("https://pokeapi.co/api/v2/pokemon/pikachu" , {
    // method: 'POST',
    // headers: {
    //     'Content-Type' : 'application/json'
    // },
    // body: JSON.stringify({
    //     name: 'Debatra'
    // })
}).then(res => {
    if(res.ok){
        return res.json()
    } else {
        console.log("Error!")
    }
}).then(data => {
    console.log(data)

        // TOP LEFT IMAGE
        setTimeout(()=>{
            front_image_left.src = data.sprites.front_default
            setTimeout(()=>{
                front_image_left.src = data.sprites.back_default
                setTimeout(()=>{
                    front_image_left.src = data.sprites.front_default
                    setTimeout(()=>{
                        front_image_left.src = data.sprites.back_default
                        setTimeout(()=>{
                            front_image_left.src = data.sprites.front_default 
                        },500)  
                    },500)
                    
                },500) 
            },500)
        },500)

        //TOP RIGHT IMAGE
        setTimeout(()=>{
            front_image_right.src = data.sprites.front_default
            setTimeout(()=>{
                front_image_right.src = data.sprites.back_default
                setTimeout(()=>{
                    front_image_right.src = data.sprites.front_default
                    setTimeout(()=>{
                        front_image_right.src = data.sprites.back_default
                        setTimeout(()=>{
                            front_image_right.src = data.sprites.front_default 
                        },500)  
                    },500)
                    
                },500) 
            },500)
        },500)

        // TYPE
        battle_type.innerHTML = data.types[0].type.name.toUpperCase()
        
    
        //STATS
        hp.innerHTML = `${data.stats[0].stat.name.toUpperCase()}`
        attack.innerHTML = `${data.stats[1].stat.name.toUpperCase()}`
        defence.innerHTML = `${data.stats[2].stat.name.toUpperCase()}`
        sp_attack.innerHTML = `${data.stats[3].stat.name.toUpperCase()}`
        sp_defence.innerHTML = `${data.stats[4].stat.name.toUpperCase()}`
        speed.innerHTML = `${data.stats[5].stat.name.toUpperCase()}`

        hpvalue.innerHTML =   data.stats[0].base_stat
        attackvalue.innerHTML =   data.stats[1].base_stat
        defencevalue.innerHTML =   data.stats[2].base_stat
        spattackvalue.innerHTML =   data.stats[3].base_stat
        spdefencevalue.innerHTML =   data.stats[4].base_stat
        speedvalue.innerHTML =   data.stats[5].base_stat
    
})


