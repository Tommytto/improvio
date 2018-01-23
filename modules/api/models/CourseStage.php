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
class CourseStage extends ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return '{{course_stage}}';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [
                ['courseId'],
                'exist',
                'targetClass'     => Course::class,
                'targetAttribute' => 'id',
            ],
            [
                ['stageId'],
                'exist',
                'targetClass'     => Stage::class,
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
            'courseId' => 'Course id',
            'stageId'  => 'Stage id',
        ];
    }
}
