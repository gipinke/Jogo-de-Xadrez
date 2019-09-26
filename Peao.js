class Peao extends Peca
{
    constructor(id, i, j, tipo)
    {
        super(id, i, j, tipo);
        this.jogadas = 0;
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

        if(this.tipo == "Branca")
        {
            if(i -this._i == 2 && this.jogadas == 0)
            {
                let aux = this.colisao(tabuleiro, i, j);
                if(aux > 1)
                {
                    tabuleiro[this._i][this._j] = 0;
                    tabuleiro[i][j] = this._id;
                    this.setPosicaoI(i);
                    this.setPosicaoJ(j);
                    this.jogadas = 1;
                    return 2;
                }
                else if(aux == 1)
                {
                    tabuleiro[this._i][this._j] = 0;
                    tabuleiro[i][j] = this._id;
                    this.setPosicaoI(i);
                    this.setPosicaoJ(j);
                    this.jogadas = 1;
                    return 1;
                }
                else
                {
                    return false;
                }
                
            }
            else if(i - this._i == 2 && this.jogadas == 1)
            {
                return false;
            } 
            else if(i - this._i == 1)
            {
                let aux = this.colisao(tabuleiro, i, j);
                if(aux > 1)
                {
                    tabuleiro[this._i][this._j] = 0;
                    tabuleiro[i][j] = this._id;
                    this.setPosicaoI(i);
                    this.setPosicaoJ(j);
                    this.jogadas = 1;
                    return 2;
                }
                else if(aux == 1)
                {
                    tabuleiro[this._i][this._j] = 0;
                    tabuleiro[i][j] = this._id;
                    this.setPosicaoI(i);
                    this.setPosicaoJ(j);
                    this.jogadas = 1;
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
        }

        else if(this.tipo == "Preto")
        {
            if(this._i - i == 2 && this.jogadas == 0)
            {
                let aux = this.colisao(tabuleiro, i, j);
                if(aux > 1)
                {
                    tabuleiro[this._i][this._j] = 0;
                    tabuleiro[i][j] = this._id;
                    this.setPosicaoI(i);
                    this.setPosicaoJ(j);
                    this.jogadas = 1;
                    return 2;
                }
                else if(aux == 1)
                {
                    tabuleiro[this._i][this._j] = 0;
                    tabuleiro[i][j] = this._id;
                    this.setPosicaoI(i);
                    this.setPosicaoJ(j);
                    this.jogadas = 1;
                    return 1;
                }
                else
                {
                    return false;
                }
            }
            else if(this._i - i == 2 && this.jogadas == 1)
            {
                return false;
            } 
            else if(this._i - i == 1)
            {
                let aux = this.colisao(tabuleiro, i, j);
                if(aux > 1)
                {
                    tabuleiro[this._i][this._j] = 0;
                    tabuleiro[i][j] = this._id;
                    this.setPosicaoI(i);
                    this.setPosicaoJ(j);
                    this.jogadas = 1;
                    return 2;
                }
                else if(aux == 1)
                {
                    tabuleiro[this._i][this._j] = 0;
                    tabuleiro[i][j] = this._id;
                    this.setPosicaoI(i);
                    this.setPosicaoJ(j);
                    this.jogadas = 1;
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
        }
        // >>>>>>>
        return true;
    }
}