#include <iostream>
#include <fstream>
#include <string>
using namespace std;


int main(int argc, const char** argv) {
  fstream t;
  string  str;
  size_t  index           = 0;
  char    searchString[]  = R""""("outputPath": "dist/testingfile",)"""";
  char    replaceString[] = R""""("outputPath": "dist",)"""";
  size_t  lenStr          = strlen(searchString);
  t.open("testingfile.json", ios::in);
  t.seekg(0, ios::end);   
  str.reserve(t.tellg());
  t.seekg(0, ios::beg);
  str.assign((istreambuf_iterator<char>(t)),
              istreambuf_iterator<char>());
  t.close();
  while(1){
    index = str.find(searchString, index);
    if (index == std::string::npos) break;
    str.replace(index, lenStr, replaceString);
    index += lenStr;
  }
  const char * newStr = str.c_str();
  lenStr = strlen(newStr);  
  t.open("testingfile.json", ios::out);
  t.write(newStr, lenStr);
  t.close();
  return 0;
}