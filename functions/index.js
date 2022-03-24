const fs = require('fs')
import {execa} from 'execa';
import path from 'path'

const file1 = '/node_modules/.bin/prisma'
path.join(__dirname, '.' + file1);
path.join(process.cwd(), '.' + file1)
path.join(__dirname, '..' + file1);
path.join(process.cwd(), '..' + file1)

const file2 = '/node_modules/prisma/package.json'
path.join(__dirname, '.' + file2);
path.join(process.cwd(), '.' + file2)
path.join(__dirname, '..' + file2);
path.join(process.cwd(), '..' + file2)

const file3 = '/node_modules/@prisma/engines/libquery_engine-rhel-openssl-1.0.x.so.node'
path.join(__dirname, '.' + file3);
path.join(process.cwd(), '.' + file3)
path.join(__dirname, '..' + file3);
path.join(process.cwd(), '..' + file3)

exports.handler = async function (event, context, callback) {
  const schema = event.body
  const schemafile = '/tmp/schema.prisma'

  fs.writeFileSync(schemafile, schema)

  const {stdout} = await execa('./node_modules/.bin/prisma', ['validate', '--schema', schemafile]);

  let body = stdout
  return {
    statusCode: 200,
    body: body,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  }
}