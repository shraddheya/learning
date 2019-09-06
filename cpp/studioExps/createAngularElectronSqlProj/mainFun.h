#pragma once

#include "includes.h"
#include "preqFuns.h"

int mainFun(int argc, const char** argv) {
  vector<string>    projs;
  string            routing = "true";
  string            cssSchema = "sass";
  for (auto i = 1; i < argc; i++) {
    string a = argv[i];
    if (a == "-nr") routing = "false";
    if (indexInString("css, scss, sass, less", a) != -1) cssSchema = a;
    if (indexInString("css, scss, sass, less, -nr", a) == -1) projs.push_back(a);
  }
  for (string p : projs) {
    cout << p << endl;
    auto          idxS = getProjNameidx(p);
    string        projName = p.substr(idxS);
    string        basename = p.substr(0, idxS - 1);
    string        angularjson = p + "angular.json";
    string        packagejson = p + "package.json";
    string        tsconfigjson = p + "tsconfig.json";
    string        indexFile = p + "src" + "index.html";
    string        electronMain = p + "electronMain.js";
    CreateDirectoryA(&p[0], NULL);


    /*replaceStringInFile(basename + "angular.json", R""""("outputPath": "dist/)"""" + projName + R""""(",)"""", R""""("outputPath": "dist",)"""");
    replaceStringInFile(basename + "angular.json", R""""("outputPath": "dist/)"""" + projName + R""""(",)"""", R""""("outputPath": "dist",)"""");
    replaceStringInFile(basename + "angular.json", R""""("outputPath": "dist/)"""" + projName + R""""(",)"""", R""""("outputPath": "dist",)"""");
    replaceStringInFile(basename + "angular.json", R""""("outputPath": "dist/)"""" + projName + R""""(",)"""", R""""("outputPath": "dist",)"""");*/
  }


  return 0;
}