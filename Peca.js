class Peca 
{
    constructor(id, i, j, tipo)
    {
        this._id = id;
        this._i = i;
        this._j = j;
        this.tipo = tipo
    }

    getPosicaoI()
    {
        return this._i;
    }

    getPosicaoJ()
    {
        return this._j;
    }

    setPosicaoI(i)
    {
        this._i = i;
    }

    setPosicaoJ(j)
    {
        this._j = j;
    }

    getId()
    {
        return this._id;
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
        tabuleiro[this._i][this._j] = 0;
        tabuleiro[i][j] = this._id;
        this.setPosicaoI(i);
        this.setPosicaoJ(j);
        // >>>>>>>
        return true;
    }

    colisao(tabuleiro, i, j)
    {
        var auxId;    //pegara o ID
        var auxTipo;
        if(tabuleiro[i][j] == 0)
        {
            return 1; //pode andar
        }
        else
        {
            auxId = tabuleiro[i][j];
            if(auxId < 7)
                auxTipo = "Branca";
            else
                auxTipo = "Preto";

            if(auxTipo == this.tipo)
            {
                return false; //nao pode andar
            }
            else
            {
                return 2;
            }
        }
    }
}