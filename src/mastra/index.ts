import { Mastra } from '@mastra/core/mastra';
import { createLogger } from '@mastra/core/logger';
import { weatherWorkflow } from './workflows';
import { weatherAgent } from './agents';
import { researchNetwork } from './networks';

export const mastra = new Mastra({
	workflows: { weatherWorkflow },
	networks: {
		researchNetwork,
	},
	agents: { weatherAgent },
	logger: createLogger({
		name: 'Mastra',
		level: 'info',
	}),
});
