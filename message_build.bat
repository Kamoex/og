@echo off

set PROTO_FOLDER=./code/message/proto
set JS_FOLDER=./Launch/message
set TS_FOLDER=./code/message


for /f "delims=" %%i in ('dir /b "%PROTO_FOLDER%\*.proto"') do (
pbjs -t static-module -w commonjs -o %JS_FOLDER%/%%~ni.js %PROTO_FOLDER%/%%i 
pbts -o %TS_FOLDER%/%%~ni.d.ts %JS_FOLDER%/%%~ni.js 

)

for /f "delims=" %%i in ('dir /b "%TS_FOLDER%\*.*"') do (
echo %TS_FOLDER% %%i
)



echo MESSAGE_OK
pause >nul