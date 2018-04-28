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
class StageLessons extends ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return '{{stage_lessons}}';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [
                ['stageId'],
                'exist',
                'targetClass'     => Stage::className(),
                'targetAttribute' => 'id',
            ],
            [
                ['lessonId'],
                'exist',
                'targetClass'     => Lesson::className(),
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
            'stageId'   => 'Stage id',
            'lessonId' => 'Lesson id',
        ];
    }
}
