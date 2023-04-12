Empli Site (Henry PF)

### Requirements

- Node `>=18.12`
- Git `>=2.34`
- PNPM `>=8.1`

### Development

Clone this repo.

```
git clone https://github.com/empli-org/empli-site \
&& cd empli-site
```

Install dependencies

```
pnpm install
```

Create environment file

```
cp .env-sample .env
```

Init Database:

```
pnpm init:db
```

Run the project:

```
pnpm dev
```

Lint:

```
pnpm lint
```

Format:

```
pnpm format
```

### Production

Build:

```
pnpm build
```

Start:

```
pnpm start
```
