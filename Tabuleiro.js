class Tabuleiro
{
    constructor()
    {
        this.W_KING   = 1;  // "&#9812" ♔
	    this.W_QUEEN  = 2;  // "&#9813" ♕
        this.W_ROOK   = 3;  // "&#9814" ♖
        this.W_BISHOP = 4;  // "&#9815" ♗
        this.W_KNIGHT = 5;  // "&#9816" ♘
        this.W_PAWN   = 6;  // "&#9817" ♙
        this.B_KING   = 7;  // "&#9818" ♚
        this.B_QUEEN  = 8;  // "&#9819" ♛
        this.B_ROOK   = 9;  // "&#9820" ♜
        this.B_BISHOP = 10; // "&#9821" ♝
        this.B_KNIGHT = 11; // "&#9822" ♞
        this.B_PAWN   = 12; // "&#9823" ♟
        this.pecas    = [];
        this.tabuleiro;
    }

	// Esse é um código de exemplo
    // <<<<<<<
    inicio()
    {
        this.tabuleiro = new Array(8);
        for(let i = 0; i < 8; i++)
        {
            this.tabuleiro[i] = new Array(8);
            for(let j = 0; j < 8; j++)
            this.tabuleiro[i][j] = 0; // ID_1 = 0
        }

        console.log(this.tabuleiro);
        console.log(this.pecas);

        while(1)
        {
            var aux = 0;
            for(let j = 0; j < 4; j++)
            {
                for(let k = 0; k < 8; k++)
                {
                    if(j == 0)
                    {
                        if(k == 0 || k == 7)
                        {
                            this.pecas[aux] = new Torre(this.W_ROOK, j, k, "Branca");
                            this.tabuleiro[j][k] = this.W_ROOK;
                            aux++;
                        }

                        if(k == 1 || k == 6)
                        {
                            this.pecas[aux] = new Cavalo(this.W_KNIGHT, j, k, "Branca");
                            this.tabuleiro[j][k] = this.W_KNIGHT;
                            aux++;
                        }

                        if(k == 2 || k == 5)
                        {
                            this.pecas[aux] = new Peca(this.W_BISHOP, j, k, "Branca");
                            this.tabuleiro[j][k] = this.W_BISHOP;
                            aux++;
                        }

                        if(k == 3)
                        {
                            this.pecas[aux] = new Peca(this.W_KING, j, k, "Branca");
                            this.tabuleiro[j][k] = this.W_KING;
                            aux++;
                        }

                        if(k == 4)
                        {
                            this.pecas[aux] = new Peca(this.W_QUEEN, j, k, "Branca");
                            this.tabuleiro[j][k] = this.W_QUEEN;
                            aux++;
                        }
                    }
                    if(j == 1)
                    {
                        this.pecas[aux] = new Peao(this.W_PAWN, j, k, "Branca");
                        this.tabuleiro[j][k] = this.W_PAWN;
                        aux++;
                    }
                    if(j == 2)
                    {
                        this.pecas[aux] = new Peao(this.B_PAWN, 6, k, "Preto");
                        this.tabuleiro[6][k] = this.B_PAWN;
                        aux++;
                    }
                    if(j == 3)
                    {
                        if(k == 0 || k == 7)
                        {
                            this.pecas[aux] = new Torre(this.B_ROOK, 7, k, "Preto");
                            this.tabuleiro[7][k] = this.B_ROOK;
                            aux++;
                        }

                        if(k == 1 || k == 6)
                        {
                            this.pecas[aux] = new Cavalo(this.B_KNIGHT, 7, k, "Preto");
                            this.tabuleiro[7][k] = this.B_KNIGHT;
                            aux++;
                        }

                        if(k == 2 || k == 5)
                        {
                            this.pecas[aux] = new Peca(this.B_BISHOP, 7, k, "Preto");
                            this.tabuleiro[7][k] = this.B_BISHOP;
                            aux++;
                        }

                        if(k == 3)
                        {
                            this.pecas[aux] = new Peca(this.B_KING, 7, k, "Preto");
                            this.tabuleiro[7][k] = this.B_KING;
                            aux++;
                        }

                        if(k == 4)
                        {
                            this.pecas[aux] = new Peca(this.B_QUEEN, 7, k, "Preto");
                            this.tabuleiro[7][k] = this.B_QUEEN;
                            aux++;
                        }
                    }	
                }
                if(aux == 32)
                {
                    break;
                }
            }
            if(aux == 32)
            {
                break;
            }
        }
    }

    getRepresentacao()
    {
        return this.tabuleiro;
    }
    
    
    getPeca(i, j) 
    {
        // Esse é um código de exemplo.
        // <<<<<<<
        let aux2 = this.pecas.length;
        for(let aux = 0; aux < aux2; aux++)
        {
            if(this.pecas[aux].getPosicaoI() == i && this.pecas[aux].getPosicaoJ() == j)
            {
                return this.pecas[aux];
            }
        }
        return null;
    }

    moverPeca(peca, i, j) 
    {
        let flag;
        console.log(this.pecas);
        flag = peca.movimentacao(this.tabuleiro, i, j);
        if(flag > 1)
        {
            this.rmPeca(i,j);
        }
        console.log(this.tabuleiro);
        return flag;
    }

    rmPeca(i,j)
    {
        console.log(i + "+" + j);
        console.log(this.pecas);
        let aux2 = this.pecas.length;
        for(let aux = 0; aux < aux2; aux++)
        {
            if(this.pecas[aux].getPosicaoI()== i && this.pecas[aux].getPosicaoJ() == j)
            {
                this.pecas.splice(aux,1);
                break;
            }
        }
    }
    
}
