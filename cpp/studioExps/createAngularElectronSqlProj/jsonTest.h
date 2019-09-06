#pragma once
#include "includes.h"
#include "json11.hpp"
using namespace json11;
int mainFun(int argc, const char** argv) {
  string fileNm = R"""""(C:\Users\shrad\Documents\00exp\unversioned\createAuto\node\elansqlite\angular.json)""""";
  fstream t;
  string  str;
  string  err;
  size_t  index = 0;
  t.open(fileNm, ios::in);
  t.seekg(0, ios::end);
  str.reserve(t.tellg());
  t.seekg(0, ios::beg);
  str.assign((istreambuf_iterator<char>(t)),
    istreambuf_iterator<char>());
  t.close();
  Json angularjson = Json::parse(str, err);
  cout << str << endl << angularjson["projects"]["elansqlite"]["architect"]["build"]["options"]["outputPath"].dump() << endl;
}