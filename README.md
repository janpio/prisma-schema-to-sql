# prisma-schema-to-sql
Simple tool to input a Prisma schema and get the generated SQL (via `migrate diff`)

2 frames:
- Left: Textarea that accepts (and potentially highlights and validates) a Prisma Schema + Button
- Right: On button click shows the CLI output of `validate` and `migrate diff` and outputs the resulting SQL
