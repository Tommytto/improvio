<?php

namespace app\modules\api\components;

use app\modules\api\models\Course;
use app\modules\api\models\Stage;
use app\modules\api\models\UsersCourse;
use app\modules\api\queries\CourseQuery;
use app\modules\api\queries\StageQuery;
use yii\base\Component;

/**
 * Stage component.
 */
class LessonComponent extends Component
{
    public function getCourseStages($courseId)
    {
        $query = new StageQuery(Stage::className());
        return $query->byCourseId($courseId)->all();
    }
}
