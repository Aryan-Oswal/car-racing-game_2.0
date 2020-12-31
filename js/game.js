
class Game {
    constructor(){
    
        
    }

    getState() {
        var gameStateRef = database.ref('GAMESTATE')
        gameStateRef.on("value", function (data) {
            GameState = data.val()
        })
    }

    Update(state) {
        database.ref('/').update({GAMESTATE : state})

    }

    Start() {
        if (GameState === 0) {
            player = new Player()
            player.getCount()

            form = new Form()
            form.display()
        }

        
    }    
}