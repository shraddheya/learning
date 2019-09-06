#include <Windows.h>
#include <iostream>
#include <fstream>
#include <string>
#include <vector>

using namespace std;

void replaceStringInFile(string fileName, string searchString, string replaceString){
  fstream t;
  string  str;
  size_t  index           = 0;
  // char    searchString[]  = R""""("outputPath": "dist/testingfile",)"""";
  // char    replaceString[] = R""""("outputPath": "dist",)"""";
  size_t  lenStr          = strlen(searchString.c_str());
  t.open(fileName, ios::in);
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
}

int getProjNameidx (const string& str){
  int idx;
  idx = str.find_last_of("/\\");
  return idx+1;
}

int indexInString(string bigstring, string substring) {
  char *p = strstr(&bigstring[0], &substring[0]);
  auto i  = distance(&bigstring[0], &p[0]);
  if (!p) return -1;
  return i;
}

int main(int argc, const char** argv) {
  vector<string>    projs;
  string            routing   = "true";
  string            cssSchema = "sass";
  for(auto i = 1; i < argc; i++){
    string a = argv[i];
    if (a == "-nr") routing = "false";
    if (indexInString("css, scss, sass, less", a) != -1) cssSchema = a;
    if (indexInString("css, scss, sass, less, -nr", a) == -1) projs.push_back(a);
  }
  for(string p : projs){
    cout << p << endl;
    auto          idxS          = getProjNameidx(p);
    string        projName      = p.substr(idxS);
    string        basename      = p.substr(0, idxS - 1);
    string        angularjson   = p + "angular.json";
    string        packagejson   = p + "package.json";
    string        tsconfigjson  = p + "tsconfig.json";
    string        indexFile     = p + "src" + "index.html";
    string        electronMain  = p + "electronMain.js";
    CreateDirectoryA(&p[0] , NULL);



    replaceStringInFile(basename + "angular.json", R""""("outputPath": "dist/)"""" + projName + R""""(",)"""", R""""("outputPath": "dist",)"""");
    replaceStringInFile(basename + "angular.json", R""""("outputPath": "dist/)"""" + projName + R""""(",)"""", R""""("outputPath": "dist",)"""");
    replaceStringInFile(basename + "angular.json", R""""("outputPath": "dist/)"""" + projName + R""""(",)"""", R""""("outputPath": "dist",)"""");
    replaceStringInFile(basename + "angular.json", R""""("outputPath": "dist/)"""" + projName + R""""(",)"""", R""""("outputPath": "dist",)"""");
  }

  // replaceStringInFile(basename)
  #pragma region to delete /*
  for(auto i = 1; i < argc; i++){
    #pragma region char *  configjson
    char *  configjson      = R""""""({
  "configurations": [
    {
      "name": "Win32",
      "includePath": [
        "${workspaceFolder}/**",
        "${workspaceFolder}"
      ],
      "defines": [
        "_DEBUG",
        "UNICODE",
        "_UNICODE"
      ],
      "windowsSdkVersion": "10.0.18362.0",
      "compilerPath": "",
      "cStandard": "c11",
      "cppStandard": "c++17",
      "intelliSenseMode": "${default}"
    }
  ],
  "version": 4
}
)"""""";
    #pragma endregion
    #pragma region char *  launchjson
    char *  launchjson1     = R"""""({
  "version": "0.2.0",
    "configurations": [
      {
        "name": "(msvc) Launch",
        "type": "cppvsdbg",
        "request": "launch",
        "preLaunchTask": "msvc build",
        "program": "${workspaceFolder}/)""""";
    char *  launchjson2     = R"""""(,
        "args": [],
        "stopAtEntry": false,
        "cwd": "${workspaceFolder}",
        "environment": [],
        "externalConsole": false
      }
    ]
})""""";    
    #pragma endregion
    #pragma region char *  tasksjson
    char *  tasksjson1      = R"""""({
  "version": "2.0.0",
  "tasks": [
    {
      "label": "msvc build",
      "type": "shell",
      "command": "cl.exe",
      "args": [
        "/EHsc",
        "/Zi",
        "/Fe:",
        ")""""";
    char *  tasksjson2      = R"""""("
      ],
      "group": {
        "kind": "build",
        "isDefault": true
      },
      "presentation": {
        "reveal": "always"
      },
      "problemMatcher": "$msCompile"
    }
  ]
})""""";
    #pragma endregion
    #pragma region char *  mainText
    char *  mainText        = R"""""(#include <iostream>

using namespace std;

int main(int argc, const char** argv) {
  cout << "Hello Shraddheya" << endl;
  system("pause");
  return 0;
} )""""";
    #pragma endregion
    
    string  baseDirName     = argv[i];
    string  projName        = getProjName(baseDirName);
    string  vscodeDirName   = baseDirName + "\\.vscode";
    string  configfile      = vscodeDirName + "\\c_cpp_properties.json";
    string  launchfile      = vscodeDirName + "\\launch.json";
    string  tasksfile       = vscodeDirName + "\\tasks.json";
    string  mainFile        = baseDirName + "\\" + projName + ".cpp";
    CreateDirectoryA((char *)argv[i], NULL);
    CreateDirectoryA((char *)&vscodeDirName[0], NULL);
    ofstream mainFstream(mainFile);
    mainFstream << mainText;
    mainFstream.close();
    ofstream configFstream(configfile);
    configFstream << configjson;
    configFstream.close();
    ofstream launchFstream(launchfile);
    launchFstream << launchjson1 
                  << projName
                  << ".exe"
                  << launchjson2;
    launchFstream.close();
    ofstream tasksFstream(tasksfile);
    tasksFstream  << tasksjson1
                  << projName
                  << ".exe\", \""
                  << projName
                  << ".cpp";
    tasksFstream.close();
  }
  */
  #pragma endregion
  return 0;
} 