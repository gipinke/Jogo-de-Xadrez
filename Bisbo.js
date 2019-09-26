class Bisco extends Peca
{
    constructor(id, i, j, tipo)
    {
        super(id, i, j, tipo);
    }

    movimentacao(tabuleiro, i, j)
    {
        // Não pode mover uma peça para fora do tabuleiro.
		if (i > 7 || i < 0 || j > 7 || j < 0)
        return false;

        // Não pode mover uma peça para o mesmo lugar.
        if (this._i == i && this._j == j)
            return false;

        // Esse é um comportamento de exemplo.
        // <<<<<<<

        //if(possivel())
       
        // >>>>>>>
    }
}