#include <iostream>
#include "includes/json.hpp"

using namespace std;
using json = nlohmann::json;

int main(int argc, const char** argv) {
    cout << "hello" << endl;
    for (auto i = 1; i < argc; i++){
      cout << "argument number " << i << " : " << argv[i] << endl;
    }
    system("pause");
    return 0;
} 