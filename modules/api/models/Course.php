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
        return '{{courses}}';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['name', 'description', 'poster'], 'string'],
            [['isPublic'], 'boolean'],
//            [['poster'], 'required'],
            [['author', 'level'], 'integer'],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'name' => 'Course name',
            'poster' => 'Course poster',
            'level' => 'Course level',
            'time' => 'Course time',
            'lectureCount' => 'Course lecture count',
            'price' => 'Course price',
            'datePublish' => 'Course date publish',
            'author' => 'Course author',
            'description' => 'Course description',
        ];
    }
}
