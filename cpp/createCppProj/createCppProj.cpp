#include <Windows.h>
#include <iostream>
#include <fstream>
#include <vector>
#include <string>
#include <sys/stat.h>
#include <map>

using namespace std;

string getProjName (const string& str){
  size_t idx;
  idx = str.find_last_of("/\\");
  return str.substr(idx+1);
}

wstring s2ws(const string& s){
  int len;
  int slength = (int)s.length() + 1;
  len = MultiByteToWideChar(CP_ACP, 0, s.c_str(), slength, 0, 0); 
  wchar_t* buf = new wchar_t[len];
  MultiByteToWideChar(CP_ACP, 0, s.c_str(), slength, buf, len);
  std::wstring r(buf);
  delete[] buf;
  return r;
}

int main(int argc, const char** argv) {
  for (auto i = 1; i < argc; i++){
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
  return 0;
} 