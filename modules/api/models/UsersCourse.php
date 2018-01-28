<?php

namespace app\modules\api\models;

use Yii;
use yii\db\ActiveRecord;

/**
 * This is the model class for table "user".
 *
 * @property int $userId
 * @property int $courseId
 */
class UsersCourse extends ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return '{{users_course}}';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [
                ['userId'],
                'exist',
                'targetClass'     => User::className(),
                'targetAttribute' => 'id',
            ],
            [
                ['courseId'],
                'exist',
                'targetClass'     => Course::className(),
                'targetAttribute' => 'id',
            ],

        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'userId'   => 'User id',
            'courseId' => 'Course id',
        ];
    }
}
