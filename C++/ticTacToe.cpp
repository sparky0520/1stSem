#include <iostream>
using namespace std;

int playerTurn(){
	int row,col;
	cout<<"Ente the row number > ";
	cin>>row>>endl;

	cout<<"Ente the column number > ";
	cin>>col>>endl;

	int cordinates[2] ={row,col};
	return {row,col};
}
void printMap(int map){
	for (int i=0; i<3; i++){
		for (int j=0; j<3; j++){
			cout<<"{"<<map[i][j]<<"}  ";
		}
		cout<<endl;
	}
}
int winCondition(int map){
	//win condition
	for (int i=0; i<3; i++){
		if ((map[i][0]==map[i][1] && map[i][1]==map[i][2]) || (map[0][i]==map[1][i] && map[1][i]==map[2][i])){
			return 0;
		}
		else if ((map[0][0]==map[1][1] && map[1][1]==map[2][2]) || (map[0][2]==map[1][1] && map[1][1]==map[2][0])){
			return 0;
		}
	}
	return 1;
}

int main(){
	int map[3][3]={
		{8,8,8},
		{8,8,8},
		{8,8,8}
	}
	int matchState= 1;
	while (1){
		cout<<map<<endl;
		cout<<"Welcome to Tic Tac Toe in C++"<<endl;

		// Player 1  places mark
		cout<<"Player1 turn"<<endl;
		int cordinatesPlayer1[]=playerTurn();
		map[cordinatesPlayer1[0]][cordinatesPlayer1[1]]=1;
	
		matchState=winCondition(int map);
		cout<<map<<endl;

		//Player1 won or not
		if (matchState==0){
			cout<<"Player1 won the game"<<endl;
			break;
		}

		// Player 2  places mark
		cout<<"Player2 turn"<<endl;
		int cordinatesPlayer2[]=playerTurn();
		map[cordinatesPlayer2[0]][cordinatesPlayer2[1]]=0;

		matchState=winCondition(int map);
		cout<<map<<endl;

		//Player2 won or not
		if (matchState==0){
			cout<<"Player2 won the game"<<endl;
			break;
		}

	}



}