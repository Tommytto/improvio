<?php

namespace app\modules\api\components;

use app\modules\api\models\Course;
use app\modules\api\models\UsersCourse;
use app\modules\api\queries\CourseQuery;
use yii\base\Component;

/**
 * Course component.
 */
class CourseComponent extends Component
{
    public function getUsersCourses($userId)
    {
        $query = new CourseQuery(Course::className());
        return $query->byUserId($userId)->all();
    }
}
