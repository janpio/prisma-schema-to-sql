import tempy from 'tempy'
const fs = require('fs')
import {execa} from 'execa';

exports.handler = async function (event, context, callback) {
  const schema = event.body
  const schemafile = tempy.file({extension: 'prisma'})

  fs.writeFileSync(schemafile, schema)

  const {stdout} = await execa('npx', ['prisma', 'validate', '--schema', schemafile]);

  let body = stdout
  return {
    statusCode: 200,
    body: body,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  }
}