var musicas = [
    "Hoje eu sou ladrão, artigo 15  As cachorra me amam Os playboy se derretem Hoje eu sou ladrão, artigo 157 A polícia bola um plano Sou herói dos pivete",
    "Vagabunda, queria atacar do malucão, usou meu nome O pipoca abraçou. Foi na porta da minha casa lá botou pânico em todo mundo 3h da tarde E eu nem tava lá....vai vendo! - É mas aí, Brown, tem uns tipo de mulher truta que não dá nem pra comentar - Eu nem sei quem é os maluco, isso que é foda - Aí vamo atrás desse pipoca aí e já era - Ir atrás de quem e aonde? Sei nem quem é, mano - Mano, não devo, não temo e dá meu copo que já era",
    "  A Lua Cheia clareia as ruas do Capão Acima de nós só Deus, humilde, né, não? Né, não? Saúde! Plin!, mulher e muito som Vinho branco para todos, um advogado bom Cof, cof, ah! Esse frio tá de fuder Terça feira é ruim de rolê, vou fazer o quê",
    " Veja bem, ninguém é mais que ninguém Veja bem, veja bem, eles são nosso irmãos também Mas de cocaína e crack Whisky e conhaque Os manos morrem rapidinho sem lugar de destaque",
    " Irmão, quando ele falou Um kilo é o deixo É o milho, a micha caiu Mais onde é que já se viu? Assim, tá de piolhagem Não vai, daqui ali, mó chavão, nesse trajes De óculos escuros, bermuda e chinelo O negão era policia, irmão, mó castelo",
    " Problema com escola Eu tenho mil, mil fitas Inacreditável, mas seu filho me imita No meio de vocês Ele é o mais esperto Ginga e fala gíria Gíria não, dialeto",
    " Esse não é mais seu Ó, subiu Entrei pelo seu rádio Tomei, cê nem viu Nós é isso ou aquilo  O quê? Cê não dizia? Seu filho quer ser preto Rááá Que iron"

]


module.exports = function(app) {
    app.get("/:id", function(req, res) {
        var id = req.params.id;        
        var paragrafos = [];
        while(id > 0) {
            var numAleatorio = Math.floor(Math.random() * ((musicas.length -1 ) - 0)) + 0;
            
            paragrafos.push(musicas[numAleatorio]);
            id--;

        }
        res.json({paragrafos})
    });
}