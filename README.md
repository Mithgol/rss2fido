[![(a histogram of downloads)](https://nodei.co/npm-dl/rss2fido.png?height=3)](https://npmjs.org/package/rss2fido)

This module (`rss2fido`) is an application that prepares RSS entries for being posted to Fidonet.

RSS2Fido is written in JavaScript and requires [Node.js](http://nodejs.org/) to run. Node.js version 4.0.0 (or newer) because RSS2Fido uses some ECMAScript 2015 (ES6) features.

RSS2Fido is currently in an early phase of its development and thus does not have the desired level of feature completeness.

## Installing RSS2Fido

[![(npm package version)](https://nodei.co/npm/rss2fido.png?downloads=true&downloadRank=true)](https://npmjs.org/package/rss2fido)

### Installing as a global application

* Latest packaged version: `npm install -g rss2fido`

* Latest githubbed version: `npm install -g https://github.com/Mithgol/rss2fido/tarball/master`

The application becomes installed globally and appears in the `PATH`. Then use `rss2fido` command to run the application.

### Installing as a portable application

Instead of the above, download the [ZIP-packed](https://github.com/Mithgol/rss2fido/archive/master.zip) source code of the application and unpack it to some directory. Then run `npm install --production` in that directory.

You may now move that directory (for example, on a flash drive) across systems as long as they have the required version of Node.js installed.

Unlike the above (`npm -g`), the application does not appear in the `PATH`, and thus you'll have to run it directly from the application's directory. You'll also have to run `node rss2fido` instead of `rss2fido`.

## Using RSS2Fido

You may run the installed application by typing in the command line:

`rss2fido loginName textOutput fileLastRead`

It uses the following parameters:

* `textOutput` — path to an output text file. That is the file where the recent RSS entries should be written to.
   * If the path is not absolute, it is treated as relative to the directory where RSS2Fido resides.

* `fileLastRead` — path to a file where the ID of the last read RSS entries is stored.
   * If the path is not absolute, it is treated as relative to the directory where RSS2Fido resides.
   * If the file (designated by `fileLastRead`) does not exist, then RSS2Fido cannot determine how many last RSS entries to post. The default maximum is used.

An optional parameter `"--CHRS=CP866 2"` is accepted before or after any of the above parameters. If such parameter is present, RSS2Fido writes RSS entries in the given encoding instead of the default UTF-8 encoding.
   * Instead of `CP866 2` such parameter can designate any of Level 2 (single-byte) encodings supported by the [FTS-5003.001](http://ftsc.org/docs/fts-5003.001) standard in Fidonet.
   * That single-byte encoding must also be supported by the [`iconv-lite`](https://github.com/ashtuchkin/iconv-lite) module. (Don't worry, most of them are supported.)
   * The corresponding `CHRS` kludge is added to the output message exactly as the [FTS-5003.001](http://ftsc.org/docs/fts-5003.001) standard dictates.
   * Where a character or a sequence of characters from RSS cannot be represented in the designated encoding (for example, East Asian character “魔” in Russian CP866 encoding), a [Fidonet Unicode substring](https://github.com/Mithgol/fiunis) is created to represent such characters.

An optional parameter `"--debug"` is accepted before or after any of the above parameters. If such parameter is present, RSS2Fido enters its debug mode.

## Testing RSS2Fido

[![(build testing status)](https://img.shields.io/travis/Mithgol/rss2fido/master.svg?style=plastic)](https://travis-ci.org/Mithgol/rss2fido)

It is necessary to install [JSHint](http://jshint.com/) for testing.

* You may install JSHint globally (`npm install jshint -g`) or locally (`npm install jshint` in the directory of RSS2Fido).

After that you may run `npm test` (in the directory of RSS2Fido). Only the JS code errors are caught; the code's behaviour is not tested.

## License

MIT license (see the `LICENSE` file).
