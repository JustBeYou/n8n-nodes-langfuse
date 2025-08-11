import { INodeType, INodeTypeDescription, NodeConnectionType } from 'n8n-workflow';
import { promptFields, promptOperations } from './Prompt';
import { datasetFields, datasetOperations } from './Dataset';

export class Langfuse implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Langfuse',
		name: 'langfuse',
		icon: 'file:langfuse.svg',
		group: ['transform'],
		version: 1,
		description: 'Interact with Langfuse API',
		defaults: {
			name: 'Interact with Langfuse API',
		},
		inputs: [NodeConnectionType.Main],
		outputs: [NodeConnectionType.Main],
		credentials: [
			{
				name: 'langfuseApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{$credentials.host}}',
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Prompt',
						value: 'prompt',
					},
					{
						name: 'Dataset',
						value: 'dataset',
					},
				],
				default: 'prompt',
			},
			...promptFields,
			...promptOperations,
			...datasetFields,
			...datasetOperations,
		],
	};
}
