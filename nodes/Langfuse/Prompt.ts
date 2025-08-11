import { INodeProperties } from "n8n-workflow";

export const promptFields: INodeProperties[] = [
    {
        displayName: 'Prompt Name',
        name: 'promptName',
        type: 'string',
        required: true,
        default: '',
        description: 'The name of the prompt to retrieve from LangFuse',
        displayOptions: {
            show: {
                resource: ['prompt'],
                operation: ['get'],
            },
        },
    },
    {
        displayName: 'Prompt Label',
        name: 'label',
        type: 'string',
        required: true,
        default: 'production',
        description: 'Deployment label of the prompt version to retrieve (defaults to Production)',
        displayOptions: {
            show: {
                resource: ['prompt'],
                operation: ['get'],
            },
        },
        routing: {
            request: {
                qs: {
                    label: '={{$value}}',
                },
            },
        },
    },
];

export const promptOperations: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['prompt'],
            },
        },
        options: [
            {
                name: 'Get',
                value: 'get',
                action: 'Get a prompt',
                description: 'Retrieve a prompt by name',
                routing: {
                    request: {
                        method: 'GET',
                        url: '=/api/public/v2/prompts/{{$parameter["promptName"]}}',
                    },
                },
            },
        ],
        default: 'get',
    },
]