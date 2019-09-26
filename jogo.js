function JogoXadrez() {
	// Identificador de cada peça!
	const W_KING   = 1;  // "&#9812" ♔
	const W_QUEEN  = 2;  // "&#9813" ♕
	const W_ROOK   = 3;  // "&#9814" ♖
	const W_BISHOP = 4;  // "&#9815" ♗
	const W_KNIGHT = 5;  // "&#9816" ♘
	const W_PAWN   = 6;  // "&#9817" ♙
	const B_KING   = 7;  // "&#9818" ♚
	const B_QUEEN  = 8;  // "&#9819" ♛
	const B_ROOK   = 9;  // "&#9820" ♜
	const B_BISHOP = 10; // "&#9821" ♝
	const B_KNIGHT = 11; // "&#9822" ♞
	const B_PAWN   = 12; // "&#9823" ♟

	// Esse é um código de exemplo
	// <<<<<<<
	var tabuleiro = new Array(8);
	for(var i = 0; i < 8; i++)
	{
		tabuleiro[i] = new Array(8);
		for(j = 0; j < 8; j++)
			tabuleiro[i][j] = 0; // ID_1 = 0
	}

	var pecas = [];
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
						pecas[aux] = new Peca(W_ROOK, j, k, "Branca");
						tabuleiro[j][k] = W_ROOK;
						aux++;
					}

					if(k == 1 || k == 6)
					{
						pecas[aux] = new Peca(W_KNIGHT, j, k, "Branca");
						tabuleiro[j][k] = W_KNIGHT;
						aux++;
					}

					if(k == 2 || k == 5)
					{
						pecas[aux] = new Peca(W_BISHOP, j, k, "Branca");
						tabuleiro[j][k] = W_BISHOP;
						aux++;
					}

					if(k == 3)
					{
						pecas[aux] = new Peca(W_KING, j, k, "Branca");
						tabuleiro[j][k] = W_KING;
						aux++;
					}

					if(k == 4)
					{
						pecas[aux] = new Peca(W_QUEEN, j, k, "Branca");
						tabuleiro[j][k] = W_QUEEN;
						aux++;
					}
				}
				if(j == 1)
				{
					pecas[aux] = new Peca(W_PAWN, j, k, "Branca");
					tabuleiro[j][k] = W_PAWN;
					aux++;
				}
				if(j == 2)
				{
					pecas[aux] = new Peca(B_PAWN, 6, k, "Preto");
					tabuleiro[6][k] = B_PAWN;
					aux++;
				}
				if(j == 3)
				{
					if(k == 0 || k == 7)
					{
						pecas[aux] = new Peca(B_ROOK, 7, k, "Branca");
						tabuleiro[7][k] = B_ROOK;
						aux++;
					}

					if(k == 1 || k == 6)
					{
						pecas[aux] = new Peca(B_KNIGHT, 7, k, "Branca");
						tabuleiro[7][k] = B_KNIGHT;
						aux++;
					}

					if(k == 2 || k == 5)
					{
						pecas[aux] = new Peca(B_BISHOP, 7, k, "Branca");
						tabuleiro[7][k] = B_BISHOP;
						aux++;
					}

					if(k == 3)
					{
						pecas[aux] = new Peca(B_KING, 7, k, "Branca");
						tabuleiro[7][k] = B_KING;
						aux++;
					}

					if(k == 4)
					{
						pecas[aux] = new Peca(B_QUEEN, 7, k, "Branca");
						tabuleiro[7][k] = B_QUEEN;
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

	// >>>>>>>

	// Esse método retorna um array 8x8 contendo o estado do tabuleiro.
	this.getTabuleiro = function() {
		// return tabuleiro.getRepresentacao();
		return tabuleiro;
	}

	// Esse método reinicia o jogo.
	this.reiniciar = function() {

	}

	// Esse método retorna uma referência para o objeto peça que está na posição i,j do tabuleiro.
	// Se a posição não tiver uma peça pertencente ao jogador atual, esse método deve retornar null;
	
	this.getPeca = function(i, j) 
    {
        // Esse é um código de exemplo.
        // <<<<<<<
        for(let aux = 0; aux < 32; aux++)
        {
            if(pecas[aux].getPosicaoI() == i && pecas[aux].getPosicaoJ() == j)
            {
                return pecas[aux];
            }
        }
        return null;
    }

	// Esse método move a peça para a posição i, j do tabuleiro.
	// Se o movimento não for possível, esse método deve retornar false. Caso contrário, deve retornar true;
	// Não é necessário se preocupar com a existência de outra peça. Caso a posição final da peça esteja ocupada por outra, a peça deverá ser substituída pela nova.
	// Sempre que esse método for executado com sucesso (retornando true) o turno deve ser atualizado, passando o controle para o outro jogador. Obs: não é permitido que o usuário mova uma peça de outro jogador.
	this.moverPeca = function(peca, i, j) {
		// Não pode mover uma peça para fora do tabuleiro.
		if (i > 7 || i < 0 || j > 7 || j < 0)
			return false;

		// Não pode mover uma peça para o mesmo lugar.
		if (peca.getPosicaoI() == i && peca.getPosicaoJ() == j)
			return false;

		// Esse é um comportamento de exemplo.
		// <<<<<<<
		tabuleiro[peca.getPosicaoI()][peca.getPosicaoJ()] = 0;
		tabuleiro[i][j] = peca.getId();
		peca.setPosicaoI(i);
		peca.setPosicaoJ(j);
		// >>>>>>>
		return true;
	}
}
