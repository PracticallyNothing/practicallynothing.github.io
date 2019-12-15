@echo off
echo Preprocessing HTML...
for /f %%f in ('dir /b .\Sources\') do mcpp-2.7.2\bin\mcpp.exe -P -W 0 Sources\%%f -o %%f
echo HTML Done!

echo Compiling SASS...
dart-sass\sass.bat Sources\SASS:.\
echo SASS compilation complete!

set /p DUMMY=Hit ENTER to continue...