"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const mkdirp = __importStar(require("mkdirp"));
/**
 * Writes binaries to a local file and attach
 * a callback to notify when the writing is
 * complete.
 *
 * @param filename: The name of file to write.
 * @param content : The content to write to file.
 */
exports.saveFile = (serverUri, directory, contactNumber, filename, content) => {
    return new Promise((resolve, reject) => {
        let uri = serverUri + contactNumber + '/' + directory;
        if (contactNumber === '') {
            uri = serverUri + '/' + directory;
        }
        mkdirp(uri, function (err) {
            if (err) {
                reject({ message: err });
                throw err;
            }
            ;
            const wstream = fs.createWriteStream(uri + '/' + filename);
            wstream.on('finish', function () {
                console.log('Done writing file...');
                resolve({ message: 'Done writing file' });
            });
            wstream.write(content);
            wstream.end();
        });
    });
};
/**
 * Decodes a base64 encoded binaries using the
 * inbuilt NodeJS modules.
 *
 * @param fileBinaries: Encoded base64 binaries
 * @returns {Buffer} : Decoded file binaries
 */
exports.decodeB64File = (fileBinaries) => {
    return new Buffer(fileBinaries, 'base64');
};
//# sourceMappingURL=FileUtils.js.map