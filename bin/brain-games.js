#!/usr/bin/env node
import getUserName from '../src/cli.js'
let userName
function name() {
    const userName = getUserName();
};
userName = name