"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const scully_1 = require("@scullyio/scully");
exports.myPlugin = 'myPlugin';
const myFunctionPlugin = async (html) => {
    return html;
};
const validator = async () => [];
scully_1.registerPlugin('render', exports.myPlugin, myFunctionPlugin, validator);
//# sourceMappingURL=plugin.js.map