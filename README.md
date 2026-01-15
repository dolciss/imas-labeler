# IM@S Bluesky Labeler

Use this repository to get started with your own Bluesky Labeler. Click the "Use this template" button above to create a new repository, and then follow the instructions below.

As an example, this repository includes a labeler for setting your favorite of the five elements (Earth, Fire, Air, Water, Love) to your profile. You can edit the labels, descriptions, and other parameters in the `src/constants.ts` file.

**This project requires familiarity with TypeScript, the command line and Linux. I hope to improve the onboarding experience in the future.**

## Prerequisites

- [Node.js](https://nodejs.org/) v22.11.0 (LTS) for the runtime
- [Bun](https://bun.sh/) (latest) for package management

## Setup

Clone the repo and run `bun i` to install the dependencies. This project uses [Bun](https://bun.sh/) for package management.

### 1. Configure Accounts

This labeler supports managing multiple labeler accounts simultaneously.
Copy `accounts.json.example` to `accounts.json` and fill in the details for each account you want to run:

```json
[
  {
    "did": "did:plc:xxx",
    "signingKey": "xxx",
    "host": "127.0.0.1",
    "port": 4100,
    "hostName": "feed1.example.com",
    "bskyHandle": "labeler1.bsky.social",
    "bskyPassword": "xxx"
  },
  {
    "did": "did:plc:yyy",
    "signingKey": "yyy",
    "host": "127.0.0.1",
    "port": 4102,
    "hostName": "feed2.example.com",
    "bskyHandle": "labeler2.bsky.social",
    "bskyPassword": "yyy"
  }
]
```

Run `bunx @skyware/labeler setup` to convert an existing account into a labeler. You can exit after converting the account; there's no need to add the labels with the wizard. We'll do that from code.

### 2. Global Configuration

Copy the `.env.example` file to `.env`. This file contains global settings shared across all labelers, like the Jetstream URL and metrics port.

```Dotenv
PDS_URL=https://bsky.social
DEFAULT_LANGUAGE=en
POST_DATE=2026-01-01
METRICS_HOST=127.0.0.1
METRICS_PORT=4101
FIREHOSE_URL=wss://jetstream.atproto.tools/subscribe
CURSOR_UPDATE_INTERVAL=10000
```

A `cursor.txt` file containing the time in microseconds also needs to be present. If it doesn't exist, it will be created with the current time.

### 3. Define Labels and Posts

Edit `src/constants.ts` to define your labels.

- **`targetHandle`**: Specify which labeler account handles this label.
- **`rkey`**: Placeholder initially; you will fill this in the next step.

Example:

```typescript
export const LABELS: Label[] = [
  {
    rkey: 'insert-rkey-here',
    identifier: 'earth',
    locales: [
      { lang: 'en', name: 'Earth 🌎', description: 'The element of Earth' },
      { lang: 'ja', name: '土 🌎', description: '土の属性' },
    ],
    targetHandle: 'labeler1.bsky.social', // Labels for the first account
  },
  {
    rkey: 'insert-rkey-here',
    identifier: 'fire',
    locales: [
      { lang: 'en', name: 'Fire 🔥', description: 'The element of Fire' },
      { lang: 'ja', name: '火 🔥', description: '火の属性' },
    ],
    targetHandle: 'labeler2.bsky.social', // Labels for the second account
  },
];
```

### 4. Create Posts and Labels

For each configured account, run `bun set-posts <handle>` to create the necessary posts (and delete old ones):

```bash
bun set-posts labeler1.bsky.social
```

The script will output `rkey` values for the label posts and the "delete" post.
**Copy and paste these rkeys back into `src/constants.ts`:**

- Update `rkey` in `LABELS` array for the corresponding labels.

Finally, run `bun set-labels <handle>` to register the label definitions on the network for all configured accounts:

```bash
bun set-labels labeler1.bsky.social
```

Alternatively, create the posts by hand, edit `src/constants.ts` and use `bunx @skyware/labeler label add` to add the labels.

### 5. Run the Server

Start the project with `bun run start`. This will start servers for all configured accounts.

The server connects to [Jetstream](https://github.com/bluesky-social/jetstream), which provides a WebSocket endpoint that emits ATProto events in JSON. There are [many public instances](https://github.com/bluesky-social/jetstream/blob/main/README.md#public-instances) available:

| Hostname                          | Region  |
| --------------------------------- | ------- |
| `jetstream1.us-east.bsky.network` | US-East |
| `jetstream2.us-east.bsky.network` | US-East |
| `jetstream1.us-west.bsky.network` | US-West |
| `jetstream2.us-west.bsky.network` | US-West |

## Deployment

Each labeler server needs to be reachable outside your local network using the URL you provided during the account setup (typically using a reverse proxy such as [Caddy](https://caddyserver.com/)). Map the ports defined in `accounts.json` (e.g., 4100, 4102) to your domains.

```Caddyfile
labeler1.example.com {
	reverse_proxy 127.0.0.1:4100
}

labeler2.example.com {
    reverse_proxy 127.0.0.1:4102
}
```

Metrics are exposed on the defined `METRICS_PORT` for [Prometheus](https://prometheus.io/). [This dashboard](https://grafana.com/grafana/dashboards/11159-nodejs-application-dashboard/) can be used to visualize the metrics in [Grafana](https://grafana.com/grafana/).

You can check that the labeler is reachable by checking the `/xrpc/com.atproto.label.queryLabels` endpoint of your labeler's server. A new, empty labeler returns `{"cursor":"0","labels":[]}`.

## Credits

- [alice](https://bsky.app/profile/did:plc:by3jhwdqgbtrcc7q4tkkv3cf), creator of the [Bluesky Labeler Starter Kit](https://github.com/aliceisjustplaying/labeler-starter-kit-bsky)
- [futur](https://bsky.app/profile/did:plc:uu5axsmbm2or2dngy4gwchec), creator of the [skyware libraries](https://skyware.js.org/) which make it easier to build things for Bluesky
