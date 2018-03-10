<?php

namespace app\modules\api\queries;

use app\modules\api\models\Course;
use app\modules\api\models\CourseStage;
use app\modules\api\models\User;
use app\modules\api\models\UsersCourse;
use yii\db\ActiveQuery;

/**
 * api module definition class
 */
class StageQuery extends ActiveQuery
{
    public function byCourseId($courseId)
    {
        $this->leftJoin(CourseStage::tableName(), '{{course_stage.stageId}} = {{stages.id}}');
        $this->andWhere(['course_stage.courseId' => $courseId]);
        return $this;
    }
}
