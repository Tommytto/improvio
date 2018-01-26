<?php

use app\modules\api\components\CourseComponent;

$params = require __DIR__ . '/params.php';
$db     = require __DIR__ . '/db.php';

$config = [
    'id'         => 'basic',
    'basePath'   => dirname(__DIR__),
    'bootstrap'  => ['log'],
    'aliases'    => [
        '@bower' => '@vendor/bower-asset',
        '@npm'   => '@vendor/npm-asset',
    ],
    'components' => [
        'courseComponent' => [
            'class' => CourseComponent::class,
        ],
        'request'         => [
            // !!! insert a secret key in the following (if it is empty) - this is required by cookie validation
            'cookieValidationKey' => 'test',
            'parsers'             => [
                'application/json'    => 'yii\web\JsonParser',
                'multipart/form-data' => 'yii\web\MultipartFormDataParser',
            ],
        ],
        'assetManager'    => [
            'linkAssets' => true,
        ],
        'cache'           => [
            'class' => 'yii\caching\FileCache',
        ],
        'user'            => [
            'identityClass'   => 'app\models\User',
            'enableAutoLogin' => true,
        ],
        'errorHandler'    => [
            'errorAction' => 'site/error',
        ],
        'mailer'          => [
            'class'            => 'yii\swiftmailer\Mailer',
            // send all mails to a file by default. You have to set
            // 'useFileTransport' to false and configure a transport
            // for the mailer to send real emails.
            'useFileTransport' => true,
        ],
        'log'             => [
            'traceLevel' => YII_DEBUG ? 3 : 0,
            'targets'    => [
                [
                    'class'  => 'yii\log\FileTarget',
                    'levels' => [
                        'error',
                        'warning',
                    ],
                ],
            ],
        ],
        'db'              => $db,
        'urlManager'      => [
            'enablePrettyUrl' => true,
            'showScriptName'  => false,
            'rules'           => [
                'POST api/<controller:[\w-]+>'            => 'api/<controller>/create',
                'api/<controller:[\w-]+>'                 => 'api/<controller>/index',
                'PATCH api/<controller:[\w-]+>/<id:\d+>'  => 'api/<controller>/update',
                'DELETE api/<controller:[\w-]+>/<id:\d+>' => 'api/<controller>/delete',
                'api/<controller:\w+>/<id:\d+>'           => 'api/<controller>/view',

                'POST api/<controller:\w+>/<id:\d+>/<action>' => 'api/<controller>/<action>',
            ],
        ],
    ],
    'modules'    => [
        'api' => [
            'class' => 'app\modules\api\Rest',
        ],
    ],
    'params'     => $params,
];

if (YII_ENV_DEV) {
    // configuration adjustments for 'dev' environment
    $config['bootstrap'][]      = 'debug';
    $config['modules']['debug'] = [
        'class' => 'yii\debug\Module',
        // uncomment the following to add your IP if you are not connecting from localhost.
        //'allowedIPs' => ['127.0.0.1', '::1'],
    ];

    $config['bootstrap'][]    = 'gii';
    $config['modules']['gii'] = [
        'class' => 'yii\gii\Module',
        // uncomment the following to add your IP if you are not connecting from localhost.
        //'allowedIPs' => ['127.0.0.1', '::1'],
    ];
}

return $config;
