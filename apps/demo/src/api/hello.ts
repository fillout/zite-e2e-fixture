import { z } from 'zod';
import { createEndpoint } from 'zitejs/backend';

export default createEndpoint({
  description: 'Health endpoint for the e2e fixture',
  inputSchema: z.object({}),
  outputSchema: z.object({ ok: z.boolean() }),
  execute: async () => ({ ok: true }),
});
