class Torre extends Peca
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

        if(this._i == i && this._j != j)
        {
            let aux = this.colisao(tabuleiro, i, j);
            if(aux > 1)
            {
                tabuleiro[this._i][this._j] = 0;
                tabuleiro[i][j] = this._id;
                this.setPosicaoI(i);
                this.setPosicaoJ(j);
                return 2;
            }
            else if(aux == 1)
            {
                tabuleiro[this._i][this._j] = 0;
                tabuleiro[i][j] = this._id;
                this.setPosicaoI(i);
                this.setPosicaoJ(j);
                return 1;
            }
            else
            {
                return false;
            }
        }
        else if(this._i != i && this._j == j)
        {
            let aux = this.colisao(tabuleiro, i, j);
            if(aux > 1)
            {
                tabuleiro[this._i][this._j] = 0;
                tabuleiro[i][j] = this._id;
                this.setPosicaoI(i);
                this.setPosicaoJ(j);
                return 2;
            }
            else if(aux == 1)
            {
                tabuleiro[this._i][this._j] = 0;
                tabuleiro[i][j] = this._id;
                this.setPosicaoI(i);
                this.setPosicaoJ(j);
                return 1;
            }
            else
            {
                return false;
            }
        }
        else
        {
            return false;
        }
        // >>>>>>>
    }
}