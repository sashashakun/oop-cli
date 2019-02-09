#!/usr/bin/env node
import 'babel-polyfill';
import main from '..';
import program from 'commander';

const { args } = program.parse(process.argv);

main.getLocationDataByIp(args[0])
  .then(res => console.log(res.get('city') || 'No such info in our service, sorry. Try again!'))
  .catch(e => console.log(e));
