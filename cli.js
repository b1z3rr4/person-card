#!/usr/bin/env node
import { fpart, spart, tpart, fopart } from './index.js'

const pkg = fpart + spart + tpart + fopart;
console.log(pkg);