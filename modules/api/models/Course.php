<?php

namespace app\modules\api\models;

use Yii;
use yii\db\ActiveRecord;

/**
 * This is the model class for table "user".
 *
 * @property int $id
 * @property string $username
 * @property string $auth_key
 * @property string $password_hash
 * @property string $password_reset_token
 * @property string $email
 * @property int $status
 * @property int $created_at
 * @property int $updated_at
 */
class Course extends ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'courses';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['name', 'description'], 'string'],
            [['isPublic'], 'boolean'],
            [['poster'], 'required'],
            [['author', 'level'], 'integer'],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'name' => 'Username',
            'poster' => 'Username',
            'level' => 'Auth Key',
            'time' => 'Password Hash',
            'lectureCount' => 'Email',
            'price' => 'Email',
            'datePublish' => 'Email',
            'author' => 'Email',
            'description' => 'Email',
        ];
    }
}
