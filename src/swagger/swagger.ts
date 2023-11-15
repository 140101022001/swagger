import * as swaggerJSDoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.3',
    info: {
      title: 'API Title',
      version: '1.0',
    },
    servers: [
      {
        url: 'http://localhost:3002',
      },
      {
        url: 'https://linkstaff.biz:2443',
      },
      {
        url: 'https://linkstaff.online:12443',
      },
    ],
    tags: [
      {
        name: 'auth',
        description: 'Everything about user',
      },
      {
        name: 'API',
        description: 'Concierge and user data',
      },
      {
        name: 'favorite job',
        description: 'Favorite job',
      },
      {
        name: 'viewed job',
        description: 'Viewed job',
      },
    ],
    paths: {
      '/auth/user': {
        get: {
          summary: 'Get all user',
          description:
            "get all user if requested user's role is admin, editor or concierge",
          tags: ['auth'],
          responses: {
            '200': {
              description: 'get user list',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/users',
                  },
                },
              },
            },
            '400': {
              description: 'authorization error',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/authorization_error',
                  },
                },
              },
            },
            '401': {
              description: 'token expired',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/token_expired',
                  },
                },
              },
            },
            '404': {
              description: 'token or user not found',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/token_or_user_not_found',
                  },
                },
              },
            },
          },
        },
      },
      '/auth/search': {
        get: {
          summary: 'Find user',
          description: 'Find user by name, skill or area',
          tags: ['auth'],
          parameters: [
            {
              name: 'name',
              in: 'query',
              description:
                'Find user where search string like email, firstname, phone',
              required: false,
              schema: {
                type: 'string',
              },
            },
            {
              name: 'skill',
              in: 'query',
              description: 'Find user with programing skill',
              required: false,
              schema: {
                type: 'string',
              },
            },
            {
              name: 'area',
              in: 'query',
              description: 'Find user with programing area',
              required: false,
              schema: {
                type: 'string',
              },
            },
          ],
          responses: {
            '200': {
              description: 'user list',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/users',
                  },
                },
              },
            },
            '400': {
              description: 'authorization error',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/authorization_error',
                  },
                },
              },
            },
            '401': {
              description: 'token expired',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/token_expired',
                  },
                },
              },
            },
            '404': {
              description: 'token or user not found',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/token_or_user_not_found',
                  },
                },
              },
            },
          },
        },
      },
      '/auth/get-role': {
        get: {
          summary: "Get user's role",
          description: "Get user's role by jwt",
          tags: ['auth'],
          responses: {
            '200': {
              description: 'return role_id',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      role_id: {
                        type: 'number',
                        example: 3,
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      '/auth/user/{id}': {
        get: {
          summary: 'Get user',
          description:
            "Retrieve user data if the ID belongs to the user or the user's role is admin.",
          tags: ['auth'],
          parameters: [
            {
              name: 'id',
              in: 'path',
              description: 'ID of the user',
              required: true,
              schema: {
                type: 'string',
                example: '3690dc97-9ca6-40e3-839a-89be48753493',
              },
            },
          ],
          responses: {
            '200': {
              description: 'user data',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/user',
                  },
                },
              },
            },
            '400': {
              description: 'authorization error',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/authorization_error',
                  },
                },
              },
            },
            '401': {
              description: 'token expired',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/token_expired',
                  },
                },
              },
            },
            '404': {
              description: 'token or user not found',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/token_or_user_not_found',
                  },
                },
              },
            },
          },
        },
      },
      '/auth/get-concierge': {
        get: {
          summary: 'Get concierges',
          description:
            'Get all concierges or only active concierges, permission / admin or concierge , API token',
          tags: ['auth'],
          parameters: [
            {
              name: 'status',
              in: 'query',
              description:
                "Find concierges with status, If left blank, it will display all concierges. However, if you enter 'active', it will show active concierges",
              required: false,
              schema: {
                type: 'string',
              },
            },
          ],
          responses: {
            '200': {
              description: 'concierge list',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/users',
                  },
                },
              },
            },
            '400': {
              description: 'authorization error',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/authorization_error',
                  },
                },
              },
            },
            '401': {
              description: 'token expired',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/token_expired',
                  },
                },
              },
            },
            '404': {
              description: 'token or user not found',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/token_or_user_not_found',
                  },
                },
              },
            },
          },
        },
      },
      '/auth/get-concierge/line/{email}': {
        get: {
          summary: 'Get concierge',
          description:
            'Get concierge, permission / admin or concierge , API token',
          tags: ['auth'],
          parameters: [
            {
              name: 'email',
              in: 'path',
              description: 'ID of the user',
              required: true,
              schema: {
                $ref: '#/components/schemas/email',
              },
            },
          ],
          responses: {
            '200': {
              description: 'concierge list',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      concierge: {
                        $ref: '#/components/schemas/user',
                      },
                    },
                  },
                },
              },
            },
            '400': {
              description: 'authorization error',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/authorization_error',
                  },
                },
              },
            },
            '401': {
              description: 'token expired',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/token_expired',
                  },
                },
              },
            },
            '404': {
              description: 'token or user not found',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/token_or_user_not_found',
                  },
                },
              },
            },
          },
        },
      },
      '/auth/register': {
        post: {
          summary: 'User register',
          description:
            'Register with email, password, firstname, lastname and gender',
          tags: ['auth'],
          requestBody: {
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    email: {
                      $ref: '#/components/schemas/email',
                    },
                    password: {
                      type: 'string',
                      example: 123456,
                    },
                    firstname: {
                      type: 'string',
                      example: 'nguyen',
                    },
                    lastname: {
                      type: 'string',
                      example: 'hung',
                    },
                    gender: {
                      type: 'boolean',
                      example: true,
                    },
                  },
                  required: [
                    'email',
                    'password',
                    'firstname',
                    'lastname',
                    'gender',
                  ],
                },
              },
            },
          },
          responses: {
            '201': {
              description: 'Register',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/confirm_token',
                  },
                },
              },
            },
          },
        },
      },
      '/auth/register-confirm/{id}/{token}': {
        post: {
          summary: 'Register confirm',
          description: 'Register confirm with id and token',
          tags: ['auth'],
          parameters: [
            {
              name: 'id',
              in: 'path',
              description: 'ID of the user',
              required: true,
              schema: {
                type: 'string',
                example: 'b5c95314-5605-47ca-9f10-57d566899d61',
              },
            },
            {
              name: 'token',
              in: 'path',
              description: 'Mail token',
              required: true,
              schema: {
                type: 'string',
                example:
                  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjRiYzJkMzdlLWJhM2MtNGM0Mi04NGY1LWZlODdkOGVjYzY1OSIsImlhdCI6MTY5OTk0MTQ3OSwiZXhwIjoxNjk5OTQyMDc5fQ._YoyAVpsqRjVRzM6GMVowbTGbwRxWofijgmcuzf2XBw',
              },
            },
          ],
          requestBody: {
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    type: {
                      type: 'string',
                      example: 'REGISTER',
                    },
                  },
                },
              },
            },
          },
          responses: {
            '201': {
              description: 'Register confirm',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/success_message',
                  },
                },
              },
            },
          },
        },
      },
      '/auth/new-code/{id}/{token}': {
        post: {
          summary: 'New confirmation code',
          description: 'New confirmation code',
          tags: ['auth'],
          parameters: [
            {
              name: 'id',
              in: 'path',
              description: 'ID of the user',
              required: true,
              schema: {
                type: 'string',
                example: 'b5c95314-5605-47ca-9f10-57d566899d61',
              },
            },
            {
              name: 'token',
              in: 'path',
              description: 'Mail token',
              required: true,
              schema: {
                type: 'string',
                example:
                  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjRiYzJkMzdlLWJhM2MtNGM0Mi04NGY1LWZlODdkOGVjYzY1OSIsImlhdCI6MTY5OTk0MTQ3OSwiZXhwIjoxNjk5OTQyMDc5fQ._YoyAVpsqRjVRzM6GMVowbTGbwRxWofijgmcuzf2XBw',
              },
            },
          ],
          requestBody: {
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    type: {
                      type: 'string',
                      example: 'REGISTER',
                    },
                  },
                },
              },
            },
          },
          responses: {
            '201': {
              description: 'Register confirm',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/success_message',
                  },
                },
              },
            },
          },
        },
      },
      '/auth/login': {
        post: {
          summary: 'Login',
          description: 'Login with email and password',
          tags: ['auth'],
          requestBody: {
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/login',
                },
              },
            },
          },
          responses: {
            '201': {
              description: 'user login',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      jwt: {
                        type: 'string',
                        example:
                          'bad6177b196d6f643d54cdb2c2b5c8a81984b49593e6fa3f1be1c237a9b7facdc864d900c8a62b9b40e310d106d85d199f7be5dc576d7d0ce3c11798a85f4ed0fcee4014c3ffde2ec6f4ebc0ab72e16e102519b8959ed53a091ce502e873f477be138df28c483d270d048fe3e92e2e55fae23f48445726302bed9db110ef4e5a62c18bd7647ab8cfe893d3cb143c109fa280b1eabb71dcd5cad63deb231d6934782793c3be9106875dae1855211553b391eb253ac8521d59b6780c1aadf58356',
                      },
                      user: {
                        $ref: '#/components/schemas/user',
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      '/auth/forgot-password': {
        post: {
          summary: 'Forgot password',
          description: 'Forgot password',
          tags: ['auth'],
          requestBody: {
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    email: {
                      $ref: '#/components/schemas/email',
                    },
                  },
                },
              },
            },
          },
          responses: {
            '201': {
              description: 'user login',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/confirm_token',
                  },
                },
              },
            },
          },
        },
      },
      '/auth/reset-password': {
        post: {
          summary: 'Reset password',
          description: 'Forgot password',
          tags: ['auth'],
          requestBody: {
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    id: {
                      type: 'string',
                      example: 'b5c95314-5605-47ca-9f10-57d566899d61',
                    },
                    token: {
                      type: 'string',
                      example:
                        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjRiYzJkMzdlLWJhM2MtNGM0Mi04NGY1LWZlODdkOGVjYzY1OSIsImlhdCI6MTY5OTk0MTQ3OSwiZXhwIjoxNjk5OTQyMDc5fQ._YoyAVpsqRjVRzM6GMVowbTGbwRxWofijgmcuzf2XBw',
                    },
                    password: {
                      type: 'string',
                      example: 123456,
                    },
                    passwordConfirmation: {
                      type: 'string',
                      example: 123456,
                    },
                  },
                },
              },
            },
          },
          responses: {
            '201': {
              description: 'reset password',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/success_message',
                  },
                },
              },
            },
          },
        },
      },
      '/auth/logout': {
        post: {
          summary: 'User logout',
          description: 'User logout',
          tags: ['auth'],
          responses: {
            '201': {
              description: 'User logout success',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/success_message',
                  },
                },
              },
            },
          },
        },
      },
      '/auth/refresh': {
        post: {
          summary: 'User refresh token',
          description: 'User refresh token',
          tags: ['auth'],
          parameters: [
            {
              name: 'refreshToken',
              in: 'cookie',
              description: 'refreshToken',
              required: true,
              schema: {
                type: 'string',
              },
            },
          ],
          responses: {
            '201': {
              description: 'User refresh token success',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/success_message',
                  },
                },
              },
            },
          },
        },
      },
      '/auth/change-password/{id}': {
        put: {
          summary: 'Change password',
          description: 'Change password',
          tags: ['auth'],
          parameters: [
            {
              name: 'id',
              in: 'path',
              description: 'ID of the user',
              required: true,
              schema: {
                type: 'string',
                example: '3690dc97-9ca6-40e3-839a-89be48753493',
              },
            },
          ],
          requestBody: {
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    password: {
                      type: 'string',
                      example: 123456,
                    },
                    passwordConfirmation: {
                      type: 'string',
                      example: 123456,
                    },
                    currentPassword: {
                      type: 'string',
                      example: 1234567,
                    },
                  },
                },
              },
            },
          },
          responses: {
            '200': {
              description: 'Change password success',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/success_message',
                  },
                },
              },
            },
          },
        },
      },
      '/auth/update/{id}': {
        put: {
          summary: 'Change user information',
          description: 'Change user information',
          tags: ['auth'],
          parameters: [
            {
              name: 'id',
              in: 'path',
              description: 'ID of the user',
              required: true,
              schema: {
                type: 'string',
                example: '3690dc97-9ca6-40e3-839a-89be48753493',
              },
            },
          ],
          requestBody: {
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/update_user',
                },
              },
            },
          },
          responses: {
            '200': {
              description: 'Change user information success',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/success_message',
                  },
                },
              },
            },
          },
        },
      },
      '/auth/update/concierge/{id}': {
        put: {
          summary: 'Change concierge information',
          description: 'Change concierge email and password',
          tags: ['auth'],
          parameters: [
            {
              name: 'id',
              in: 'path',
              description: 'ID of the user',
              required: true,
              schema: {
                type: 'string',
                example: '3690dc97-9ca6-40e3-839a-89be48753493',
              },
            },
          ],
          requestBody: {
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/login',
                },
              },
            },
          },
          responses: {
            '200': {
              description: 'Change concierge information success',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/success_message',
                  },
                },
              },
            },
          },
        },
      },
      '/auth/update/concierge-status/{id}': {
        put: {
          summary: 'Change concierge status',
          description: 'Change concierge status',
          tags: ['auth'],
          parameters: [
            {
              name: 'id',
              in: 'path',
              description: 'ID of the user',
              required: true,
              schema: {
                type: 'string',
                example: '3690dc97-9ca6-40e3-839a-89be48753493',
              },
            },
          ],
          requestBody: {
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    active: {
                      type: 'boolean',
                      example: true,
                    },
                    conciergeId: {
                      type: 'string',
                    },
                  },
                },
              },
            },
          },
          responses: {
            '200': {
              description: 'Change concierge status success',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/success_message',
                  },
                },
              },
            },
          },
        },
      },
      '/auth/concierge/user-transfer': {
        put: {
          summary: 'Change concierge',
          description: 'Change the concierge assigned to the user',
          tags: ['auth'],
          requestBody: {
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    userId: {
                      type: 'string',
                    },
                    conciergeId: {
                      type: 'string',
                    },
                  },
                },
              },
            },
          },
          responses: {
            '200': {
              description: 'Change the concierge assigned to the user success',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/success_message',
                  },
                },
              },
            },
          },
        },
      },
      '/api/concierge/user/{email}': {
        get: {
          summary: 'Get user data',
          description: 'Get user data',
          tags: ['API'],
          parameters: [
            {
              name: 'email',
              in: 'path',
              description: 'email of the user',
              required: true,
              schema: {
                $ref: '#/components/schemas/email',
              },
            },
          ],
          responses: {
            '200': {
              description: 'Get user data',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/user',
                  },
                },
              },
            },
          },
        },
      },
      '/api/concierge/user': {
        get: {
          summary: 'Get user data',
          description: 'Get user data',
          tags: ['API'],
          responses: {
            '200': {
              description: 'Get user data',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/users',
                  },
                },
              },
            },
          },
        },
      },
      '/api/apply-status': {
        post: {
          summary: 'Change apply status',
          description: "Change user's apply status",
          tags: ['API'],
          requestBody: {
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    user_id: {
                      type: 'string',
                    },
                    company: {
                      type: 'string',
                    },
                    status: {
                      description: 'concierge status',
                      type: 'string',
                    },
                    link: {
                      description: 'access link',
                      type: 'string',
                    },
                    type: {
                      type: 'string',
                      example: 'CONCIERGE',
                      description: 'CONCIERGE or USER',
                    },
                  },
                },
              },
            },
          },
          responses: {
            '201': {
              description: "Change user's apply status",
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/success_message',
                  },
                },
              },
            },
          },
        },
      },
      '/favorite-job/{id}': {
        get: {
          summary: 'Get favorite jobs',
          description: "Get favorite jobs by user's Id",
          tags: ['favorite job'],
          parameters: [
            {
              name: 'id',
              in: 'path',
              description: 'ID of the user',
              required: true,
              schema: {
                type: 'string',
                example: '3690dc97-9ca6-40e3-839a-89be48753493',
              },
            },
          ],
          responses: {
            '200': {
              description: "Get favorite jobs by user's Id",
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/strapi_jobs',
                  },
                },
              },
            },
          },
        },
      },
      '/favorite-job': {
        post: {
          summary: 'Connect/disconnect a job',
          description: 'Connect or disconnect a favorite job',
          tags: ['favorite job'],
          requestBody: {
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    user_id: {
                      type: 'string',
                    },
                    job_id: {
                      type: 'object',
                      properties: {
                        connect: {
                          description: 'connect a job by job_id',
                          type: 'string',
                        },
                        disconnect: {
                          description: 'disconnect a job by job_id',
                          type: 'string',
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          responses: {
            '201': {
              description: 'Connect/disconnect a job success',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/success_message',
                  },
                },
              },
            },
          },
        },
      },
      '/viewed-job/{id}': {
        get: {
          summary: 'Get viewed jobs',
          description: "Get viewed jobs by user's Id",
          tags: ['viewed job'],
          parameters: [
            {
              name: 'id',
              in: 'path',
              description: 'ID of the user',
              required: true,
              schema: {
                type: 'string',
                example: '3690dc97-9ca6-40e3-839a-89be48753493',
              },
            },
          ],
          responses: {
            '200': {
              description: "Get viewed jobs by user's Id",
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/strapi_jobs',
                  },
                },
              },
            },
          },
        },
      },
      '/viewed-job': {
        post: {
          summary: 'Connect/disconnect a job',
          description: 'Connect or disconnect a viewed job',
          tags: ['viewed job'],
          requestBody: {
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    user_id: {
                      type: 'string',
                    },
                    job_id: {
                      type: 'object',
                      properties: {
                        connect: {
                          description: 'connect a job by job_id',
                          type: 'string',
                        },
                        disconnect: {
                          description: 'disconnect a job by job_id',
                          type: 'string',
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          responses: {
            '201': {
              description: 'Connect/disconnect a job success',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/success_message',
                  },
                },
              },
            },
          },
        },
      },
    },
    components: {
      securitySchemes: {
        Bearer: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
      schemas: {
        email: {
          type: 'string',
          format: 'email',
          example: 'hung@gmail.com',
        },
        users: {
          type: 'array',
          items: {
            properties: {
              id: {
                type: 'string',
                example: 'b5c95314-5605-47ca-9f10-57d566899d61',
              },
              email: {
                $ref: '#/components/schemas/email',
              },
              firstname: {
                type: 'string',
                example: 'nguyen',
              },
              lastname: {
                type: 'string',
                example: 'hung',
              },
              firstname_kana: {
                type: 'string',
                example: 'グエン',
              },
              lastname_kana: {
                type: 'string',
                example: 'フン',
              },
              gender: {
                type: 'boolean',
                example: false,
              },
              birthday: {
                type: 'string',
                example: '1951-01-01T00:00:00.000Z',
              },
              phone: {
                type: 'string',
                example: 8043900311,
              },
              zip_code: {
                type: 'string',
                example: 5450042,
              },
              prefecture: {
                type: 'string',
                example: 8043900311,
              },
              location: {
                type: 'string',
                example: '東京',
              },
              job_type: {
                type: 'string',
                example: null,
              },
              job_experience: {
                type: 'string',
                example: null,
              },
              use_phone: {
                type: 'boolean',
                example: false,
              },
              available: {
                type: 'number',
                example: 0,
              },
              nationality: {
                type: 'string',
                example: 'アフガニスタン',
              },
              jlpt: {
                type: 'number',
                example: 0,
              },
              skills: {
                type: 'string',
                example: 'java,php',
              },
              avatar_url: {
                type: 'string',
                example: null,
              },
              line_nickname: {
                type: 'string',
                example: 'hung141201',
              },
              line_qr: {
                type: 'string',
                example: 'https://line.me/ti/p/l8st5EDr20',
              },
              concierge_active: {
                type: 'boolean',
                example: false,
              },
              concierge_note: {
                type: 'string',
                example: null,
              },
            },
          },
        },
        user: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              example: 'b5c95314-5605-47ca-9f10-57d566899d61',
            },
            email: {
              $ref: '#/components/schemas/email',
            },
            firstname: {
              type: 'string',
              example: 'nguyen',
            },
            lastname: {
              type: 'string',
              example: 'hung',
            },
            firstname_kana: {
              type: 'string',
              example: 'グエン',
            },
            lastname_kana: {
              type: 'string',
              example: 'フン',
            },
            gender: {
              type: 'boolean',
              example: false,
            },
            birthday: {
              type: 'string',
              example: '1951-01-01T00:00:00.000Z',
            },
            phone: {
              type: 'string',
              example: 8043900311,
            },
            zip_code: {
              type: 'string',
              example: 5450042,
            },
            prefecture: {
              type: 'string',
              example: 8043900311,
            },
            location: {
              type: 'string',
              example: '東京',
            },
            job_type: {
              type: 'string',
              example: null,
            },
            job_experience: {
              type: 'string',
              example: null,
            },
            use_phone: {
              type: 'boolean',
              example: false,
            },
            available: {
              type: 'number',
              example: 0,
            },
            nationality: {
              type: 'string',
              example: 'アフガニスタン',
            },
            jlpt: {
              type: 'number',
              example: 0,
            },
            skills: {
              type: 'string',
              example: 'java,php',
            },
            avatar_url: {
              type: 'string',
              example: null,
            },
            line_nickname: {
              type: 'string',
              example: 'hung141201',
            },
            line_qr: {
              type: 'string',
              example: 'https://line.me/ti/p/l8st5EDr20',
            },
            concierge_active: {
              type: 'boolean',
              example: false,
            },
            concierge_note: {
              type: 'string',
              example: null,
            },
          },
        },
        update_user: {
          type: 'object',
          properties: {
            firstname: {
              type: 'string',
              example: 'nguyen',
            },
            lastname: {
              type: 'string',
              example: 'hung',
            },
            firstname_kana: {
              type: 'string',
              example: 'グエン',
            },
            lastname_kana: {
              type: 'string',
              example: 'フン',
            },
            gender: {
              type: 'boolean',
              example: false,
            },
            birthday: {
              type: 'string',
              example: '1951-01-01T00:00:00.000Z',
            },
            phone: {
              type: 'string',
              example: 8043900311,
            },
            zip_code: {
              type: 'string',
              example: 5450042,
            },
            prefecture: {
              type: 'string',
              example: 8043900311,
            },
            location: {
              type: 'string',
              example: '東京',
            },
            job_type: {
              type: 'string',
              example: null,
            },
            job_experience: {
              type: 'string',
              example: null,
            },
            use_phone: {
              type: 'boolean',
              example: false,
            },
            available: {
              type: 'number',
              example: 0,
            },
            nationality: {
              type: 'string',
              example: 'アフガニスタン',
            },
            jlpt: {
              type: 'number',
              example: 0,
            },
            skills: {
              type: 'string',
              example: 'java,php',
            },
            avatar_url: {
              type: 'string',
              example: null,
            },
            line_nickname: {
              type: 'string',
              example: 'hung141201',
            },
            line_qr: {
              type: 'string',
              example: 'https://line.me/ti/p/l8st5EDr20',
            },
            concierge_note: {
              type: 'string',
              example: null,
            },
            isActive: {
              type: 'boolean',
              example: true,
            },
            verify_code: {
              type: 'string',
              example: null,
            },
          },
        },
        login: {
          type: 'object',
          properties: {
            email: {
              $ref: '#/components/schemas/email',
            },
            password: {
              type: 'string',
              example: 123456,
            },
          },
          required: ['email', 'password'],
        },
        jobs: {
          type: 'array',
          items: {
            properties: {
              id: {
                type: 'number',
                example: 1234,
              },
              attributes: {
                type: 'object',
                properties: {
                  company: {
                    type: 'object',
                    properties: {
                      data: {
                        type: 'object',
                        properties: {
                          id: {
                            type: 'number',
                            example: 1234,
                          },
                          attributes: {
                            type: 'object',
                            properties: {
                              appointment: {
                                type: 'string',
                              },
                              benefit: {
                                type: 'string',
                              },
                              conditions: {
                                type: 'string',
                              },
                              createdAt: {
                                type: 'string',
                              },
                              email: {
                                type: 'string',
                              },
                              memo: {
                                type: 'string',
                              },
                              name: {
                                type: 'string',
                              },
                              phone: {
                                type: 'string',
                              },
                              rep: {
                                type: 'string',
                              },
                              updatedAt: {
                                type: 'string',
                              },
                              url: {
                                type: 'string',
                              },
                              working_condition: {
                                type: 'string',
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                  id: {
                    type: 'number',
                    example: 1234,
                  },
                  company_hq: {
                    type: 'string',
                  },
                  createdAt: {
                    type: 'string',
                  },
                  description: {
                    type: 'string',
                  },
                  introduction: {
                    type: 'string',
                  },
                  jlpt: {
                    type: 'string',
                  },
                  job_id: {
                    type: 'string',
                  },
                  keyword: {
                    type: 'string',
                  },
                  location: {
                    type: 'string',
                  },
                  must: {
                    type: 'string',
                  },
                  occupation: {
                    type: 'string',
                  },
                  salary_max: {
                    type: 'number',
                    example: 1200,
                  },
                  salary_min: {
                    type: 'number',
                    example: 700,
                  },
                  status: {
                    type: 'number',
                    example: 0,
                  },
                  updatedAt: {
                    type: 'string',
                  },
                  want: {
                    type: 'string',
                  },
                  work_place: {
                    type: 'string',
                  },
                  working_hour: {
                    type: 'string',
                  },
                },
              },
            },
          },
        },
        strapi_jobs: {
          type: 'object',
          properties: {
            data: {
              $ref: '#/components/schemas/jobs',
            },
            meta: {
              type: 'object',
              properties: {
                pagination: {
                  type: 'object',
                  properties: {
                    page: {
                      type: 'number',
                      example: 1,
                    },
                    pageSize: {
                      type: 'number',
                      example: 25,
                    },
                    pageCount: {
                      type: 'number',
                      example: 2,
                    },
                    total: {
                      type: 'number',
                      example: 50,
                    },
                  },
                },
              },
            },
          },
        },
        authorization_error: {
          type: 'object',
          properties: {
            statusCode: {
              type: 'number',
              example: 400,
            },
            message: {
              type: 'string',
              example: 'Authorization Error!',
            },
          },
        },
        token_expired: {
          type: 'object',
          properties: {
            statusCode: {
              type: 'number',
              example: 401,
            },
            message: {
              type: 'string',
              example: 'Token has expired!',
            },
          },
        },
        token_or_user_not_found: {
          type: 'object',
          properties: {
            statusCode: {
              type: 'number',
              example: 404,
            },
            message: {
              type: 'string',
              example: 'Token not found! || User not found!',
            },
          },
        },
        success_message: {
          type: 'object',
          properties: {
            status: {
              type: 'number',
              example: 200,
            },
            message: {
              type: 'string',
              example: 'success',
            },
          },
        },
        confirm_token: {
          type: 'object',
          properties: {
            status: {
              type: 'number',
              example: 200,
            },
            data: {
              type: 'object',
              properties: {
                id: {
                  type: 'string',
                  example: 'b5c95314-5605-47ca-9f10-57d566899d61',
                },
                token: {
                  type: 'string',
                  example:
                    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjRiYzJkMzdlLWJhM2MtNGM0Mi04NGY1LWZlODdkOGVjYzY1OSIsImlhdCI6MTY5OTk0MTQ3OSwiZXhwIjoxNjk5OTQyMDc5fQ._YoyAVpsqRjVRzM6GMVowbTGbwRxWofijgmcuzf2XBw',
                },
                email: {
                  $ref: '#/components/schemas/email',
                },
              },
            },
          },
        },
      },
    },
    security: [
      {
        Bearer: [],
      },
    ],
  },
  apis: ['routes/*.js'],
};

export const swaggerSpec = swaggerJSDoc(options);
