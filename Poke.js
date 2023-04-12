function card(){
    // list all images then changes the order of the cards//
    document.querySelectorAll("img").forEach(function(card){
        card.style.order=Math.round(Math.random()*100)
    })
    
}
card()
var clicks = 0
var firstcard;
var secondcard;
var matches = 0;
var tries = 0

document.querySelector("div").addEventListener("click",function(e){
    //if(e.target.src == "http://127.0.0.1:5501/images/pokeball.png"){
        if(e.target.src.endsWith ("/images/pokeball.png")){

        
        //console.log(e.target.attributes["data-src"])
        //console.log(e.target.attributes.src)
        //console.log(e)
        //flips the card//
        e.target.src = e.target.attributes["data-src"].value
        clicks = clicks + 1
        // remember the cards I clicked//
        console.log (clicks)
        if(clicks == 1){
            firstcard = e.target
            console.log(firstcard.src)
            console.log("firstcard",firstcard)
        }
        //if clicks is 2 revert back to 0//
        if(clicks == 2){
            secondcard = e.target
            console.log(secondcard.src)
            console.log("secondcard",secondcard)
            clicks = 0
            tries = tries + 1
            document.querySelector("#goal").textContent = ("Your number of tries are : " + tries)
            if(firstcard.src == secondcard.src){
                console.log("match")
                var found = new Audio()
                found.src = "/sounds/" + secondcard.src.slice(29,-4) + ".mp3"
                found.play()
                matches = matches + 1
                console.log("You have " + matches + " matches")
                document.querySelector("h2").textContent = ("Your matches are : " + matches)
            }else{
                var flipone = firstcard
                var fliptwo = secondcard
                
                setTimeout(function(){
                    
                    flipone.src = "images/pokeball.png"
                    fliptwo.src = "images/pokeball.png"
                },750)
                if(matches == 14){
                    console.log("You WIN!!")
                    if(tries == 14){
                        document.querySelector("h1").textContent = ("PERFECT!!! You are the luckiest person alive!!!")
                    }else if(tries > 14 && tries <= 25){
                        document.querySelector("h1").textContent = ("Amazing!!! You're a Pro! ")
                    }else if(tries > 25 && tries <= 30){
                        document.querySelector("h1").textContent = ("Great Job!!!")
                    }else if(tries > 30 && tries <= 35){
                        document.querySelector("h1").textContent = ("You're ok...")
                    }else if(tries > 35 && tries <= 40){
                        document.querySelector("h1").textContent = ("You need to practice")
                    }else if(tries >= 40 ){
                        document.querySelector("h1").textContent = ("You're HOT Garbage!!! Did you even TRY?!?!")
                    }
                }
                
            }
        }
    }
        
        
        
    })
 
    document.querySelectorAll("img").forEach(function(poke){
        poke.setAttribute("draggable",false)
    })
    


