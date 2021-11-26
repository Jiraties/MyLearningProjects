#include <iostream>
#include <ctime>

void PrintIntroduction(int Difficuly) 
{
    std::cout << " ___________________    . , ; .\n" << "(___________________|~~~~~X.;' .\n" << "                      ' `' ' `";
    std::cout << "\nYou are an agent trying to defuse a level " << Difficuly << " Bomb";
    std::cout << "\nYou need to crack the code to defuse the bomb\n \n";
}

bool PlayGame(int Difficulty) 
{
    PrintIntroduction(Difficulty);

    const int CodeA = rand() % Difficulty + Difficulty;
    const int CodeB = rand() % Difficulty + Difficulty;
    const int CodeC = rand() % Difficulty + Difficulty;

    const int CodeSum = CodeA + CodeB + CodeC;
    const int CodeProduct = CodeA * CodeB * CodeC;

    // Print sum and product
    std::cout << "+ There are 3 numbers in the code \n";
    std::cout << "+ The codes add-up to: "<< CodeSum << std::endl;
    std::cout << "+ The codes multiplies to give : "<< CodeProduct << std::endl << std::endl;

    // Store player's guess
    int GuessA, GuessB, GuessC;
    std::cin >> GuessA >> GuessB >> GuessC;

    int GuessSum = GuessA + GuessB + GuessC;
    int GuessProduct = GuessA * GuessB * GuessC;

    // Check if the player's guess is correct 
    if (GuessSum == CodeSum && GuessProduct == CodeProduct) 
    {
        std::cout << "Nice agent, You've defused bomb #" << Difficulty << std::endl;
        return true;
    } else
    {
        std::cout << "The bomb is not defused! Try again. \n";
        return false;
    }
}

int main() 
{
    srand(time(NULL));

    int LevelDifficulty = 1;
    int MaxDifficulty = 6;

    while (LevelDifficulty <= MaxDifficulty) // Loop levels until 
    {
        bool bLevelComplete = PlayGame(LevelDifficulty);
        std::cin.clear(); // Clears any errors
        std::cin.ignore(); // Discards buffers

        if (bLevelComplete)
        {
            // Increase level difficulty
            ++LevelDifficulty;
        }
    }

    std::cout << "\n*** Congrats! You've defused all bombs. What a heroic moment!\n";
    return 0; 
}