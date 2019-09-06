#pragma once


void replaceStringInFile(string fileName, string searchString, string replaceString) {
  fstream t;
  string  str;
  size_t  index = 0;
  // char    searchString[]  = R""""("outputPath": "dist/testingfile",)"""";
  // char    replaceString[] = R""""("outputPath": "dist",)"""";
  size_t  lenStr = strlen(searchString.c_str());
  t.open(fileName, ios::in);
  t.seekg(0, ios::end);
  str.reserve(t.tellg());
  t.seekg(0, ios::beg);
  str.assign((istreambuf_iterator<char>(t)),
    istreambuf_iterator<char>());
  t.close();
  while (1) {
    index = str.find(searchString, index);
    if (index == std::string::npos) break;
    str.replace(index, lenStr, replaceString);
    index += lenStr;
  }
  const char* newStr = str.c_str();
  lenStr = strlen(newStr);
  t.open(fileName, ios::out);
  t.write(newStr, lenStr);
  t.close();
}

int getProjNameidx(const string& str) {
  int idx;
  idx = str.find_last_of("/\\");
  return idx + 1;
}

int indexInString(string bigstring, string substring) {
  char* p = strstr(&bigstring[0], &substring[0]);
  auto i = distance(&bigstring[0], &p[0]);
  if (!p) return -1;
  return i;
}