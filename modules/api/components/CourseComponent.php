<?php

namespace app\modules\api\components;

use app\modules\api\models\Course;
use app\modules\api\models\UsersCourse;
use app\modules\api\queries\CourseQuery;
use yii\base\Component;

/**
 * This is the model class for table "user".
 */
class CourseComponent extends Component
{
    public function getUsersCourses($userId)
    {
        $query = new CourseQuery(Course::class);
        return $query->byUserId($userId)->all();
    }
}
