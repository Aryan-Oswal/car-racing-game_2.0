class Player {
    constructor() {
        
            
    
    }

    getCount() {
        var playerCountRef = database.ref('player_count')

        playerCountRef.on("value", function (data) {
            playerCount = data.val()
        })
    }

    number(value) {
        database.ref('/').update(
            {player_count: value}
        )
    }

    update(name) {
        var playerIndex = "player" + playerCount

        database.ref(playerIndex).set({
            name: name
        })
    }
    
}