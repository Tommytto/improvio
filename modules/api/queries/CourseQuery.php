<?php

namespace app\modules\api\queries;

use app\modules\api\models\Course;
use app\modules\api\models\User;
use app\modules\api\models\UsersCourse;
use yii\db\ActiveQuery;

/**
 * api module definition class
 */
class CourseQuery extends ActiveQuery
{
    public function byUserId($userId)
    {
        $this->leftJoin(UsersCourse::tableName(), '{{users_course.courseId}} = {{courses.id}}');
        $this->andWhere(['users_course.userId' => $userId]);
        return $this;
    }
}
