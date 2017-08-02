#!/usr/bin/env node

var rss2fido = require('./r2f-core.js');
var clog = console.log;

var textOutput, fileLastRead;

var params = [].concat(process.argv);
params.shift(); // 'node'
params.shift(); // 'rss2fido'

var CHRS = 'UTF-8 4';
var debugMode = false;
params = params.filter(nextParam => {
   if( nextParam.startsWith('--CHRS=') ){
      CHRS = nextParam.slice('--CHRS='.length);
      return false;
   } else if( nextParam.toLowerCase() === '--debug' ){
      debugMode = true;
      return false;
   }

   return true;
});

if( params.length < 2 ){
   clog('Usage:');
   clog('   rss2fido textOutput fileLastRead');
   clog('');
   clog('Parameters:');
   clog('');
   clog('textOutput   -- path to an output text file where the most recent');
   clog('                RSS entries will be written.');
   clog('');
   clog('fileLastRead -- path to a file where the ID of the last read');
   clog('                RSS entry will be stored.');
   clog('');
   clog('An optional "--CHRS=CP866 2" parameter (before or after any of');
   clog('the above) switches rss2fido from UTF-8 to the given charset.');
   clog('All of the FTS-5003.001 Level 2 character sets are supported');
   clog('as long as https://github.com/ashtuchkin/iconv-lite knows of them');
   clog('(usually it does).');
   clog('');
   clog('An optional "--debug" parameter (before or after any of the above)');
   clog('switches rss2fido to the debug mode.');
   process.exit(1);
} else {
   textOutput   = params[0];
   fileLastRead = params[1];
}

rss2fido({
   textOutput: textOutput,
   fileLastRead: fileLastRead,
   CHRS: CHRS,
   debug: debugMode
});
