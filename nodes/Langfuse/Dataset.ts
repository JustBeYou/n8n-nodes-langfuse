import { INodeProperties } from "n8n-workflow";

export const datasetFields: INodeProperties[] = [

    {
        displayName: 'Dataset name',
        name: 'datasetName',
        type: 'string',
        required: true,
        default: '',
        description: 'The name of the dataset to retrieve from LangFuse',
        displayOptions: {
            show: {
                resource: ['dataset'],
                operation: ['getItems'],
            },
        },
        routing: {
            request: {
                qs: {
                    datasetName: '={{$value}}',
                },
            },
        },
    },
    {
        displayName: 'Page',
        name: 'page',
        type: 'number',
        required: true,
        default: 1,
        displayOptions: {
            show: {
                resource: ['dataset'],
                operation: ['getItems'],
            },
        },
        routing: {
            request: {
                qs: {
                    page: '={{$value}}',
                },
            },
        },
    },
    {
        displayName: 'Limit',
        name: 'limit',
        type: 'number',
        required: true,
        default: 10,
        displayOptions: {
            show: {
                resource: ['dataset'],
                operation: ['getItems'],
            },
        },
        routing: {
            request: {
                qs: {
                    limit: '={{$value}}',
                },
            },
        },
    },
];

export const datasetOperations: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['dataset'],
            },
        },
        options: [
            {
                name: 'Get items',
                value: 'getItems',
                action: 'Get dataset items',
                description: 'Retrieve items from a dataset',
                routing: {
                    request: {
                        method: 'GET',
                        url: '=/api/public/dataset-items',
                    },
                },
            },
        ],
        default: 'getItems',
    }
]