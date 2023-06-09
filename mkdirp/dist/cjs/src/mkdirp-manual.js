"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mkdirpManual = exports.mkdirpManualSync = void 0;
const path_1 = require("path");
const opts_arg_js_1 = require("./opts-arg.js");
const mkdirpManualSync = (path, options, made) => {
    const parent = (0, path_1.dirname)(path);
    const opts = { ...(0, opts_arg_js_1.optsArg)(options), recursive: false };
    if (parent === path) {
        try {
            return opts.mkdirSync(path, opts);
        }
        catch (er) {
            // swallowed by recursive implementation on posix systems
            // any other error is a failure
            const fer = er;
            if (fer && fer.code !== 'EISDIR') {
                throw er;
            }
            return;
        }
    }
    try {
        opts.mkdirSync(path, opts);
        return made || path;
    }
    catch (er) {
        const fer = er;
        if (fer && fer.code === 'ENOENT') {
            return (0, exports.mkdirpManualSync)(path, opts, (0, exports.mkdirpManualSync)(parent, opts, made));
        }
        if (fer && fer.code !== 'EEXIST' && fer && fer.code !== 'EROFS') {
            throw er;
        }
        try {
            if (!opts.statSync(path).isDirectory())
                throw er;
        }
        catch (_) {
            throw er;
        }
    }
};
exports.mkdirpManualSync = mkdirpManualSync;
exports.mkdirpManual = Object.assign(async (path, options, made) => {
    const opts = (0, opts_arg_js_1.optsArg)(options);
    opts.recursive = false;
    const parent = (0, path_1.dirname)(path);
    if (parent === path) {
        return opts.mkdirAsync(path, opts).catch(er => {
            // swallowed by recursive implementation on posix systems
            // any other error is a failure
            const fer = er;
            if (fer && fer.code !== 'EISDIR') {
                throw er;
            }
        });
    }
    return opts.mkdirAsync(path, opts).then(() => made || path, async (er) => {
        const fer = er;
        if (fer && fer.code === 'ENOENT') {
            return (0, exports.mkdirpManual)(parent, opts).then((made) => (0, exports.mkdirpManual)(path, opts, made));
        }
        if (fer && fer.code !== 'EEXIST' && fer.code !== 'EROFS') {
            throw er;
        }
        return opts.statAsync(path).then(st => {
            if (st.isDirectory()) {
                return made;
            }
            else {
                throw er;
            }
        }, () => {
            throw er;
        });
    });
}, { sync: exports.mkdirpManualSync });
//# sourceMappingURL=mkdirp-manual.js.map