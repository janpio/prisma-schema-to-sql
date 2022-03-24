const fs = require('fs')
import {execa} from 'execa';

path.join(__dirname, './node_modules/.bin/prisma');
path.join(process.cwd(), './node_modules/.bin/prisma')

path.join(__dirname, '../node_modules/.bin/prisma');
path.join(process.cwd(), '../node_modules/.bin/prisma')

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